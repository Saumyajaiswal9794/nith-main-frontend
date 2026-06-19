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
      'Four-year undergraduate programme focusing on core foundations and emerging tech trends.',
  },
  {
    name: 'Dual Degree',
    Icon: BookOpen,
    details:
      'Integrated five-year B.Tech & M.Tech programme for accelerated specialization in CSE.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Postgraduate excellence in Computer Science and Information Security domains.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Advanced doctoral research programs pushing the boundaries of computing science.',
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

  bottomSection: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    marginTop: '28px',
  },

  missionTitle: {
    fontSize: '26px',
    fontWeight: '800',
    color: '#8b0000',
    lineHeight: '1.2',
    marginBottom: '16px',
    marginTop: '0',
  },

  missionText: {
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.7',
    textAlign: 'justify',
    marginBottom: '14px',
  },

  missionList: {
    paddingLeft: '20px',
    margin: '0',
  },

  missionListItem: {
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.8',
  },

  researchBox: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderRadius: '4px',
  },

  researchTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#3a5a9b',
    lineHeight: '1.2',
    marginBottom: '16px',
    marginTop: '0',
  },

  researchGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    marginBottom: '20px',
  },

  researchCategory: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#3a5a9b',
    marginBottom: '4px',
    display: 'block',
  },

  researchDesc: {
    fontSize: '12px',
    color: '#555',
    lineHeight: '1.5',
    margin: '0',
  },

  exploreBtn: {
    backgroundColor: '#8b0000',
    color: '#fff',
    border: 'none',
    padding: '12px 28px',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  },
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Microscope: Microscope,
  Network: Network,
}

const defaultInfo = {
  title: 'Department of Computer Science & Engineering',
  description: 'The Department of Computer Science and Engineering at NIT Hamirpur was established in 1989. It offers B.Tech., Dual Degree (B.Tech. & M.Tech.), M.Tech., and Ph.D. programmes. The department has well-equipped laboratories, state-of-the-art infrastructure, and qualified faculty members. It focuses on research and development, innovation, and academic excellence in computing sciences.',
}

const defaultProgrammes = [
  {
    name: 'B.Tech',
    Icon: GraduationCap,
    details:
      'Four-year undergraduate programme focusing on core foundations and emerging tech trends.',
  },
  {
    name: 'Dual Degree',
    Icon: BookOpen,
    details:
      'Integrated five-year B.Tech & M.Tech programme for accelerated specialization in CSE.',
  },
  {
    name: 'M.Tech',
    Icon: Microscope,
    details:
      'Postgraduate excellence in Computer Science and Information Security domains.',
  },
  {
    name: 'Ph.D',
    Icon: Network,
    details:
      'Advanced doctoral research programs pushing the boundaries of computing science.',
  },
]

const defaultMissionVision = {
  heading: 'Mission & Cognitive Development',
  description: 'Our programs are designed to transcend mere technical instruction. We focus on the holistic development of our students, nurturing cognitive abilities that allow for complex problem-solving and ethical decision-making in the digital age.',
  points: [
    'Critical thinking and analytical reasoning skills.',
    'Interdisciplinary research opportunities.',
    'Industry-aligned curriculum with regular updates.'
  ]
}

const defaultResearchAreas = [
  {
    category: 'AI & ML',
    details: 'Research in machine learning and intelligent systems.'
  },
  {
    category: 'Cyber Security',
    details: 'Advanced security protocols and privacy systems.'
  },
  {
    category: 'Cloud Computing',
    details: 'Distributed systems and scalable computing research.'
  },
  {
    category: 'IoT & Robotics',
    details: 'Smart devices and hardware-software integration.'
  }
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
  const [missionVisionData, setMissionVisionData] = useState(defaultMissionVision)
  const [researchAreasList, setResearchAreasList] = useState(defaultResearchAreas)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false;
    const loadData = async () => {
      try {
        // Fetch department info
        try {
          const res = await fetch(`${API_BASE}/v1/departments/cse?language=en`, { cache: 'no-store' });
          if (res.ok) {
            const json = await res.json();
            if (json?.data && !cancelled) {
              setDepartmentInfo({
                title: json.data.intro_heading || defaultInfo.title,
                description: json.data.intro_description || defaultInfo.description,
              });
            }
          }
        } catch (e) {
          console.error('Error fetching department info:', e);
        }

        // Fetch programmes
        try {
          const res = await fetch(`${API_BASE}/v1/departments/cse/programmes?language=en`, { cache: 'no-store' });
          if (res.ok) {
            const json = await res.json();
            if (Array.isArray(json?.data) && json.data.length > 0 && !cancelled) {
              setProgrammesList(json.data.map(p => ({
                name: p.title || p.programme_type,
                icon: p.icon_emoji,
                details: p.description,
              })));
            }
          }
        } catch (e) {
          console.error('Error fetching programmes:', e);
        }

        // Fetch mission & vision
        try {
          const res = await fetch(`${API_BASE}/v1/departments/cse/mission-vision?language=en`, { cache: 'no-store' });
          if (res.ok) {
            const json = await res.json();
            if (json?.data && !cancelled) {
              setMissionVisionData({
                heading: json.data.mission_heading || defaultMissionVision.heading,
                description: json.data.mission_description || defaultMissionVision.description,
                points: Array.isArray(json.data.mission_points) && json.data.mission_points.length > 0
                  ? json.data.mission_points
                  : defaultMissionVision.points,
              });
            }
          }
        } catch (e) {
          console.error('Error fetching mission vision:', e);
        }

        // Fetch research areas
        try {
          const res = await fetch(`${API_BASE}/v1/departments/cse/research-areas?language=en`, { cache: 'no-store' });
          if (res.ok) {
            const json = await res.json();
            if (Array.isArray(json?.data) && json.data.length > 0 && !cancelled) {
              setResearchAreasList(json.data.map(r => ({
                category: r.area_name,
                details: r.description,
              })));
            }
          }
        } catch (e) {
          console.error('Error fetching research areas:', e);
        }

      } catch (err) {
        console.error('Failed to load department data from API:', err);
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

        <a href="/faculty-section/department/cse/vision-and-mission" style={styles.sidebarLink}>
          Vision & Mission
        </a>

        <a href="/faculty-section/department/cse/faculty" style={styles.sidebarLink}>
          Faculty
        </a>

        <a href="/faculty-section/department/cse/staff" style={styles.sidebarLink}>
          Staff
        </a>

        <a href="#" style={styles.sidebarLink}>
          Programme Offered
        </a>

        <a href="/faculty-section/department/cse/labs" style={styles.sidebarLink}>
          Labs
        </a>

        <a href="/faculty-section/department/cse/research-publications" style={styles.sidebarLink}>
          Research Publications
        </a>

        <a href="/faculty-section/department/cse/contact" style={styles.sidebarLink}>
          Contact
        </a>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.contentBox}>

          <h1 style={styles.pageTitle}>
            {departmentInfo.title}
          </h1>

          {/* Image Placeholder */}
          <div style={styles.imagePlaceholder}>
            🏛 College Campus Photo
          </div>

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

          {/* Description */}
          {departmentInfo.description.split('\n').filter(Boolean).map((text, index) => (
            <p key={index} style={styles.descriptionText}>
              {text}
            </p>
          ))}

          {/* Bottom Section */}
          <div style={styles.bottomSection}>

            {/* Mission */}
            <div>
              <h2 style={styles.missionTitle}>
                {missionVisionData.heading}
              </h2>

              <p style={styles.missionText}>
                {missionVisionData.description}
              </p>

              <ul style={styles.missionList}>
                {missionVisionData.points.map((point, index) => (
                  <li key={index} style={styles.missionListItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Research */}
            <div style={styles.researchBox}>

              <h2 style={styles.researchTitle}>
                Explore Research
                <br />
                Areas
              </h2>

              <div style={styles.researchGrid}>
                {researchAreasList.map((area, idx) => (
                  <div key={idx}>
                    <span style={styles.researchCategory}>
                      {area.category}
                    </span>

                    <p style={styles.researchDesc}>
                      {area.details}
                    </p>
                  </div>
                ))}
              </div>

              <button style={styles.exploreBtn}>
                Explore →
              </button>

            </div>

          </div>

        </div>
      </main>

    </div>
  )
}

export default App
