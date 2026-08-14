'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, getBilingual } from '../dept-utils'

export default function ContactPage() {
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
  const contact = dept?.contact

  if (loading) return <Loading />

  const g = (f) => getBilingual(contact, f, language)

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={7} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <div style={{ maxWidth:'500px',margin:'0 auto' }}>
            <div style={{ backgroundColor:'#8b0000',color:'#fff',padding:'20px',borderRadius:'8px 8px 0 0',textAlign:'center' }}>
              <h2 style={{ margin:0,fontSize:'18px' }}>{g('hod')}</h2>
            </div>
            <div style={{ border:'1px solid #eee',padding:'20px',borderRadius:'0 0 8px 8px' }}>
              <p style={{ fontSize:'14px',fontWeight:'bold',color:'#333',marginBottom:'4px' }}>{contact?.department || '-'}</p>
              <p style={{ fontSize:'13px',color:'#666',marginBottom:'12px' }}>{contact?.college || '-'}</p>
              <p style={{ fontSize:'13px',color:'#555',marginBottom:'8px' }}>{contact?.address || '-'}</p>
              <p style={{ fontSize:'13px',color:'#555',marginBottom:'4px' }}><strong>Phone:</strong> {contact?.phone_no || '-'}</p>
              <p style={{ fontSize:'13px',color:'#555',marginBottom:'4px' }}><strong>HOD Email:</strong> {contact?.hod_email || '-'}</p>
              <p style={{ fontSize:'13px',color:'#555' }}><strong>Office Email:</strong> {contact?.office_email || '-'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}