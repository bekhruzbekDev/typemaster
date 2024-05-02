import About from "./components/About/About";
import Cards from "./components/Cards/Cards";
import  Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Home/>
        <About/>
        <Cards/>
        <p className="footer-text">Typemaster 2024  | <span>All Rights Reserved</span></p>
      </main>
    </>
  );
}

export default App;
