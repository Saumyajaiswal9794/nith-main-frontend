'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading } from '../dept-utils'

export default function ProgrammesPage() {
  const params = useParams()
  const slug = params.slug
  const language = useSelector((state) => state.language.value)
  const [dept, setDept] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDept(slug).then(setDept).catch(() => {}).finally(() => setLoading(false))
  }, [slug])

  const name = language === 'hi' && dept?.name_hi ? dept.name_hi : dept?.name_en
  const menuItems = getMenuItems(slug, language)
  const progs = dept?.programmes
  const programmes = language === 'hi' && progs?.programmes_hi?.length > 0 ? progs.programmes_hi : (progs?.programmes_en || [])

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={2} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h2 style={subHeading}>{language === 'hi' ? 'प्रस्तावित कार्यक्रम' : 'Programmes Offered'}</h2>
          {programmes.length === 0 && <p style={{ fontSize: '14px', color: '#999' }}>{language === 'hi' ? 'अभी तक जोड़ा नहीं गया' : 'No programmes added yet'}</p>}
          {programmes.map((p, i) => (
            <div key={i} style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <span style={{ fontSize: '24px' }}>{p.icon}</span>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#333' }}>{p.name}</h3>
              </div>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>{p.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
