'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading } from '../dept-utils'

export default function FacultyPage() {
  const params = useParams()
  const slug = params.slug
  const language = useSelector((state) => state.language.value)
  const [dept, setDept] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDept(slug).then(setDept).catch(() => {}).finally(() => setLoading(false))
  }, [slug])

  const name = language === 'hi' && dept?.name_hn ? dept.name_hn : dept?.name_en
  const menuItems = getMenuItems(slug, language)
  const faculty = dept?.faculty || []

  // Group by type
  const groups = {}
  faculty.forEach(f => {
    const key = f.type || 'Faculty'
    if (!groups[key]) groups[key] = []
    groups[key].push(f)
  })

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={3} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h2 style={subHeading}>{language === 'hi' ? 'संकाय सदस्य' : 'Faculty Members'}</h2>
          {Object.keys(groups).length === 0 && <p style={{ fontSize:'14px',color:'#999' }}>{language === 'hi' ? 'अभी तक जोड़ा नहीं गया' : 'No faculty added yet'}</p>}
          {Object.entries(groups).map(([title, members]) => (
            <div key={title} style={{ marginBottom:'24px' }}>
              <h3 style={{ fontSize:'15px',fontWeight:'bold',color:'#333',marginBottom:'12px' }}>{title}</h3>
              <table style={{ width:'100%',borderCollapse:'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor:'#f5f5f5' }}>
                    <th style={thStyle}>{language === 'hi' ? 'नाम' : 'Name'}</th>
                    <th style={thStyle}>{language === 'hi' ? 'रुचि का क्षेत्र' : 'Area of Interest'}</th>
                    <th style={thStyle}>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((m, i) => (
                    <tr key={i} style={{ borderBottom:'1px solid #eee' }}>
                      <td style={tdStyle}>
                        <a href={m.profile_link || '#'} style={{ color:'#8b0000',textDecoration:'none',fontWeight:'500' }}>
                          {language === 'hi' && m.name ? m.name : m.name_en}
                        </a>
                      </td>
                      <td style={tdStyle}>{m.area_of_interest || '-'}</td>
                      <td style={{ ...tdStyle, color:'#8b0000' }}>{m.email || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const thStyle = { padding:'10px 12px',textAlign:'left',fontSize:'12px',fontWeight:'600',color:'#555',borderBottom:'2px solid #8b0000' }
const tdStyle = { padding:'10px 12px',fontSize:'13px',color:'#444' }