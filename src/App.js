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
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>

        <script src="js/jquery.magnific-popup.min.js"></script>
        <script src="js/magnific-popup-options.js"></script>
        <script src="js/custom.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js"></script>
      </div>
    </>
  );
}

export default App;
