'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export default function DepartmentContactView({
  departmentCode,
  menuItems,
  pageClassName,
  cssPrefix = 'cse',
  fallbackContact = {},
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/v1/departments/${departmentCode}/contact`,
          { cache: 'no-store' }
        );
        if (!res.ok) return;
        const json = await res.json();
        if (!cancelled && json?.data) setContact(json.data);
      } catch (error) {
        console.error(error);
      }
    };
    void load();
    return () => { cancelled = true; };
  }, [departmentCode]);

  const data = useMemo(() => {
    if (contact) {
      return {
        headName: contact.head_name,
        designation: contact.head_designation || 'Head of Department',
        departmentName: contact.department_name_en,
        instituteName: contact.institute_name || 'National Institute of Technology Hamirpur',
        addressLine: contact.address_line,
        state: contact.state || 'Himachal Pradesh',
        pinCode: contact.pin_code || '177005',
        phone: contact.phone,
        hodEmail: contact.hod_email,
        officeEmail: contact.office_email,
      };
    }
    return fallbackContact;
  }, [contact, fallbackContact]);

  return (
    <main className={pageClassName}>
      <div className={`${cssPrefix}-contact-shell`}>
        <aside className={`${cssPrefix}-contact-sidebar`} aria-label="Department navigation">
          <nav>
            {menuItems.map((item) => (
              <Link className={item.active ? 'active' : ''} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section className={`${cssPrefix}-contact-content`}>
          <div className="contact-card">
            <h1>Contact Information</h1>
            <address>
              <strong>{data.headName}</strong>
              <span>{data.designation}</span>
              <span>{data.departmentName}</span>
              <span>{data.instituteName}</span>
              {data.addressLine && <span>{data.addressLine}</span>}
              <span>
                {data.state}, Pin No. {data.pinCode}, India.
              </span>
            </address>
            <div className="contact-details">
              {data.phone && (
                <p>
                  <strong>Phone No.:</strong> {data.phone}
                </p>
              )}
              {data.hodEmail && (
                <p>
                  <strong>HoD Email:</strong> {data.hodEmail}
                </p>
              )}
              {data.officeEmail && (
                <p>
                  <strong>Office Email:</strong> {data.officeEmail}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
