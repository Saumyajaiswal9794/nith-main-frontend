import './chem_staff.css'
import DepartmentStaffView from '../../_components/DepartmentStaffView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chem/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chem/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Sh.Arun Kumar',
    designation: 'Technician',
    phone: '-',
    email: '-',
  },
]

const technicalStaff = []

export default function ChemStaffPage() {
  return (
    <DepartmentStaffView
      departmentCode="chem"
      menuItems={menuItems}
      pageClassName="chem-staff-page"
      cssPrefix="chem"
      fallbackOffice={officeStaff}
      fallbackTechnical={technicalStaff}
    />
  )
}
