import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Feature from "./Components/Feature";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import toast, { Toaster } from "react-hot-toast";
import Project from "./Components/Project";

function App() {
  return (
    <>
      <div className="bg-dark">
        <Toaster />
        <Nav></Nav>
        <Hero></Hero>
        <About></About>
        <Feature></Feature>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
