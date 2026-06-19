import './msc_labs.css'
import DepartmentLabsView from '../../_components/DepartmentLabsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/msc' },
  { label: 'Vision & Mission', href: '/faculty-section/department/msc/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/msc/faculty' },
  { label: 'Staff', href: '/faculty-section/department/msc/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/msc/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/msc/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/msc/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/msc/contact' },
]

const laboratories = []

const equipment = [
  'Spectrofluorophotometer',
  'Vacuum Thermal Coating System',
  'Electron beam evaporation system',
  'Close cycle helium refrigeration system with temperature controller',
  'Dilatometer',
  'Impedance analyzer',
  'Olympus Polarizing Microscope',
  'Optical microscope',
  'Linkam Hot-stage cum Temperature controller',
  'X-Ray Apparatus',
  'Vacuum Furnace',
  'Tubular Furnace',
  'Source meter, picoammeter, electrometer, nanovoltmeter, LCZ meter',
  'Vacuum Oven',
  'Sonicator',
  'Laminar air flow Cabinet',
  'UV Visible spectrophotometer',
]

export default function MscLabsPage() {
  return (
    <DepartmentLabsView
      departmentCode="msc"
      menuItems={menuItems}
      pageClassName="msc-labs-page"
      cssPrefix="msc"
      fallbackLabs={laboratories}
    />
  )
}
