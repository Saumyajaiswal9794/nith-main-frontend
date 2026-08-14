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

  const name = language === 'hi' && dept?.name_hn ? dept.name_hn : dept?.name_en
  const menuItems = getMenuItems(slug, language)
  const progs = dept?.programmes || []

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={2} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h2 style={subHeading}>{language === 'hi' ? 'प्रस्तावित कार्यक्रम' : 'Programmes Offered'}</h2>
          {progs.length === 0 && <p style={{ fontSize:'14px',color:'#999' }}>{language === 'hi' ? 'अभी तक जोड़ा नहीं गया' : 'No programmes added yet'}</p>}
          {progs.map((p, i) => (
            <div key={i} style={{ padding:'16px',border:'1px solid #eee',borderRadius:'8px',marginBottom:'12px' }}>
              <h3 style={{ margin:'0 0 4px',fontSize:'16px',fontWeight:'bold',color:'#333' }}>{language === 'hi' && p.program_name_hn ? p.program_name_hn : p.program_name_en}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
