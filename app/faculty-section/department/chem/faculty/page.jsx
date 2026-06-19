import './chem_faculty.css'
import DepartmentFacultyView from '../../_components/DepartmentFacultyView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/chem' },
  { label: 'Vision & Mission', href: '/faculty-section/department/chem/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/chem/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/chem/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/chem/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/chem/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/chem/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/chem/contact' },
]

const facultyGroups = [
  {
    title: 'Professor',
    featured: true,
    members: [
      {
        name: 'Dr. Pamita Awasthi',
        designation: 'Professor',
        interests: 'Chemistry',
        email: 'pamita@nith.ac.in',
      },
      {
        name: 'Dr. Bharti Gaur',
        designation: 'Professor',
        interests: 'Chemistry',
        email: 'bhartigaur@nith.ac.in',
      },
      {
        name: 'Dr. Kalyan Sundar Ghosh',
        designation: 'Professor',
        interests: 'Bioorganic and Biophysical Chemistry',
        email: 'kalyan@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        name: 'Dr. Raj Kaushal',
        designation: 'Assistant Professor Grade-I',
        interests: 'Inorganic Chemistry',
        email: 'rajkaushal@nith.ac.in',
      },
      {
        name: 'Dr. Jai Prakash',
        designation: 'Assistant Professor Grade-I',
        interests: 'Materials Chemistry and Physics, Functional nanomaterials for energy and environmental applications',
        email: 'jaip@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [
      {
        name: 'Dr. Jagannath Kuchlyan',
        designation: 'Assistant Professor Grade-II',
        interests: 'Photochemistry and Photophysics',
        email: 'jagannath@nith.ac.in',
      },
    ],
  },
]

export default function ChemFacultyPage() {
  return (
    <DepartmentFacultyView
      departmentCode="chem"
      menuItems={menuItems}
      pageClassName="chem-faculty-page"
      cssPrefix="chem"
      fallbackGroups={facultyGroups}
    />
  )
}