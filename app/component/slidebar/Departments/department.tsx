import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ChevronRight, ArrowUpRight, Cpu, Atom, Library, Loader2 } from 'lucide-react';

const API_BASE = 'http://localhost:4000/departments';

const CATEGORY_MAP: Record<string, { category: string; category2: string; icon: any; section: string; section2: string }> = {
  cse:  { category: 'Engineering',     category2: 'अभियांत्रिकी', icon: Cpu,     section: 'B.Tech / M.Tech',         section2: 'बी.टेक / एम.टेक' },
  ce:   { category: 'Engineering',     category2: 'अभियांत्रिकी', icon: Cpu,     section: 'B.Tech / M.Tech',         section2: 'बी.टेक / एम.टेक' },
  che:  { category: 'Engineering',     category2: 'अभियांत्रिकी', icon: Cpu,     section: 'B.Tech / M.Tech',         section2: 'बी.टेक / एम.टेक' },
  ece:  { category: 'Engineering',     category2: 'अभियांत्रिकी', icon: Cpu,     section: 'B.Tech / M.Tech',         section2: 'बी.टेक / एम.टेक' },
  ee:   { category: 'Engineering',     category2: 'अभियांत्रिकी', icon: Cpu,     section: 'B.Tech / M.Tech',         section2: 'बी.टेक / एम.टेक' },
  me:   { category: 'Engineering',     category2: 'अभियांत्रिकी', icon: Cpu,     section: 'B.Tech / M.Tech',         section2: 'बी.टेक / एम.टेक' },
  mse:  { category: 'Engineering',     category2: 'अभियांत्रिकी', icon: Cpu,     section: 'B.Tech / M.Tech',         section2: 'बी.टेक / एम.टेक' },
  chem: { category: 'Sciences',        category2: 'विज्ञान',       icon: Atom,    section: 'Pure Sciences',           section2: 'शुद्ध विज्ञान' },
  mnc:  { category: 'Sciences',        category2: 'विज्ञान',       icon: Atom,    section: 'Pure Sciences',           section2: 'शुद्ध विज्ञान' },
  phy:  { category: 'Sciences',        category2: 'विज्ञान',       icon: Atom,    section: 'Pure Sciences',           section2: 'शुद्ध विज्ञान' },
  ces:  { category: 'Sciences',        category2: 'विज्ञान',       icon: Atom,    section: 'Centres',                section2: 'केंद्र' },
  arch: { category: 'Liberal Arts',    category2: 'उदार कला',     icon: Library, section: 'Professional Schools',    section2: 'व्यावसायिक स्कूल' },
  mgt:  { category: 'Liberal Arts',    category2: 'उदार कला',     icon: Library, section: 'Professional Schools',    section2: 'व्यावसायिक स्कूल' },
  hss:  { category: 'Liberal Arts',    category2: 'उदार कला',     icon: Library, section: 'Humanities',             section2: 'मानविकी' },
};

function Department() {
  const language = useSelector((state: RootState) => state.language.value);
  const [departments, setDepartments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}?status=active`)
      .then(res => res.json())
      .then(json => {
        if (json.success) setDepartments(json.data.filter((d: any) => d.status === 'active'));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Group departments by category/section from CATEGORY_MAP
  const grouped: { id: string; category: string; category2: string; icon: any; sections: { title: string; title2: string; links: { title: string; title2: string; href: string }[] }[] }[] = [];
  const sectionMap: Record<string, { title: string; title2: string; links: any[] }> = {};

  departments.forEach(dept => {
    const mapping = CATEGORY_MAP[dept.code];
    if (!mapping) return;
    const sKey = mapping.category + '||' + mapping.section;
    if (!sectionMap[sKey]) {
      sectionMap[sKey] = { title: mapping.section, title2: mapping.section2, links: [] };
    }
    sectionMap[sKey].links.push({
      title: dept.name_en,
      title2: dept.name_hi || dept.name_en,
      href: `/faculty-section/department/${dept.slug}`,
    });
  });

  const catMap: Record<string, { id: string; category: string; category2: string; icon: any; sections: any[] }> = {};
  Object.entries(sectionMap).forEach(([key, section]) => {
    const cat = key.split('||')[0];
    const firstDept = departments.find((d: any) => CATEGORY_MAP[d.code]?.category === cat);
    const mapping = firstDept ? CATEGORY_MAP[firstDept.code] : null;
    if (!mapping) return;
    if (!catMap[cat]) {
      catMap[cat] = { id: Object.keys(catMap).length + 1 < 10 ? '0' + String(Object.keys(catMap).length + 1) : String(Object.keys(catMap).length + 1), category: mapping.category, category2: mapping.category2, icon: mapping.icon, sections: [] };
    }
    catMap[cat].sections.push(section);
  });

  Object.values(catMap).forEach(c => grouped.push(c));

  if (loading) {
    return (
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 flex items-center justify-center">
          <Loader2 className="animate-spin text-[#800000]" size={24} />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
          {grouped.map((column) => (
            <div key={column.id} className="flex flex-col">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group/header">
                <span className="font-mono text-base sm:text-lg md:text-xl text-gray-200 group-hover/header:text-[#800000] transition-colors duration-300">
                  {column.id}
                </span>
                <div className="flex items-center gap-1 sm:gap-2 border-l-2 border-[#800000] pl-2 sm:pl-3">
                  <column.icon
                    size={14}
                    className="text-gray-400 group-hover/header:text-gray-900 transition-colors sm:w-4 sm:h-4"
                  />
                  <h3 className="text-[clamp(10px,2vw,14px)] font-bold uppercase tracking-wider text-gray-800">
                    {language == 'en' ? column.category : column.category2}
                  </h3>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {column.sections.map((section, idx) => (
                  <div key={idx} className="group/section">
                    <h4 className="text-[clamp(9px,1.8vw,12px)] font-semibold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 pl-1 sm:pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                      {language == 'en' ? section.title : section.title2}
                    </h4>
                    <ul className="space-y-0.5 sm:space-y-1">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            className="flex items-center justify-between group/link py-1.5 sm:py-2 px-1 sm:px-2 rounded-r hover:bg-gray-50 transition-all duration-300"
                          >
                            <div className="flex items-center gap-2 sm:gap-3">
                              <ChevronRight
                                size={12}
                                className="text-gray-300 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5"
                              />
                              <span className="text-[clamp(10px,2vw,14px)] font-medium text-gray-600 group-hover/link:text-black transition-colors">
                                {language == 'en' ? link.title : link.title2}
                              </span>
                            </div>
                            <ArrowUpRight
                              size={10}
                              className="opacity-0 -translate-x-2 text-[#800000] group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 sm:w-3 sm:h-3"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Department;
