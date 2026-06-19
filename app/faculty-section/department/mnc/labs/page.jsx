import './mnc_labs.css'
import DepartmentLabsView from '../../_components/DepartmentLabsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/mnc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/mnc/vision-and-mission' },
  { label: 'Faculty', href: '/faculty-section/department/mnc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/mnc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/mnc/programmes-offered' },
  { label: 'Labs', href: '/faculty-section/department/mnc/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/mnc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/mnc/contact' },
]

const btechLabs = [
  'Data Structures Lab',
  'Numerical Computations with MATLAB Lab',
  'Applied Statistical Methods Lab',
  'Object Oriented Programming Lab',
  'Database Management Systems Lab',
  'Machine Learning Lab',
  'Operating System Lab',
]

const mscLabs = [
  'Computer Programming Lab',
  'SPSS Software Lab',
  'Operations Research Lab',
  'Data Structure and Algorithms Lab',
  'Database Management Systems Lab',
  'R and Python Lab',
  'Numerical Methods Lab',
]

const facilities = [
  'Modern Digital Infrastructure',
  'Advanced Computing Resources',
  'Research-Oriented Design',
  'Support for Emerging Technologies',
  'Conducive Learning Atmosphere',
]

export default function MncLabsPage() {
  return (
    <DepartmentLabsView
      departmentCode="mnc"
      menuItems={menuItems}
      pageClassName="cse-labs-page"
      cssPrefix="cse"
      showCategories={true}
      fallbackLabs={{ btech: btechLabs, msc: mscLabs, facility: facilities }}
    />
  )
}
