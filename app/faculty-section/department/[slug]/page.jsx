'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading, bodyText } from './dept-utils'
import { GraduationCap } from 'lucide-react'

export default function DepartmentPage() {
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
  const descriptions = language === 'hi' && dept?.overview?.descriptions_hi?.length > 0 ? dept.overview.descriptions_hi : (dept?.overview?.descriptions_en || [])
  const progs = language === 'hi' && dept?.programmes?.programmes_hi?.length > 0 ? dept.programmes.programmes_hi : (dept?.programmes?.programmes_en || [])
  const categories = language === 'hi' && dept?.research?.categories_hi?.length > 0 ? dept.research.categories_hi : (dept?.research?.categories_en || [])

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={0} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '16px', marginTop: 0 }}>{name}</h1>
          {descriptions.map((d, i) => (
            <p key={i} style={bodyText}>{d}</p>
          ))}
          {descriptions.length === 0 && <p style={bodyText}>{language === 'hi' ? 'विवरण जल्द ही जोड़ा जाएगा' : 'Overview content will be added soon.'}</p>}

          {progs.length > 0 && (
            <div style={{ marginTop: '32px' }}>
              <h2 style={subHeading}>{language === 'hi' ? 'शैक्षणिक कार्यक्रम' : 'Academic Programmes'}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginTop: '16px' }}>
                {progs.map((p, i) => (
                  <div key={i} style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#fafafa' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>{p.icon || '🎓'}</div>
                    <h3 style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{p.name}</h3>
                    <p style={{ margin: 0, fontSize: '12px', color: '#666', lineHeight: '1.5' }}>{p.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {categories.length > 0 && (
            <div style={{ marginTop: '32px' }}>
              <h2 style={subHeading}>{language === 'hi' ? 'अनुसंधान क्षेत्र' : 'Research Areas'}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                {categories.map((c, i) => (
                  <span key={i} style={{ padding: '6px 14px', backgroundColor: '#fff0f0', color: '#8b0000', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>{typeof c === 'string' ? c : c.category || c.name}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
