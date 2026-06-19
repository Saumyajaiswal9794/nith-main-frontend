import './cse_faculty.css'
import DepartmentFacultyView from '../../_components/DepartmentFacultyView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/cse' },
  { label: 'Vision & Mission', href: '#' },
  { label: 'Faculty', href: '/faculty-section/department/cse/faculty', active: true },
  { label: 'Staff', href: '/faculty-section/department/cse/staff' },
  { label: 'Programme Offered', href: '#' },
  { label: 'Labs', href: '/faculty-section/department/cse/labs' },
  { label: 'Research Publications', href: '/faculty-section/department/cse/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/cse/contact' },
]

const facultyGroups = [
  {
    title: 'Professor',
    featured: true,
    members: [
      {
        name: 'Prof. Lalit Kumar Awasthi',
        designation: 'Professor',
        interests:
          'Mobile distributed systems, Fault tolerance, Sensor Networks, P2P networks, Network Security',
        email: 'lalit@nith.ac.in',
      },
    ],
  },
  {
    title: 'Associate Professor',
    members: [
      {
        name: 'Dr.(Mrs.) Kamlesh Dutta',
        designation: 'Associate Professor',
        interests: 'Computer Science & Engineering',
        email: 'kd@nith.ac.in',
      },
      {
        name: 'Dr. T P Sharma',
        designation: 'Associate Professor',
        interests:
          'Distributed systems, Wireless Sensor Networks, MANETs & VANETs',
        email: 'teek@nith.ac.in',
      },
      {
        name: 'Dr. Siddhartha Chauhan',
        designation: 'HoD + Associate Professor',
        interests: 'Computer Science and Engineering',
        email: 'sid@nith.ac.in',
      },
      {
        name: 'Dr. Naveen Chauhan',
        designation: 'Associate Professor',
        interests:
          'Mobile Wireless Networks, Vehicular Ad hoc Networks, Internet of Things',
        email: 'naveen@nith.ac.in',
      },
      {
        name: 'Dr. Pardeep Singh',
        designation: 'Associate Professor',
        interests: 'Natural Language Processing, Artificial Intelligence',
        email: 'pardeep@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-I',
    members: [
      {
        name: 'Dr. Rajeev Kumar',
        designation: 'Assistant Professor Grade-I',
        interests: 'Computer Networks, Wireless Networks, IoT',
        email: 'rajeev@nith.ac.in',
      },
      {
        name: 'Dr. Nitin Gupta',
        designation: 'Assistant Professor Grade-I',
        interests:
          'Wireless Networks, Cognitive Radio Networks, IoT, Fog Computing, Internet of Healthcare Things, Internet of Vehicles',
        email: 'nitin@nith.ac.in',
      },
      {
        name: 'Dr. Dharmendra Prasad Mahato',
        designation: 'Assistant Professor Grade-I',
        interests: 'Distributed Computing',
        email: 'dpm@nith.ac.in',
      },
      {
        name: 'Dr. Arun Kumar Yadav',
        designation: 'Assistant Professor Grade-I',
        interests: 'Information Retrieval, Machine Learning, Database Indexing',
        email: 'ayadav@nith.ac.in',
      },
      {
        name: 'Dr. Priyanka',
        designation: 'Assistant Professor Grade-I',
        interests:
          'Adhoc Networks, Wireless Sensor Networks, Vehicular Networks, Internet of Things',
        email: 'dr.priyanka@nith.ac.in',
      },
      {
        name: 'Dr. Jyoti Srivastava',
        designation: 'Assistant Professor Grade-I',
        interests: 'Natural Language Processing, Artificial Intelligence',
        email: 'jyoti.s@nith.ac.in',
      },
      {
        name: 'Dr. Sangeeta Sharma',
        designation: 'Assistant Professor Grade-I',
        interests: 'Cloud Computing, Virtualization',
        email: 'sangeetas@nith.ac.in',
      },
      {
        name: 'Dr. Mohit Kumar',
        designation: 'Assistant Professor Grade-I',
        interests:
          'Artificial Intelligence, Machine Learning, Speech Processing, Automatic Speaker Recognition, NLP',
        email: 'mohit@nith.ac.in',
      },
    ],
  },
  {
    title: 'Assistant Professor Grade-II',
    members: [
      {
        name: 'Dr. Mohammad Khalid Pandit',
        designation: 'Assistant Professor Grade-II',
        interests: 'Deep Learning, Edge Computing and Machine Learning',
        email: 'mkhalid@nith.ac.in',
      },
      {
        name: 'Dr. Ajay Kumar Mallick',
        designation: 'Assistant Professor Grade-II',
        interests:
          'Computer Vision, Machine Learning, Content based Image and Video Retrieval, Digital Image Security and Analysis',
        email: 'ajaymallick@nith.ac.in',
      },
      {
        name: 'Dr. Ram Prakash Sharma',
        designation: 'Assistant Professor Grade-II',
        interests:
          'Explainable AI, Deep Learning, Biometric Security, Machine Learning',
        email: 'ram.sharma@nith.ac.in',
      },
      {
        name: 'Dr. Robin Singh Bhadoria',
        designation: 'Assistant Professor Grade-II',
        interests:
          'Service-Oriented Architecture, Big Data Analytics, Internet of Things (IoT)',
        email: 'robin.bhadoria@nith.ac.in',
      },
    ],
  },
]

export default function CseFacultyPage() {
  return (
    <DepartmentFacultyView
      departmentCode="cse"
      menuItems={menuItems}
      pageClassName="cse-faculty-page"
      cssPrefix="cse"
      fallbackGroups={facultyGroups}
    />
  )
}
