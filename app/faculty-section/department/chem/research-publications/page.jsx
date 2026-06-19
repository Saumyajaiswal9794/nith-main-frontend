import './chem_research.css'
import DepartmentPublicationsView from '../../_components/DepartmentPublicationsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications', active: true },
  { label: 'Contact', href: '/faculty-section/department/chem/contact' },
]

const publications = [
  {
    year: '1992',
    authors: 'B Gaur, JSP Rai',
    title: 'Curing and decomposition behaviour of vinyl ester resins',
    journal: 'Polymer',
    indexing: 'SCI',
  },
  {
    year: '1993',
    authors: 'B Gaur, JSP Rai',
    title: 'Rheological and thermal behaviour of vinyl ester resin',
    journal: 'European polymer journal',
    indexing: 'SCI',
  },
  {
    year: '2003',
    authors: 'B Gaur, B Lochab, V Choudhary, I Varma',
    title: 'Thermal behaviour of poly (allyl azide)',
    journal: 'Journal of thermal analysis and calorimetry',
    indexing: 'SCI',
  },
  {
    year: '2003',
    authors: 'B Gaur, B Lochab, V Choudhary, IK Varma',
    title: 'Azido polymers—energetic binders for solid rocket propellants',
    journal: 'Journal of Macromolecular Science, Part C: Polymer Reviews',
    indexing: 'SCI',
  },
  {
    year: '2003',
    authors: 'B Gaur, JSP Rai',
    title: 'Rheological behavior of vinyl ester resin',
    journal: 'Polymer-Plastics Technology and Engineering',
    indexing: 'SCI',
  },
  {
    year: '2004',
    authors: 'Ghosh, K. S., Maiti, T. K., Dasgupta, S.',
    title: 'Green tea polyphenols as inhibitors of ribonuclease A',
    journal: 'Biochem. Biophys. Res. Commun. (Elsevier)',
    indexing: 'SCI',
  },
]

export default function ChemResearchPage() {
  return (
    <DepartmentPublicationsView
      departmentCode="chem"
      menuItems={menuItems}
      pageClassName="chem-research-page"
      cssPrefix="chem"
      fallbackPublications={publications}
    />
  )
}
