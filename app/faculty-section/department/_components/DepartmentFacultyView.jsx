'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

function FacultyCard({ member, featured = false }) {
  return (
    <article className={featured ? 'faculty-card faculty-card-featured' : 'faculty-card'}>
      <div className="faculty-photo" aria-hidden="true">
        {member.photo_url ? (
          <img src={member.photo_url} alt="" className="faculty-photo-image" />
        ) : (
          featured && <div className="faculty-photo-crop" />
        )}
      </div>

      <div className="faculty-hover-panel">
        <p>
          <strong>Email</strong>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </p>

        <p>
          <strong>Domains</strong>
          <span>{member.interests}</span>
        </p>

        <a href="#" className="faculty-read-more">
          Read more
        </a>
      </div>

      <div className="faculty-info">
        <h3>{member.name}</h3>
        <p>{member.designation}</p>
      </div>
    </article>
  );
}

function groupFacultyRows(rows) {
  const groups = [];
  const groupMap = new Map();

  rows.forEach((row) => {
    const title = row.group_title || 'Faculty';
    if (!groupMap.has(title)) {
      const group = {
        title,
        featured: Boolean(row.is_featured),
        members: [],
      };
      groupMap.set(title, group);
      groups.push(group);
    }

    const group = groupMap.get(title);
    if (row.is_featured || title === 'Professor') {
      group.featured = true;
    }

    group.members.push({
      name: row.name,
      designation: row.designation_en || row.designation || '',
      interests: row.interests || '',
      email: row.email || '',
      photo_url: row.photo_url || '',
    });
  });

  return groups;
}

export default function DepartmentFacultyView({
  departmentCode,
  menuItems,
  pageClassName = 'cse-faculty-page',
  cssPrefix = 'cse',
  fallbackGroups = [],
}) {
  const shellClass = `${cssPrefix}-faculty-shell`;
  const sidebarClass = `${cssPrefix}-faculty-sidebar`;
  const contentClass = `${cssPrefix}-faculty-content`;
  const [facultyGroups, setFacultyGroups] = useState(fallbackGroups);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadFaculty = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/v1/departments/${departmentCode}/faculty?language=en&active_only=true`,
          { cache: 'no-store' }
        );

        if (!res.ok) {
          return;
        }

        const json = await res.json();
        const rows = Array.isArray(json?.data) ? json.data : [];

        if (!cancelled && rows.length > 0) {
          setFacultyGroups(groupFacultyRows(rows));
        }
      } catch (error) {
        console.error(`Failed to load ${departmentCode} faculty:`, error);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void loadFaculty();

    return () => {
      cancelled = true;
    };
  }, [departmentCode]);

  const groupsToRender = useMemo(
    () => (facultyGroups.length > 0 ? facultyGroups : fallbackGroups),
    [facultyGroups, fallbackGroups]
  );

  return (
    <main className={pageClassName}>
      <div className={shellClass}>
        <aside className={sidebarClass} aria-label="Department navigation">
          <nav>
            {menuItems.map((item) => (
              <Link
                className={item.active ? 'active' : ''}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className={contentClass}>
          {loading && groupsToRender === fallbackGroups && (
            <p className="faculty-loading-note">Loading faculty directory...</p>
          )}

          {groupsToRender.map((group) => (
            <section className="faculty-group" key={group.title}>
              <h1>{group.title}</h1>

              <div className={group.featured ? 'faculty-featured-grid' : 'faculty-grid'}>
                {group.members.map((member) => (
                  <FacultyCard
                    featured={group.featured}
                    key={`${group.title}-${member.email || member.name}`}
                    member={member}
                  />
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </main>
  );
}
