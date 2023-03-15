import React from 'react'
import Dashbord from './global/Dashbord'
import DashbordHomePage from './pages/DashbordHomePage'
import { Route, Routes } from 'react-router-dom'
import Insertion from './pages/Insertion'
import EnregistrementDesAbsences from './pages/EnregistrementDesAbsences'

const App = () => {
  return (
    <div className='h-screen bg-gray-50 overflow-hidden'>
      <Dashbord>
            <Routes>
              <Route path='/' element={<DashbordHomePage />} />
              <Route path='/Insertion' element={<Insertion />} />
              <Route path='/Absences' element={<EnregistrementDesAbsences />} />
            </Routes>
      </Dashbord>
    </div>
  )
}

export default App