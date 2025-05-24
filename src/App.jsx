import './App.css'
import Header from './component/Header'
import Hero from './component/Hero'
import Introduce from './component/Introduce'
import Projects from './component/Projects'
import { useRef } from "react";


function App() {

  const introduceRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <>
      <Header introduceRef={introduceRef} projectRef={projectRef} />
      <Hero />
      <Introduce ref={introduceRef} />
      <Projects ref={projectRef} />
    </>
  )
}

export default App
