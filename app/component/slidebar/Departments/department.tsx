import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ArrowUpRight, ChevronRight, Cpu, Atom, Library, Loader2 } from 'lucide-react';

interface DepartmentRecord {
    id: number;
    code: string;
    name_en: string;
    name_hi: string | null;
    slug: string | null;
    description_short_en: string | null;
    description_short_hi: string | null;
    is_active: boolean;
}

const API_BASE = 'http://localhost:4000/v1/departments';

const getDepartmentHref = (code: string) => {
    const normalized = code.toLowerCase();
    if (normalized === 'cse') return '/faculty-section/department/cse';
    if (normalized === 'mnc') return '/faculty-section/department/mnc';
    if (normalized === 'chem' || normalized === 'chemical') return '/faculty-section/department/chem';
    return '#';
};

const FALLBACK_GROUPS = [
    {
        id: 'engineering',
        category: 'Engineering',
        category2: 'अभियांत्रिकी',
        icon: Cpu,
        departments: [
            {
                code: 'cse',
                name_en: 'Computer Science & Engineering',
                name_hi: 'कंप्यूटर विज्ञान और इंजीनियरिंग',
            },
            {
                code: 'civil',
                name_en: 'Civil Engineering',
                name_hi: 'सिविल इंजीनियरिंग',
            },
            {
                code: 'chemical',
                name_en: 'Chemical Engineering',
                name_hi: 'केमिकल इंजीनियरिंग',
            },
            {
                code: 'ece',
                name_en: 'Electronics & Communication Engineering',
                name_hi: 'इलेक्ट्रॉनिक्स और संचार इंजीनियरिंग',
            },
            {
                code: 'electrical',
                name_en: 'Electrical Engineering',
                name_hi: 'इलेक्ट्रिकल इंजीनियरिंग',
            },
            {
                code: 'mnc',
                name_en: 'Mathematics & Scientific Computing',
                name_hi: 'गणित और वैज्ञानिक कंप्यूटिंग',
            },
            {
                code: 'mne',
                name_en: 'Mechanical Engineering',
                name_hi: 'मैकेनिकल इंजीनियरिंग',
            },
        ],
    },
    {
        id: 'sciences',
        category: 'Sciences',
        category2: 'विज्ञान',
        icon: Atom,
        departments: [
            {
                code: 'chem',
                name_en: 'Chemistry',
                name_hi: 'रसायन विज्ञान',
            },
            {
                code: 'physics',
                name_en: 'Physics & Photonics Science',
                name_hi: 'भौतिकी और फोटोनिक्स विज्ञान',
            },
            {
                code: 'math',
                name_en: 'Mathematics & Scientific Computing',
                name_hi: 'गणित और वैज्ञानिक कंप्यूटिंग',
            },
        ],
    },
    {
        id: 'arts',
        category: 'Liberal Arts',
        category2: 'उदार कला',
        icon: Library,
        departments: [
            {
                code: 'architecture',
                name_en: 'Architecture',
                name_hi: 'वास्तुकला',
            },
            {
                code: 'management',
                name_en: 'Management Studies',
                name_hi: 'प्रबंधन अध्ययन',
            },
            {
                code: 'hss',
                name_en: 'Humanities & Social Sciences',
                name_hi: 'मानविकी और सामाजिक विज्ञान',
            },
        ],
    },
];

function Department() {
    const language = useSelector((state: RootState) => state.language.value);
    const [departments, setDepartments] = useState<DepartmentRecord[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadDepartments = async () => {
            try {
                setLoading(true);
                const res = await fetch(API_BASE);
                if (!res.ok) {
                    throw new Error('Failed to load departments');
                }

                const data = await res.json();
                const rows = Array.isArray(data?.data) ? data.data : Array.isArray(data) ? data : [];
                setDepartments(rows);
            } catch (error) {
                console.error('Failed to fetch departments:', error);
                setDepartments([]);
            } finally {
                setLoading(false);
            }
        };

        void loadDepartments();
    }, []);

    const groupedDepartments = useMemo(() => {
        if (departments.length === 0) {
            return FALLBACK_GROUPS;
        }

        const byGroup = new Map<string, DepartmentRecord[]>();
        const getGroupKey = (code: string) => {
            if (['cse', 'civil', 'chemical', 'ece', 'electrical', 'mne', 'me', 'mechanical', 'mnc'].includes(code)) {
                return 'engineering';
            }
            if (['chem', 'physics', 'math', 'mathematics', 'msc'].includes(code)) {
                return 'sciences';
            }
            return 'arts';
        };

        departments.filter((department) => department.is_active).forEach((department) => {
            const groupKey = getGroupKey(department.code.toLowerCase());
            const current = byGroup.get(groupKey) || [];
            byGroup.set(groupKey, [...current, department]);
        });

        return FALLBACK_GROUPS.map((group) => ({
            ...group,
            departments: (byGroup.get(group.id) || []).map((department) => ({
                code: department.code,
                name_en: department.name_en,
                name_hi: department.name_hi || department.name_en,
            })),
        }));
    }, [departments]);

    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-4">
                {loading && (
                    <div className="flex items-center justify-center gap-2 py-6 text-sm text-gray-500">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Loading departments...
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 md:gap-y-12">
                    {groupedDepartments.map((column) => (
                        <div key={column.id} className="flex flex-col">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 group/header">
                                <span className="font-mono text-base sm:text-lg md:text-xl text-gray-200 group-hover/header:text-[#800000] transition-colors duration-300">
                                    {String(column.id).slice(0, 2).toUpperCase()}
                                </span>
                                <div className="flex items-center gap-1 sm:gap-2 border-l-2 border-[#800000] pl-2 sm:pl-3">
                                    <column.icon
                                        size={14}
                                        className="text-gray-400 group-hover/header:text-gray-900 transition-colors sm:w-4 sm:h-4"
                                    />
                                    <h3 className="text-[clamp(10px,2vw,14px)] font-bold uppercase tracking-wider text-gray-800">
                                        {language === 'en' ? column.category : column.category2}
                                    </h3>
                                </div>
                            </div>

                            <div className="space-y-4 sm:space-y-6 md:space-y-8">
                                <div className="group/section">
                                    <h4 className="text-[clamp(9px,1.8vw,12px)] font-semibold text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 pl-1 sm:pl-2 border-l border-transparent group-hover/section:border-gray-200 transition-all">
                                        {language === 'en' ? 'Departments' : 'विभाग'}
                                    </h4>

                                    <ul className="space-y-0.5 sm:space-y-1">
                                        {column.departments.map((department) => (
                                            <li key={department.code}>
                                                <Link
                                                    href={getDepartmentHref(department.code)}
                                                    className="flex items-center justify-between group/link py-2 px-1 sm:px-2 rounded-r hover:bg-gray-50 transition-all duration-300"
                                                >
                                                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                                        <ChevronRight
                                                            size={12}
                                                            className="text-gray-300 group-hover/link:text-[#800000] transition-colors sm:w-3.5 sm:h-3.5 flex-shrink-0"
                                                        />
                                                        <div className="min-w-0">
                                                            <span className="text-[clamp(10px,2vw,14px)] font-medium text-gray-600 group-hover/link:text-black transition-colors block">
                                                                {department.name_en}
                                                            </span>
                                                            <span className="text-[clamp(9px,1.8vw,12px)] text-gray-400 block">
                                                                {department.name_hi}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <ArrowUpRight
                                                        size={10}
                                                        className="opacity-0 -translate-x-2 text-[#800000] group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 sm:w-3 sm:h-3 flex-shrink-0"
                                                    />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Department;