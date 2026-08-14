'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading, bodyText, getBilingual } from './dept-utils'

export default function DepartmentPage() {
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
  const description = language === 'hi' && dept?.description_hn ? dept.description_hn : (dept?.description_en || '')
  const courses = language === 'hi' && dept?.courses_name_hn?.length > 0 ? dept.courses_name_hn : (dept?.courses_name_en || [])

  if (loading) return <Loading />
  if (!dept) return <div style={pageStyles}><div style={{ flex:1,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'16px' }}><h2 style={{color:'#333'}}>Department not found</h2></div></div>

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={0} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h1 style={{ fontSize:'28px',fontWeight:'bold',color:'#333',marginBottom:'16px',marginTop:0 }}>{name}</h1>
          {description && <p style={bodyText}>{description}</p>}
          {!description && <p style={bodyText}>{language === 'hi' ? 'विवरण जल्द ही जोड़ा जाएगा' : 'Overview will be added soon.'}</p>}

          {courses.length > 0 && (
            <div style={{ marginTop:'32px' }}>
              <h2 style={subHeading}>{language === 'hi' ? 'शैक्षणिक कार्यक्रम' : 'Courses'}</h2>
              <div style={{ display:'flex',flexWrap:'wrap',gap:'8px',marginTop:'16px' }}>
                {courses.map((c, i) => (
                  <span key={i} style={{ padding:'8px 16px',backgroundColor:'#fff0f0',color:'#8b0000',borderRadius:'8px',fontSize:'13px',fontWeight:'500' }}>{c}</span>
                ))}
              </div>
            </div>
          )}

          {dept.photo_url && (
            <div style={{ marginTop:'24px' }}>
              <img src={dept.photo_url} alt={name} style={{ maxWidth:'100%',borderRadius:'8px' }} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}