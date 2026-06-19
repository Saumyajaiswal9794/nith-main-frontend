'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

function StaffRows({ rows }) {
  return rows.map((member, index) => (
    <tr key={`${member.id || member.name}-${index}`}>
      <td>{member.serial || index + 1}</td>
      <td>{member.name}</td>
      <td>{member.designation}</td>
      <td>{member.phone || '-'}</td>
      <td>{member.email || '-'}</td>
    </tr>
  ));
}

export default function DepartmentStaffView({
  departmentCode,
  menuItems,
  pageClassName,
  cssPrefix = 'cse',
  fallbackOffice = [],
  fallbackTechnical = [],
}) {
  const [officeStaff, setOfficeStaff] = useState(fallbackOffice);
  const [technicalStaff, setTechnicalStaff] = useState(fallbackTechnical);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/v1/departments/${departmentCode}/staff?active_only=true`,
          { cache: 'no-store' }
        );
        if (!res.ok) return;
        const json = await res.json();
        const rows = Array.isArray(json?.data) ? json.data : [];
        if (cancelled || rows.length === 0) return;
        setOfficeStaff(
          rows
            .filter((r) => r.staff_type === 'office')
            .map((r, i) => ({
              serial: String(i + 1),
              name: r.name,
              designation: r.designation,
              phone: r.phone,
              email: r.email,
              id: r.id,
            }))
        );
        setTechnicalStaff(
          rows
            .filter((r) => r.staff_type === 'technical')
            .map((r, i) => ({
              serial: `${i + 1}.`,
              name: r.name,
              designation: r.designation,
              phone: r.phone,
              email: r.email,
              id: r.id,
            }))
        );
      } catch (error) {
        console.error(error);
      }
    };
    void load();
    return () => { cancelled = true; };
  }, [departmentCode]);

  const office = useMemo(
    () => (officeStaff.length ? officeStaff : fallbackOffice),
    [officeStaff, fallbackOffice]
  );
  const technical = useMemo(
    () => (technicalStaff.length ? technicalStaff : fallbackTechnical),
    [technicalStaff, fallbackTechnical]
  );

  return (
    <main className={pageClassName}>
      <div className={`${cssPrefix}-staff-shell`}>
        <aside className={`${cssPrefix}-staff-sidebar`} aria-label="Department navigation">
          <nav>
            {menuItems.map((item) => (
              <Link className={item.active ? 'active' : ''} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section className={`${cssPrefix}-staff-content`}>
          <div className="staff-table-wrap">
            <table className="staff-table">
              <caption>Office Staff</caption>
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Phone No.</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <StaffRows rows={office} />
                <tr className="staff-section-row">
                  <td colSpan="5">Technical Staff</td>
                </tr>
                <StaffRows rows={technical} />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
