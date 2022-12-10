import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Feature from "./Components/Feature";

function App() {
  return (
    <>
      <div className="bg-dark">
        <Nav></Nav>
        <Hero></Hero>
        <About></About>
        <Feature></Feature>
      </div>
    </>
  );
}

export default App;
