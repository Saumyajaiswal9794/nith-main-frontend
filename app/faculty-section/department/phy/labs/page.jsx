import './phy_labs.css'
import DepartmentLabsView from '../../_components/DepartmentLabsView'

const menuItems = [
  { label: 'About Us', href: '/faculty-section/department/phy' },
  { label: 'Vision & Mission', href: '/faculty-section/department/phy/vision-mission' },
  { label: 'Faculty', href: '/faculty-section/department/phy/faculty' },
  { label: 'Staff', href: '/faculty-section/department/phy/staff' },
  { label: 'Programme Offered', href: '/faculty-section/department/phy/programme-offered' },
  { label: 'Labs', href: '/faculty-section/department/phy/labs', active: true },
  { label: 'Research Publications', href: '/faculty-section/department/phy/research-publications' },
  { label: 'Contact', href: '/faculty-section/department/phy/contact' },
]

const laboratories = [
  'Engineering Physics Lab',
  'Solid State Physics Lab',
  'Electricity & Magnetism Lab',
  'Spectroscopy Lab',
  'Thermal Physics Lab',
  'Numerical methods & Computational Physics Lab',
  'Optics Lab',
  'Modern Physics Lab',
  'Digital Electronics Lab',
  'Laser and Photonics Lab',
  'Measurement and Instrumentation Lab',
  'Fabrication and Assembly Lab',
]

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

export default function PhyLabsPage() {
  return (
    <DepartmentLabsView
      departmentCode="phy"
      menuItems={menuItems}
      pageClassName="phy-labs-page"
      cssPrefix="phy"
      showCategories={true}
      fallbackLabs={{ general: laboratories, equipment }}
    />
  )
}
