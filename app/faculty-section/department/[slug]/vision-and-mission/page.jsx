'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { DeptSidebar, Loading, fetchDept, getMenuItems, pageStyles, mainStyle, contentBox, subHeading, bodyText, getBilingual } from '../dept-utils'

export default function VisionMissionPage() {
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
  const visions = dept?.visions
  const vision = language === 'hi' && visions?.vision_hn ? visions.vision_hn : (visions?.vision_en || '')
  const mission = language === 'hi' && visions?.mission_hn ? visions.mission_hn : (visions?.mission_en || '')

  if (loading) return <Loading />

  return (
    <div style={pageStyles}>
      <DeptSidebar name={name} code={dept?.code} items={menuItems} activeIdx={1} />
      <div style={mainStyle}>
        <div style={contentBox}>
          <h2 style={subHeading}>{language === 'hi' ? 'दृष्टि' : 'Vision'}</h2>
          <p style={bodyText}>{vision || (language === 'hi' ? 'अभी तक जोड़ा नहीं गया' : 'Not added yet')}</p>
          <h2 style={{ ...subHeading, marginTop: '32px' }}>{language === 'hi' ? 'मिशन' : 'Mission'}</h2>
          <p style={bodyText}>{mission || (language === 'hi' ? 'अभी तक जोड़ा नहीं गया' : 'Not added yet')}</p>
        </div>
      </div>
    </div>
  )
}
