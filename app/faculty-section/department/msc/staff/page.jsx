import './msc_staff.css'
import DepartmentStaffView from '../../_components/DepartmentStaffView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/msc/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/msc/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Sh. Parvesh Kumar',
    designation: 'Private Secretary',
    phone: '254380',
    email: 'office.mse@nith.ac.in\nparvesh@nith.ac.in',
  },
  {
    serial: '2',
    name: 'Sh. Bhupinder Singh',
    designation: 'Office Attendant SG-I',
    phone: '254380',
    email: 'bhupinder@nith.ac.in',
  },
]

const technicalStaff = [
  {
    serial: '1',
    name: 'Sh. Shivam',
    designation: 'Sr. Technician',
    phone: '-',
    email: '-',
  },
  {
    serial: '2',
    name: 'Sh. Debashish Behera',
    designation: 'Technician',
    phone: '-',
    email: '-',
  },
]

export default function MscStaffPage() {
  return (
    <DepartmentStaffView
      departmentCode="msc"
      menuItems={menuItems}
      pageClassName="msc-staff-page"
      cssPrefix="msc"
      fallbackOffice={officeStaff}
      fallbackTechnical={technicalStaff}
    />
  )
}
