import './cse_research.css'
import DepartmentPublicationsView from '../../_components/DepartmentPublicationsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty' },
  { label: 'Staff', href: '/faculty-section/department/cse/staff' },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/cse/contact' },
]

const publications = [
  {
    year: '2005',
    authors: 'Lalit Kumar, Parveen Kumar, RK Chauhan',
    title:
      'Logging based coordinated check pointing in mobile distributed computing systems Vol. 51, pp. 485-490. DOI: https://doi.org/10.1080/03772063.2005.11416429',
    journal: 'ACCST Journal of research',
    indexing: '-',
  },
  {
    year: '2005',
    authors: 'Parveen Kumar, Lalit Kumar, RK Chauhan',
    title:
      'A low overhead Non-intrusive Hybrid Synchronous check pointing protocol for mobile systems Vol. 52, pp. 247-254.',
    journal: 'Journal of Multidisciplinary Engineering Technologies',
    indexing: '-',
  },
  {
    year: '2005',
    authors: 'Parveen Kumar, Lalit Kumar, RK Chauhan',
    title:
      'Synchronous Check pointing Protocols for Mobile Distributed Systems: A Comparative Study Vol. 1, pp. 298-314.',
    journal: 'International Journal of information and computing science',
    indexing: '-',
  },
]

export default function CseResearchPage() {
  return (
    <DepartmentPublicationsView
      departmentCode="cse"
      menuItems={menuItems}
      pageClassName="cse-research-page"
      cssPrefix="cse"
      fallbackPublications={publications}
    />
  )
}