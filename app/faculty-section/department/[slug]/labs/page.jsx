'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading } from '../dept-utils'

export default function LabsPage() {
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
  const labs = dept?.labs || []

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={5} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h2 style={subHeading}>{language === 'hi' ? 'प्रयोगशालाएं' : 'Laboratories'}</h2>
          {labs.length === 0 && <p style={{ fontSize:'14px',color:'#999' }}>{language === 'hi' ? 'अभी तक जोड़ा नहीं गया' : 'No labs added yet'}</p>}
          <ul style={{ listStyle:'none',padding:0,margin:0 }}>
            {labs.map((lab, i) => (
              <li key={i} style={{ padding:'10px 16px',borderBottom:'1px solid #f0f0f0',fontSize:'14px',color:'#444' }}>
                <strong>{language === 'hi' && lab.lab_name_hn ? lab.lab_name_hn : lab.lab_name_en}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}