import './cse_contact.css'
import DepartmentContactView from '../../_components/DepartmentContactView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty' },
  { label: 'Staff', href: '/faculty-section/department/cse/staff' },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/cse/contact', active: true },
]

const fallbackContact = {
  headName: 'Dr. Siddhartha Chauhan',
  designation: 'Head of Department',
  departmentName: 'Computer Science & Engineering',
  instituteName: 'National Institute of Technology Hamirpur',
  state: 'Himachal Pradesh',
  pinCode: '177005',
  phone: '+91-1972 -254400',
  hodEmail: 'head.cse@nith.ac.in',
  officeEmail: 'office.cse@nith.ac.in',
}

export default function CseContactPage() {
  return (
    <DepartmentContactView
      departmentCode="cse"
      menuItems={menuItems}
      pageClassName="cse-contact-page"
      cssPrefix="cse"
      fallbackContact={fallbackContact}
    />
  )
}
