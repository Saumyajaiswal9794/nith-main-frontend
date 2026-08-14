'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading } from '../dept-utils'

export default function StaffPage() {
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
  const staff = dept?.staff || []

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={4} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h2 style={subHeading}>{language === 'hi' ? 'कर्मचारी' : 'Staff'}</h2>
          {staff.length === 0 && <p style={{ fontSize:'14px',color:'#999' }}>No staff added yet</p>}
          <table style={{ width:'100%',borderCollapse:'collapse' }}>
            <thead>
              <tr style={{ backgroundColor:'#f5f5f5' }}>
                <th style={thStyle}>#</th><th style={thStyle}>{language === 'hi' ? 'नाम' : 'Name'}</th><th style={thStyle}>{language === 'hi' ? 'पदनाम' : 'Designation'}</th><th style={thStyle}>Phone</th><th style={thStyle}>Email</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((s, i) => (
                <tr key={i} style={{ borderBottom:'1px solid #eee' }}>
                  <td style={tdStyle}>{i + 1}</td>
                  <td style={tdStyle}>{language === 'hi' && s.name ? s.name : s.name_en}</td>
                  <td style={tdStyle}>{s.designation || s.type || '-'}</td>
                  <td style={tdStyle}>{s.phone_no || '-'}</td>
                  <td style={tdStyle}>{s.email || '-'}</td>
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