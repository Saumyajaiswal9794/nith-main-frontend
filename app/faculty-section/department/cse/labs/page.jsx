import './cse_labs.css'
import DepartmentLabsView from '../../_components/DepartmentLabsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty' },
  { label: 'Staff', href: '/faculty-section/department/cse/staff' },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/cse/contact' },
]

const laboratories = [
  'Objected Oriented Paradigm Lab',
  'Microprocessor and Interfacing Lab',
  'Data Structure Lab',
  'Operating System Lab',
  'Computer Organization and Architecture Lab',
  'Data Base Management System Lab',
  'Compiler Design Lab',
  'Computer Graphic Lab',
  'Digital Image Processing Lab',
  'Computer Network Lab',
  'Artificial Intelligence and Robotics Lab',
]

export default function CseLabsPage() {
  return (
    <DepartmentLabsView
      departmentCode="cse"
      menuItems={menuItems}
      pageClassName="cse-labs-page"
      cssPrefix="cse"
      fallbackLabs={laboratories}
    />
  )
}
