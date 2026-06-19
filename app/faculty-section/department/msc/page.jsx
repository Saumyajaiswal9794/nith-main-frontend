'use client'

import {
  BookOpen,
  GraduationCap,
  Microscope,
  Network,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const academicProgrammes = [
  {
    name: 'B.Tech',
    Icon: GraduationCap,
    details:
      'Four-year undergraduate programme providing strong foundations in materials science, engineering principles, processing techniques, and analytical problem-solving skills for modern technological applications.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Two-year postgraduate programme focused on advanced materials research, characterization techniques, and specialized engineering applications in emerging technologies.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Research-intensive doctoral programme emphasizing original contributions in advanced materials science, interdisciplinary innovation, and high-impact scientific research.',
  },
]

const styles = {
  pageWrapper: {
    display: 'flex',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#f5f5f5',
  },

  sidebar: {
    width: '200px',
    minWidth: '200px',
    backgroundColor: '#fff',
    borderRight: '1px solid #ddd',
    paddingTop: '0',
  },

  sidebarActiveItem: {
    backgroundColor: '#8b0000',
    color: '#fff',
    padding: '10px 16px',
    fontWeight: '600',
    fontSize: '14px',
    display: 'block',
  },

  sidebarLink: {
    display: 'block',
    padding: '8px 16px',
    fontSize: '14px',
    color: '#c0392b',
    textDecoration: 'none',
    borderBottom: '1px solid #f0f0f0',
  },

  mainContent: {
    flex: 1,
    padding: '24px 32px',
    backgroundColor: '#f5f5f5',
  },

  contentBox: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '4px',
    border: '1px solid #e0e0e0',
  },

  pageTitle: {
    fontSize: '20px',
    fontWeight: '400',
    textAlign: 'center',
    color: '#333',
    marginBottom: '16px',
    marginTop: '0',
  },

  imagePlaceholder: {
    width: '100%',
    height: '220px',
    backgroundColor: '#d0e0d0',
    borderRadius: '4px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '14px',
  },

  descriptionText: {
    fontSize: '13px',
    lineHeight: '1.7',
    color: '#333',
    textAlign: 'justify',
    marginBottom: '12px',
  },

  sectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '28px 0 16px 0',
  },

  programmeCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '4px',
    padding: '28px 24px',
    backgroundColor: '#fff',
    minHeight: '260px',
  },

  programmeIcon: {
    width: '48px',
    height: '48px',
    marginBottom: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff7f7',
    color: '#8b0000',
  },

  programmeName: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#8b0000',
    marginBottom: '12px',
    marginTop: '0',
  },

  programmeDetails: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.75',
    margin: '0',
  },
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

const iconMap = {
  GraduationCap: GraduationCap,
  Microscope: Microscope,
  Network: Network,
  BookOpen: BookOpen,
}

const defaultInfo = {
  title: 'Department of Material Science & Engineering',
  description: 'Established in 2008, the Centre for Materials Science and Engineering (CMSE) focuses on interdisciplinary teaching and research in materials science, nanotechnology, biology, chemistry, and physics. The centre launched its Ph.D. programme in 2010 and M.Tech. programme in 2010, and currently houses advanced synthesis and characterization facilities with six faculty members working in frontier research areas.',
}

const defaultProgrammes = [
  {
    name: 'B.Tech',
    Icon: GraduationCap,
    details:
      'Four-year undergraduate programme providing strong foundations in materials science, engineering principles, processing techniques, and analytical problem-solving skills for modern technological applications.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Two-year postgraduate programme focused on advanced materials research, characterization techniques, and specialized engineering applications in emerging technologies.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Research-intensive doctoral programme emphasizing original contributions in advanced materials science, interdisciplinary innovation, and high-impact scientific research.',
  },
]

const renderIcon = (iconInput) => {
  if (!iconInput) return <GraduationCap size={24} strokeWidth={1.8} />;
  
  if (typeof iconInput !== 'string') {
    const IconComponent = iconInput;
    return <IconComponent size={24} strokeWidth={1.8} />;
  }

  const lookup = iconInput.trim().toLowerCase();
  const matchedKey = Object.keys(iconMap).find(k => k.toLowerCase() === lookup);
  if (matchedKey) {
    const IconComponent = iconMap[matchedKey];
    return <IconComponent size={24} strokeWidth={1.8} />;
  }

  return (
    <span style={{ fontSize: '24px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      {iconInput}
    </span>
  );
}

function App() {
  const [departmentInfo, setDepartmentInfo] = useState(defaultInfo)
  const [programmesList, setProgrammesList] = useState(defaultProgrammes)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false;
    const loadData = async () => {
      try {
        // Fetch department info from master department endpoint
        const res = await fetch(`${API_BASE}/v1/departments/msc?language=en`, { cache: 'no-store' });
        if (res.ok) {
          const json = await res.json();
          if (json?.data && !cancelled) {
            setDepartmentInfo({
              title: json.data.name_en || json.data.name || defaultInfo.title,
              description: json.data.description_short_en || json.data.description_short || defaultInfo.description,
            });
          }
        }
      } catch (e) {
        console.error('Error fetching department info:', e);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadData();
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <h2 style={{ padding: '2rem', color: '#333' }}>
        Loading...
      </h2>
    )
  }

  return (
    <div style={styles.pageWrapper}>

      {/* Left Sidebar */}
      <aside style={styles.sidebar}>
        <span style={styles.sidebarActiveItem}>About Us</span>

        <a href="/faculty-section/department/msc/vision-mission" style={styles.sidebarLink}>
          Vision & Mission
        </a>

        <a href="/faculty-section/department/msc/faculty" style={styles.sidebarLink}>
          Faculty
        </a>

        <a href="/faculty-section/department/msc/staff" style={styles.sidebarLink}>
          Staff
        </a>

        <a href="/faculty-section/department/msc/programme-offered" style={styles.sidebarLink}>
          Programme Offered
        </a>

        <a href="/faculty-section/department/msc/labs" style={styles.sidebarLink}>
          Labs
        </a>

        <a href="/faculty-section/department/msc/research-publications" style={styles.sidebarLink}>
          Research Publications
        </a>

        <a href="/faculty-section/department/msc/contact" style={styles.sidebarLink}>
          Contact
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>

          <h1 style={styles.pageTitle}>
            {departmentInfo.title}
          </h1>

          {/* Image */}
          <img
            src="/msc_dept.jpeg"
            alt="MSc Department"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '4px',
              marginBottom: '20px',
              display: 'block',
            }}
          />

          {/* Description */}
          {departmentInfo.description.split('\n').filter(Boolean).map((text, index) => (
            <p key={index} style={styles.descriptionText}>
              {text}
            </p>
          ))}

          {/* Academic Programmes */}
          <h2 style={styles.sectionTitle}>
            Academic Programmes
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
              width: '100%',
              marginBottom: '30px',
            }}
          >
            {programmesList.map((programme) => (
              <div
                key={programme.name}
                style={styles.programmeCard}
              >
                <span style={styles.programmeIcon}>
                  {renderIcon(programme.icon || programme.Icon)}
                </span>

                <h3 style={styles.programmeName}>
                  {programme.name}
                </h3>

                <p style={styles.programmeDetails}>
                  {programme.details}
                </p>
              </div>
            ))}
          </div>

          <h2 style={styles.sectionTitle}>
            Research Areas
          </h2>

          <p style={styles.descriptionText}>
            Active research areas: Functional oxides, high-temperature superconductors, colossal magnetoresistance, spintronics, ferrites, ferroelectric/multiferroic materials, polymer composites, dielectric/electrical materials, ceramic processing, powder and physical metallurgy, nanodrug delivery, microencapsulation, biomineralisation, biomimetics, self-assembly, nanophosphors, ion beam material modification, optical materials, X-ray absorption spectroscopy, semiconductor defect engineering, plasma nanoscience, metal-organic frameworks, nanoscale magnetism, and electrodeposition.
          </p>

          <p style={styles.descriptionText}>
            Faculty members have published 200+ international research papers, along with 1 Japanese patent and 9 books.
          </p>

        </div>
      </main>

    </div>
  )
}

export default App