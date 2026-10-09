
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="welcome">
        <h1>Welcome to PlumberPro</h1>
        <p>Your trusted partner for professional plumbing services.</p>
      </main>
       <Home />
      <Footer />
    </>
  );
}

export default App;