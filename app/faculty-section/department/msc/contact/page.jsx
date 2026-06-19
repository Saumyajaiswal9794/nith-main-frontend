import './msc_contact.css'
import DepartmentContactView from '../../_components/DepartmentContactView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/msc/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/msc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programmes' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact', active: true },
]

const fallbackContact = {
  headName: 'Dr. Vishal Singh',
  designation: 'Head of Department',
  departmentName: 'Material Science & Engineering',
  instituteName: 'National Institute of Technology Hamirpur',
  state: 'Himachal Pradesh',
  pinCode: '177005',
  phone: '01972-254380',
  hodEmail: 'head.mse@nith.ac.in',
  officeEmail: 'office.mse@nith.ac.in',
}

export default function MscContactPage() {
  return (
    <DepartmentContactView
      departmentCode="msc"
      menuItems={menuItems}
      pageClassName="msc-contact-page"
      cssPrefix="msc"
      fallbackContact={fallbackContact}
    />
  )
}
