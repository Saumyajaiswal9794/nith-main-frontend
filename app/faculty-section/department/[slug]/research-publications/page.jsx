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

  const name = language === 'hi' && dept?.name_hi ? dept.name_hi : dept?.name_en
  const menuItems = getMenuItems(slug, language)
  const research = dept?.research
  const categories = language === 'hi' && research?.categories_hi?.length > 0 ? research.categories_hi : (research?.categories_en || [])
  const publications = language === 'hi' && research?.publications_hi?.length > 0 ? research.publications_hi : (research?.publications_en || [])

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={6} />
      <div style={mainStyle}>
        <div style={contentBox}>
          {categories.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h2 style={subHeading}>{language === 'hi' ? 'अनुसंधान क्षेत्र' : 'Research Areas'}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {categories.map((c, i) => (
                  <span key={i} style={{ padding: '6px 14px', backgroundColor: '#fff0f0', color: '#8b0000', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>
                    {typeof c === 'string' ? c : c.category || c.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          <h2 style={subHeading}>{language === 'hi' ? 'प्रकाशन' : 'Publications'}</h2>
          {publications.length === 0 && <p style={{ fontSize: '14px', color: '#999' }}>{language === 'hi' ? 'अभी तक जोड़ा नहीं गया' : 'No publications added yet'}</p>}
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th style={thStyle}>Year</th>
                <th style={thStyle}>{language === 'hi' ? 'शीर्षक' : 'Title'}</th>
                <th style={thStyle}>Authors</th>
                <th style={thStyle}>Journal</th>
                <th style={thStyle}>Indexing</th>
              </tr>
            </thead>
            <tbody>
              {publications.map((p, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={tdStyle}>{p.year}</td>
                  <td style={tdStyle}>{p.title}</td>
                  <td style={tdStyle}>{p.authors}</td>
                  <td style={tdStyle}>{p.journal}</td>
                  <td style={tdStyle}>{p.indexing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const thStyle = { padding: '10px 12px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#555', borderBottom: '2px solid #8b0000' }
const tdStyle = { padding: '10px 12px', fontSize: '13px', color: '#444' }
