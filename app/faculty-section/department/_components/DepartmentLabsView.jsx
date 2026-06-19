'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const CATEGORY_LABELS = {
  general: 'List of Laboratories',
  btech: 'B.Tech Laboratories',
  msc: 'M.Sc / M.Tech Laboratories',
  facility: 'Facilities',
  equipment: 'R&D Equipment',
};

export default function DepartmentLabsView({
  departmentCode,
  menuItems,
  pageClassName,
  cssPrefix = 'cse',
  fallbackLabs = [],
  showCategories = false,
}) {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/v1/departments/${departmentCode}/labs?active_only=true`,
          { cache: 'no-store' }
        );
        if (!res.ok) return;
        const json = await res.json();
        const rows = Array.isArray(json?.data) ? json.data : [];
        if (!cancelled && rows.length > 0) setLabs(rows);
      } catch (error) {
        console.error(error);
      }
    };
    void load();
    return () => { cancelled = true; };
  }, [departmentCode]);

  const labGroups = useMemo(() => {
    if (labs.length > 0) {
      const grouped = {};
      labs.forEach((lab) => {
        const cat = lab.category || 'general';
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(lab.lab_name_en || lab.lab_name);
      });
      return grouped;
    }
    if (showCategories && typeof fallbackLabs === 'object' && !Array.isArray(fallbackLabs)) {
      return fallbackLabs;
    }
    return { general: Array.isArray(fallbackLabs) ? fallbackLabs : [] };
  }, [labs, fallbackLabs, showCategories]);

  const renderTable = (items, title) => (
    <div key={title} className="labs-group">
      <h1>{title}</h1>
      <table className="labs-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Laboratory Name</th>
          </tr>
        </thead>
        <tbody>
          {items.map((lab, index) => (
            <tr key={`${title}-${index}`}>
              <td>{index + 1}</td>
              <td>{typeof lab === 'string' ? lab : lab.lab_name_en || lab.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className={pageClassName}>
      <div className={`${cssPrefix}-labs-shell`}>
        <aside className={`${cssPrefix}-labs-sidebar`} aria-label="Department navigation">
          <nav>
            {menuItems.map((item) => (
              <Link className={item.active ? 'active' : ''} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <section className={`${cssPrefix}-labs-content`}>
          {Object.entries(labGroups).map(([category, items]) =>
            items.length > 0
              ? renderTable(items, CATEGORY_LABELS[category] || category)
              : null
          )}
        </section>
      </div>
    </main>
  );
}
