import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Whatwedo from "./components/whatwedo";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Clients from "./components/clients";
import Motto from "./components/motto";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Whatwedo />
      <Projects />
      <Motto />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
