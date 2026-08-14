'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading } from '../dept-utils'

export default function ResearchPage() {
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
  const publications = dept?.publications || []
  const projects = dept?.projects || []

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={6} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h2 style={subHeading}>{language === 'hi' ? 'प्रकाशन' : 'Publications'}</h2>
          {publications.length === 0 && <p style={{ fontSize:'14px',color:'#999' }}>No publications added yet</p>}
          <table style={{ width:'100%',borderCollapse:'collapse',marginBottom:'32px' }}>
            <thead>
              <tr style={{ backgroundColor:'#f5f5f5' }}>
                <th style={thStyle}>Year</th><th style={thStyle}>Title</th><th style={thStyle}>Authors</th><th style={thStyle}>Journal</th><th style={thStyle}>SCI</th>
              </tr>
            </thead>
            <tbody>
              {publications.map((p, i) => (
                <tr key={i} style={{ borderBottom:'1px solid #eee' }}>
                  <td style={tdStyle}>{p.year}</td><td style={tdStyle}>{p.title}</td><td style={tdStyle}>{p.author}</td><td style={tdStyle}>{p.journal_name}</td><td style={tdStyle}>{p.sci}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={subHeading}>{language === 'hi' ? 'परियोजनाएं' : 'Research Projects'}</h2>
          {projects.length === 0 && <p style={{ fontSize:'14px',color:'#999' }}>No projects added yet</p>}
          <table style={{ width:'100%',borderCollapse:'collapse' }}>
            <thead>
              <tr style={{ backgroundColor:'#f5f5f5' }}>
                <th style={thStyle}>Title</th><th style={thStyle}>Role</th><th style={thStyle}>Agency</th><th style={thStyle}>Period</th><th style={thStyle}>Amount</th><th style={thStyle}>Status</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr key={i} style={{ borderBottom:'1px solid #eee' }}>
                  <td style={tdStyle}>{p.title}</td><td style={tdStyle}>{p.role}</td><td style={tdStyle}>{p.funding_agency}</td>
                  <td style={tdStyle}>{p.from} - {p.to}</td><td style={tdStyle}>{p.amount}</td><td style={tdStyle}>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const thStyle = { padding:'10px 12px',textAlign:'left',fontSize:'12px',fontWeight:'600',color:'#555',borderBottom:'2px solid #8b0000' }
const tdStyle = { padding:'10px 12px',fontSize:'13px',color:'#444' }