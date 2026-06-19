import './phy_research.css'
import DepartmentPublicationsView from '../../_components/DepartmentPublicationsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/phy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty' },
  { label: 'Staff', href: '/faculty-section/department/phy/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/phy/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/phy/contact' },
]

const publications = [
  {
    year: '1995',
    authors: 'Subhash Chand and Jitendra Kumar',
    title: 'Current-voltage characteristics of Pd2Si based Schottky diodes on p-type (111) silicon and evaluation of their barrier heights',
    journal: 'Solid State Electronics 38 p 1103-1104',
    indexing: 'sse',
  },
  {
    year: '1995',
    authors: 'Subhash Chand and Jitendra Kumar',
    title: 'Current-voltage characteristics and barrier parameters of Pd2Si/p-Si(111) Schottky diodes in a wide temperature range',
    journal: 'Semiconductor Science & Technology 10 p 1680-1688',
    indexing: 'SCI-3402 and SCOPUS-27191',
  },
  {
    year: '1996',
    authors: 'Subhash Chand and Jitendra Kumar',
    title: 'Current-transport in Pd2Si/n-Si(100) Schottky barrier diodes at low temperatures',
    journal: 'Applied Physics A 63 p 171-178',
    indexing: 'apa',
  },
  {
    year: '1996',
    authors: 'Subhash Chand and Jitendra Kumar',
    title: 'On the Existence of a barrier heights distribution in Pd2Si/Si Schottky diodes',
    journal: 'Journal of Applied Physics 80 p 288-294',
    indexing: 'SCI-1888 and SCOPUS-28132',
  },
  {
    year: '1996',
    authors: 'Subhash Chand and Jitendra Kumar',
    title: 'Evidence for the double distribution of barrier heights in Pd2Si/n-Si Schottky diodes from I-V-T measurements',
    journal: 'Semiconductor Science & Technology 11 p 1203-1208',
    indexing: 'SCI-3402 and SCOPUS-27191',
  },
]

export default function PhyResearchPage() {
  return (
    <DepartmentPublicationsView
      departmentCode="phy"
      menuItems={menuItems}
      pageClassName="phy-research-page"
      cssPrefix="phy"
      fallbackPublications={publications}
    />
  )
}
