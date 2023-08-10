import Header from "./components/Header"
import Project from "./components/Project"
import Tech from "./components/Tech"
import Footer from "./components/Footer"
import "./index"

const App = () => {
  return (
    <section>
      <Header name={"Rodrigo Silva Regis"}/>

      <div className="container mt-3">

          <div className="bg-light p-4">
            <Project title={"Projects"} />
          </div>

          <div className="mt-3 bg-dark text-white p-4">
            <Tech title={"Soft Skills"}/>
          </div>

       </div>

       <Footer />
    </section>
  );
}

export default App;
