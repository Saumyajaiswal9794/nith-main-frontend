import './mnc_research.css'
import DepartmentPublicationsView from '../../_components/DepartmentPublicationsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/mnc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/mnc/vision-and-mission' },
  { label: 'Faculty', href: '/faculty-section/department/mnc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/mnc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/mnc/programmes-offered' },
  { label: 'Labs', href: '/faculty-section/department/mnc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/mnc/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/mnc/contact' },
]

const publications = [
  {
    year: '1992',
    authors: 'R. C. Sharma and Sunil',
    title: '"Thermosolutal instability of a partially-ionized Hall plasma in porous medium". "Astrophysics and Space Science" (Belgium), 194, 303-311 (1992).',
    journal: 'Astrophysics and Space Science',
    indexing: 'SCIE',
  },
  {
    year: '1992',
    authors: 'R. C. Sharma and Sunil',
    title: '"Rayleigh-Taylor instability of a partially ionized plasma in a porous medium in presence of a variable magnetic field". "Zeitschrift für Naturforschung" (Germany), 47a, 1227-1231 (1992).',
    journal: 'Zeitschrift für Naturforschung',
    indexing: 'SCIE',
  },
  {
    year: '1993',
    authors: 'R. C. Sharma and Sunil',
    title: '"Thermal instability of compressible Hall plasma in the presence of suspended particles". "Ganita" (India), 44(1), 1-11 (1993).',
    journal: 'Ganita',
    indexing: 'UGC Approved (Journal No. 17922)',
  },
  {
    year: '1994',
    authors: 'R. C. Sharma and Sunil',
    title: '"Thermal instability of Oldroydian viscoelastic fluid with suspended particles in hydromagnetics in porous medium". "Polymer-Plastics Technology and Engineering" (U.S.A.), 33(3), 323-339 (1994).',
    journal: 'Polymer-Plastics Technology and Engineering',
    indexing: 'SCIE (Q2)',
  },
  {
    year: '1994',
    authors: 'R. C. Sharma and Sunil',
    title: '"Compressibility and collisional effects on thermal instability of a partially - ionized Hall plasma in porous medium". "Indian Journal of Physics" (India), 68B(3), 255-266 (1994).',
    journal: 'Indian Journal of Physics',
    indexing: 'SCIE',
  },
]

export default function MncResearchPage() {
  return (
    <DepartmentPublicationsView
      departmentCode="mnc"
      menuItems={menuItems}
      pageClassName="mnc-research-page"
      cssPrefix="mnc"
      fallbackPublications={publications}
    />
  )
}
