import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import PersonalSection from './components/PersonalSection'
import OverviewSection from './components/overView'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection'

function CvGenerator(){
 const [printMode,setPrintMode]=useState(false);

  return(
    <>
    <header>
    <PersonalSection printMode={printMode} />
    </header>
    <main>
     
      <OverviewSection printMode={printMode} />
    
      <EducationSection printMode={printMode} />
    
      <ExperienceSection printMode={printMode} />
    
    </main>
    </>
  )

}

function App() {
 
  return (
   <CvGenerator />
  )
}

export default App
