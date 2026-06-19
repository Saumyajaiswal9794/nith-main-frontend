import './mnc_staff.css'
import DepartmentStaffView from '../../_components/DepartmentStaffView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/mnc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/mnc/vision-and-mission' },
  { label: 'Faculty', href: '/faculty-section/department/mnc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/mnc/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/mnc/programmes-offered' },
  { label: 'Labs', href: '/faculty-section/department/mnc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/mnc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/mnc/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Sh. Om Parkash',
    designation: 'Office Attendant SG-II',
    phone: '254101',
    email: 'opnith@nith.ac.in',
  },
]

const technicalStaff = [
  {
    serial: '1',
    name: 'Ms. Smriti',
    designation: 'Senior Technician',
    phone: '254101',
    email: 'smritik@nith.ac.in',
  },
  {
    serial: '2',
    name: 'Mr. Hem Raj',
    designation: 'Technician',
    phone: '254101',
    email: 'hem@nith.ac.in',
  },
  {
    serial: '3',
    name: 'Ms. Sushma',
    designation: 'Technician',
    phone: '',
    email: '',
  },
]

export default function MncStaffPage() {
  return (
    <DepartmentStaffView
      departmentCode="mnc"
      menuItems={menuItems}
      pageClassName="cse-staff-page"
      cssPrefix="cse"
      fallbackOffice={officeStaff}
      fallbackTechnical={technicalStaff}
    />
  )
}
