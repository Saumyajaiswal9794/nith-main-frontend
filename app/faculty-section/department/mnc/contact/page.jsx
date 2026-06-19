import './mnc_contact.css'
import DepartmentContactView from '../../_components/DepartmentContactView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/mnc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/mnc/vision-and-mission' },
  { label: 'Faculty', href: '/faculty-section/department/mnc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/mnc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/mnc/programmes-offered' },
  { label: 'Labs', href: '/faculty-section/department/mnc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/mnc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/mnc/contact', active: true },
]

const fallbackContact = {
  headName: 'Dr.Sunil',
  designation: 'Head of Department',
  departmentName: 'Mathematics and computing sciences',
  instituteName: 'National Institute of Technology Hamirpur',
  state: 'Himachal Pradesh',
  pinCode: '177005',
  phone: '01972- 254134',
  hodEmail: 'head.msc@nith.ac.in',
  officeEmail: 'office.msc@nith.ac.in',
}

export default function MncContactPage() {
  return (
    <DepartmentContactView
      departmentCode="mnc"
      menuItems={menuItems}
      pageClassName="cse-contact-page"
      cssPrefix="cse"
      fallbackContact={fallbackContact}
    />
  )
}
