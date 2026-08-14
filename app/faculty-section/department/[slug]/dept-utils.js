import Link from 'next/link'
import { Loader2 } from 'lucide-react'

export const API_BASE = 'http://localhost:4000/departments'

export function getMenuItems(slug, language) {
  return [
    { label: language === 'hi' ? 'अवलोकन' : 'Overview', href: `/faculty-section/department/${slug}` },
    { label: language === 'hi' ? 'दृष्टि और मिशन' : 'Vision & Mission', href: `/faculty-section/department/${slug}/vision-and-mission` },
    { label: language === 'hi' ? 'कार्यक्रम' : 'Programmes', href: `/faculty-section/department/${slug}/programmes-offered` },
    { label: language === 'hi' ? 'संकाय' : 'Faculty', href: `/faculty-section/department/${slug}/faculty` },
    { label: language === 'hi' ? 'कर्मचारी' : 'Staff', href: `/faculty-section/department/${slug}/staff` },
    { label: language === 'hi' ? 'प्रयोगशालाएं' : 'Labs', href: `/faculty-section/department/${slug}/labs` },
    { label: language === 'hi' ? 'अनुसंधान' : 'Research', href: `/faculty-section/department/${slug}/research-publications` },
    { label: language === 'hi' ? 'संपर्क' : 'Contact', href: `/faculty-section/department/${slug}/contact` },
    { label: language === 'hi' ? 'मीडिया' : 'Media', href: `/faculty-section/department/${slug}/media` },
  ]
}

export const pageStyles = { display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#f5f5f5' }
export const mainStyle = { flex: 1, padding: '24px 32px', backgroundColor: '#f5f5f5' }
export const contentBox = { backgroundColor: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }
export const subHeading = { fontSize: '18px', fontWeight: 'bold', color: '#8b0000', marginBottom: '12px', borderBottom: '2px solid #8b0000', paddingBottom: '8px' }
export const bodyText = { fontSize: '14px', lineHeight: '1.8', color: '#444', marginBottom: '12px' }

export function DeptSidebar({ name, code, items, activeIdx }) {
  return (
    <div style={{ width: '200px', minWidth: '200px', backgroundColor: '#fff', borderRight: '1px solid #ddd' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
        <h3 style={{ margin: 0, fontSize: '14px', color: '#8b0000', fontWeight: 'bold' }}>{name}</h3>
        <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#999' }}>{code?.toUpperCase()}</p>
      </div>
      {items.map((item, i) => (
        <Link key={i} href={item.href} style={i === activeIdx
          ? { backgroundColor: '#8b0000', color: '#fff', padding: '10px 16px', fontWeight: '600', fontSize: '14px', display: 'block', textDecoration: 'none' }
          : { display: 'block', padding: '8px 16px', fontSize: '14px', color: '#c0392b', textDecoration: 'none', borderBottom: '1px solid #f0f0f0' }
        }>
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export function Loading() {
  return (
    <div style={pageStyles}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader2 className="animate-spin" size={32} color="#8b0000" />
      </div>
    </div>
  )
}

export async function fetchDept(slug) {
  const res = await fetch(`${API_BASE}/slug/${slug}`)
  const json = await res.json()
  if (!json.success) throw new Error('Not found')
  const d = json.data
  // Parse JSONB strings
  ['descriptions_en','descriptions_hi'].forEach(k => {
    if (d.overview && typeof d.overview[k] === 'string') d.overview[k] = JSON.parse(d.overview[k] || '[]')
  })
  ['programmes_en','programmes_hi'].forEach(k => {
    if (d.programmes && typeof d.programmes[k] === 'string') d.programmes[k] = JSON.parse(d.programmes[k] || '[]')
  })
  ['categories_en','categories_hi','publications_en','publications_hi'].forEach(k => {
    if (d.research && typeof d.research[k] === 'string') d.research[k] = JSON.parse(d.research[k] || '[]')
  })
  ['mission_en','mission_hi'].forEach(k => {
    if (d.mission && typeof d.mission[k] === 'string') d.mission[k] = JSON.parse(d.mission[k] || '[]')
  })
  return d
}

export function getBilingual(obj, field, language) {
  if (!obj) return ''
  const hiVal = obj[field + '_hi']
  const enVal = obj[field + '_en']
  if (language === 'hi' && hiVal) return hiVal
  return enVal || hiVal || ''
}
