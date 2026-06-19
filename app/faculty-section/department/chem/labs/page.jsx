import './chem_labs.css'
import DepartmentLabsView from '../../_components/DepartmentLabsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chem/contact' },
]

const laboratories = [
  
]

export default function ChemLabsPage() {
  return (
    <DepartmentLabsView
      departmentCode="chem"
      menuItems={menuItems}
      pageClassName="chem-labs-page"
      cssPrefix="chem"
      fallbackLabs={laboratories}
    />
  )
}
