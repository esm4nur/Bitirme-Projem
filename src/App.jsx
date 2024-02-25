import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import TaskForm from './TaskForm'
import TaskForm4 from './TaskForm4' 
import TaskForm5 from './TaskForm5'
import TaskForm6 from './TaskForm6'
import OrganizeSanayi from './OrganizeSanayi'
import SanayiNoktalari from './SanayiNoktalari'
import SektorAnalizi from './SektorAnalizi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TaskForm/>
        <br/>
        <div style={{ backgroundColor: 'gray' }}>
          <br/>
          <br/>
          <TaskForm4/>
          <br/>
          <br/>
          <br/>
          <TaskForm5/>
          <Routes>
            <Route path="/OrganizeSanayi" element={<OrganizeSanayi/>}/>
            <Route path="/SanayiNoktalari" element={<SanayiNoktalari/>}/>
            <Route path="/SektorAnalizi" element={<SektorAnalizi/>}/>
          </Routes>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        <TaskForm6/>
      </div>
    </>
  )
}

export default App



