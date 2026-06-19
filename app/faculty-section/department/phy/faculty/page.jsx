import './phy_faculty.css'
import DepartmentFacultyView from '../../_components/DepartmentFacultyView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/phy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/phy/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/phy/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/phy/contact' },
]

const facultyGroups = [
  {
    title: 'Professor',
    featured: true,
    members: [
      {
        name: 'Dr. Subhash Chand',
        designation: 'Professor',
        interests: 'Condensed Matter Physics (Experiments & Simulations)',
        email: 'schand@nith.ac.in',
      },
      {
        name: 'Dr. Arvind K. Gathania',
        designation: 'Professor',
        interests: 'Condensed Matter Physics',
        email: 'akgathania@nith.ac.in',
      },
      {
        name: 'Dr. Kuldeep Kr. Sharma',
        designation: 'Professor',
        interests: 'High Energy Physics & Materials Physics',
        email: 'kks@nith.ac.in',
      },
      {
        name: 'Dr. Rajesh Kumar (on Deputation)',
        designation: 'Professor',
        interests: 'Theoretical Nuclear Physics',
        email: 'rajesh_phy@nith.ac.in',
      },
      {
        name: 'Dr. Vimal Sharma (On-Lien)',
        designation: 'Professor',
        interests: 'Material science',
        email: 'vmlsharma@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        name: 'Dr. Sandeep Sharma',
        designation: 'Assistant Professor Grade-I',
        interests: 'Experimental Condensed matter physics, nanoelectronics materials, Hydrogen evolution reaction (HER) activity, gas sensing',
        email: 'sandeep.phy@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [
      {
        name: 'Dr. Abhishek Singh',
        designation: 'Assistant Professor Grade-II',
        interests: 'Condensed Matter Physics',
        email: 'abhi.phy@nith.ac.in',
      },
      {
        name: 'Dr. Neetika',
        designation: 'Assistant Professor Grade-II',
        interests: 'Theoretical High Energy Physics, Quantum Chromo dynamics',
        email: 'dr.neetika@nith.ac.in',
      },
      {
        name: 'Dr. Biswaranjan Das',
        designation: 'Assistant Professor Grade-II',
        interests: 'Theoretical High Energy Physics',
        email: 'biswaranjan@nith.ac.in',
      },
      {
        name: 'Dr. Avijit Dewasi',
        designation: 'Assistant Professor Grade-II',
        interests: 'Experimental Condensed Matter Physics',
        email: 'avijit@nith.ac.in',
      },
      {
        name: 'Dr. Nisha',
        designation: 'Assistant Professor Grade-II',
        interests: 'Experimental Condensed Matter Physics',
        email: 'nishakodan@nith.ac.in',
      },
    ],
  },
]

export default function PhyFacultyPage() {
  return (
    <DepartmentFacultyView
      departmentCode="phy"
      menuItems={menuItems}
      pageClassName="phy-faculty-page"
      cssPrefix="phy"
      fallbackGroups={facultyGroups}
    />
  )
}