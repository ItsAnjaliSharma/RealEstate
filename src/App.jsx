import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";


function App() {
  return (
     <div className="App">
        <Header/>
        <Hero/>
        <Companies/>
        <Residencies/>
        <Values/>
        <Contact />
        <GetStarted/>
        <Footer/>
     </div>
  );
}

export default App;
