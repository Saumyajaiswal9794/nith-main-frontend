import './cse_staff.css'
import DepartmentStaffView from '../../_components/DepartmentStaffView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty' },
  { label: 'Staff', href: '/faculty-section/department/cse/staff', active: true },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/cse/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Piyush Pathania',
    designation: 'Jr. Assistant',
    phone: '254402',
    email: '-',
  },
  {
    serial: '2',
    name: 'Joginder Singh',
    designation: 'Attendant',
    phone: '254402',
    email: '-',
  },
]

const technicalStaff = [
  {
    serial: '1.',
    name: 'Sh. Sanjeev Kumar',
    designation: 'Sr. Technical Assistant',
    phone: '254407',
    email: '-',
  },
  {
    serial: '2.',
    name: 'Sh. Jiwan Kumar',
    designation: 'Senior Technician',
    phone: '254405',
    email: '-',
  },
  {
    serial: '3.',
    name: 'Sh. Anurag Dhiman',
    designation: 'Technician',
    phone: '',
    email: '-',
  },
]

export default function CseStaffPage() {
  return (
    <DepartmentStaffView
      departmentCode="cse"
      menuItems={menuItems}
      pageClassName="cse-staff-page"
      cssPrefix="cse"
      fallbackOffice={officeStaff}
      fallbackTechnical={technicalStaff}
    />
  )
}
