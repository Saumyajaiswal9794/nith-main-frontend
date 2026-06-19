import './phy_staff.css'
import DepartmentStaffView from '../../_components/DepartmentStaffView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/phy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty' },
  { label: 'Staff', href: '/faculty-section/department/phy/staff', active: true },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/phy/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/phy/contact' },
]

const officeStaff = [
  {
    serial: '1',
    name: 'Sh. Kehar Singh',
    designation: 'Office Attendant SG-I',
    phone: '254380',
    email: '-',
  },
]

const technicalStaff = [
  {
    serial: '1',
    name: 'Sh. Surinder Singh',
    designation: 'Sr. Technician',
    phone: '254115',
    email: '-',
  },
  {
    serial: '2',
    name: 'Sh. Gurjeet Singh',
    designation: 'Technician',
    phone: '--',
    email: '--',
  },
]

export default function PhyStaffPage() {
  return (
    <DepartmentStaffView
      departmentCode="phy"
      menuItems={menuItems}
      pageClassName="phy-staff-page"
      cssPrefix="phy"
      fallbackOffice={officeStaff}
      fallbackTechnical={technicalStaff}
    />
  )
}
