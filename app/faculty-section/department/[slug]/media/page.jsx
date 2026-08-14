'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading } from '../dept-utils'

export default function MediaPage() {
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
  const media = dept?.media || []

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={8} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h2 style={subHeading}>{language === 'hi' ? 'मीडिया' : 'Media Gallery'}</h2>
          {media.length === 0 && <p style={{ fontSize: '14px', color: '#999' }}>{language === 'hi' ? 'अभी तक जोड़ा नहीं गया' : 'No media added yet'}</p>}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
            {media.map((m, i) => (
              <div key={i} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                {m.image_url && <img src={m.image_url} alt={language === 'hi' && m.title_hi ? m.title_hi : m.title_en} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />}
                <div style={{ padding: '12px' }}>
                  <h4 style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: 'bold', color: '#333' }}>{language === 'hi' && m.title_hi ? m.title_hi : m.title_en}</h4>
                  {m.description_en && <p style={{ margin: 0, fontSize: '11px', color: '#777' }}>{language === 'hi' && m.description_hi ? m.description_hi : m.description_en}</p>}
                  <span style={{ display: 'inline-block', marginTop: '4px', padding: '2px 8px', backgroundColor: m.type === 'video' ? '#e8f4fd' : '#f0f0f0', color: '#555', borderRadius: '4px', fontSize: '10px' }}>{m.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
