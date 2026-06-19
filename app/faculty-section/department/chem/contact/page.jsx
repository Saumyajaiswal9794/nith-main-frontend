import './chem_contact.css'
import DepartmentContactView from '../../_components/DepartmentContactView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty' },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programmes' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chem/contact', active: true },
]

const fallbackContact = {
  headName: 'Dr. Bharti Gaur',
  designation: 'Head of Department',
  departmentName: 'Chemistry',
  instituteName: 'National Institute of Technology Hamirpur',
  state: 'Himachal Pradesh',
  pinCode: '177005',
  phone: '01972 -254102',
  hodEmail: 'head.chy@nith.ac.in',
  officeEmail: 'office.chy@nith.ac.in',
}

export default function ChemContactPage() {
  return (
    <DepartmentContactView
      departmentCode="chem"
      menuItems={menuItems}
      pageClassName="chem-contact-page"
      cssPrefix="chem"
      fallbackContact={fallbackContact}
    />
  )
}
