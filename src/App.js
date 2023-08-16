import { useEffect, useState } from "react"
import Header from "./components/Header"
import Project from "./components/Project"
import Tech from "./components/Tech"
import Footer from "./components/Footer"
import Loader from "./components/Loader"
import Home from "./components/Home"
import "./index"


const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setTimeout(() => {
      setLoading(true)
    }, 1500)

  })

  if(!loading) {
    return <Loader />
  }

  return (
    <section>
      <Header name={"Rodrigo Silva Regis"}/>
  
      <div id="home" className="home p-3">
        <Home />
      </div>

      <div id="projects" className="container mt-4 projects">
        <Project title={"Projects"} />
      </div>
     
      <div id="soft" className="container mt-3 bg-dark text-white p-3 rounded">
        <Tech title={"Soft Skills"}/>
      </div>

      <Footer />
    </section>
  );
}

export default App;
