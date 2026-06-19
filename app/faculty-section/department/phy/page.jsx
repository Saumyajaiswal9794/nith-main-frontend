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
      'Four-year undergraduate programme providing foundational knowledge in physics, experimental techniques, and analytical problem-solving skills for engineering applications.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Postgraduate programme in Materials Science focusing on condensed matter physics, nanotechnology, and advanced materials characterization techniques.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Advanced doctoral research programs in condensed matter physics, high energy physics, materials physics, spectroscopy, and theoretical nuclear physics.',
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
  title: 'Department of Physics',
  description: 'The Department of Physics is committed to excellence in teaching and research in various branches of physics. It offers undergraduate and postgraduate courses for engineering departments, along with Ph.D. programs in condensed matter physics, high energy physics, materials science, and theoretical nuclear physics. The department houses well-equipped laboratories for experimental physics, spectroscopy, materials characterization, and computational physics. It aims to foster scientific temper, analytical thinking, and research innovation among students, preparing them for careers in academia, industry, and research institutions.',
}

const defaultProgrammes = [
  {
    name: 'B.Tech',
    Icon: GraduationCap,
    details:
      'Four-year undergraduate programme providing foundational knowledge in physics, experimental techniques, and analytical problem-solving skills for engineering applications.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Postgraduate programme in Materials Science focusing on condensed matter physics, nanotechnology, and advanced materials characterization techniques.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Advanced doctoral research programs in condensed matter physics, high energy physics, materials physics, spectroscopy, and theoretical nuclear physics.',
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
        const res = await fetch(`${API_BASE}/v1/departments/phy?language=en`, { cache: 'no-store' });
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

        <a href="/faculty-section/department/phy/vision-mission" style={styles.sidebarLink}>
          Vision & Mission
        </a>

        <a href="/faculty-section/department/phy/faculty" style={styles.sidebarLink}>
          Faculty
        </a>

        <a href="/faculty-section/department/phy/staff" style={styles.sidebarLink}>
          Staff
        </a>

        <a href="/faculty-section/department/phy/programme-offered" style={styles.sidebarLink}>
          Programme Offered
        </a>

        <a href="/faculty-section/department/phy/labs" style={styles.sidebarLink}>
          Labs
        </a>

        <a href="/faculty-section/department/phy/research-publications" style={styles.sidebarLink}>
          Research Publications
        </a>

        <a href="/faculty-section/department/phy/contact" style={styles.sidebarLink}>
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
            src="/faculty-section/department/phy/phy_dept.jpg"
            alt="Physics Department"
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

        </div>
      </main>

    </div>
  )
}

export default App