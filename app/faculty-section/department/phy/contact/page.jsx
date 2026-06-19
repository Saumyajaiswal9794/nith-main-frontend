import './phy_contact.css'
import DepartmentContactView from '../../_components/DepartmentContactView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/phy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty' },
  { label: 'Staff', href: '/faculty-section/department/phy/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programmes' },
  { label: 'Labs', href: '/faculty-section/department/phy/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/phy/contact', active: true },
]

const fallbackContact = {
  headName: 'Dr. Subhash Chand',
  designation: 'Head of Department',
  departmentName: 'Physics & Photonics Science',
  instituteName: 'National Institute of Technology Hamirpur',
  state: 'Himachal Pradesh',
  pinCode: '177005',
  phone: '01972 -254146',
  hodEmail: 'head.pps@nith.ac.in',
  officeEmail: 'office.pps@nith.ac.in',
}

export default function PhyContactPage() {
  return (
    <DepartmentContactView
      departmentCode="phy"
      menuItems={menuItems}
      pageClassName="phy-contact-page"
      cssPrefix="phy"
      fallbackContact={fallbackContact}
    />
  )
}
