'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

function renderTitle(pub) {
  const title = pub.title || '';
  const url = pub.url;
  if (url) {
    return (
      <>
        {title}{' '}
        {url.startsWith('http') && (
          <>
            DOI:{' '}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </>
        )}
      </>
    );
  }
  if (title.includes('DOI:')) {
    const [text, doi] = title.split('DOI:');
    return (
      <>
        {text}
        DOI:{' '}
        <a href={doi.trim()} target="_blank" rel="noopener noreferrer">
          {doi.trim()}
        </a>
      </>
    );
  }
  return title;
}

export default function DepartmentPublicationsView({
  departmentCode,
  menuItems,
  pageClassName,
  cssPrefix = 'cse',
  fallbackPublications = [],
}) {
  const [publications, setPublications] = useState(fallbackPublications);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/v1/departments/${departmentCode}/publications?active_only=true`,
          { cache: 'no-store' }
        );
        if (!res.ok) return;
        const json = await res.json();
        const rows = Array.isArray(json?.data) ? json.data : [];
        if (!cancelled && rows.length > 0) setPublications(rows);
      } catch (error) {
        console.error(error);
      }
    };
    void load();
    return () => { cancelled = true; };
  }, [departmentCode]);

  const items = useMemo(
    () => (publications.length ? publications : fallbackPublications),
    [publications, fallbackPublications]
  );

  return (
    <main className={pageClassName}>
      <div className={`${cssPrefix}-research-shell`}>
        <aside className={`${cssPrefix}-research-sidebar`} aria-label="Department navigation">
          <nav>
            {menuItems.map((item) => (
              <Link className={item.active ? 'active' : ''} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section className={`${cssPrefix}-research-content`}>
          <h1>Research Publications</h1>
          <div className="research-table-wrapper">
            <table className="research-table">
              <thead>
                <tr>
                  <th>Year</th>
                  <th>Author(s)</th>
                  <th>Title & Vol. No.</th>
                  <th>Journal Name</th>
                  <th>
                    Indexing (SCI) Web of<br />Science/Scopus
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((pub, index) => (
                  <tr key={pub.id || index}>
                    <td>{pub.year}</td>
                    <td>{pub.authors}</td>
                    <td>{renderTitle(pub)}</td>
                    <td>{pub.journal}</td>
                    <td>{pub.indexing || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
