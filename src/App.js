import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Feature from "./Components/Feature";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <div className="bg-dark">
        <Nav></Nav>
        <Hero></Hero>
        <About></About>
        <Feature></Feature>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
