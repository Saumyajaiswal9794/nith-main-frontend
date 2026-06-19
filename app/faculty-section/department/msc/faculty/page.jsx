import './msc_faculty.css'
import DepartmentFacultyView from '../../_components/DepartmentFacultyView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/msc/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/msc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact' },
]

const facultyGroups = [
  {
    title: 'Professor',
    featured: true,
    members: [
      {
        slNo: '1',
        name: 'Prof. Ravi Kumar',
        designation: 'Professor',
        interests: 'Material Science and Engineering',
        email: 'ranade65@nith.ac.in',
      },
    ],
  },
  {
    title: 'Associate Professor',
    members: [
      {
        slNo: '1',
        name: 'Dr. Vishal Singh',
        designation: 'Associate Professor',
        interests: 'Material Science and Engineering',
        email: 'vishalchib@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        slNo: '1',
        name: 'Dr. Vikram Verma',
        designation: 'Assistant Professor Grade-I',
        interests: '-',
        email: 'vikramv@nith.ac.in',
      },
      {
        slNo: '2',
        name: 'Dr. Rita Maurya',
        designation: 'Assistant Professor Grade-I',
        interests: 'Physical Metallurgy, Surface Engineering ( Coating deposition, corrosion studies and tribology), Composites ( Metal and Polymer matrix), Friction Stir Process (FSP)',
        email: 'ritam@nith.ac.in',
      },
      {
        slNo: '3',
        name: 'Dr. Raj Bahadur Singh',
        designation: 'Assistant Professor Grade-I',
        interests: 'Physical Metallurgy',
        email: 'raj@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [],
  },
]

export default function MscFacultyPage() {
  return (
    <DepartmentFacultyView
      departmentCode="msc"
      menuItems={menuItems}
      pageClassName="msc-faculty-page"
      cssPrefix="msc"
      fallbackGroups={facultyGroups}
    />
  )
}