import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import "./App.css";

function App() {
return (
<> <Navbar />

```
  <main id="home">
    <section className="welcome">
      <img
        src="/src/assets/plumberpro-banner.jpg"
        alt="Welcome to PlumberPro plumbing services"
        className="welcome-image"
      />
    </section>

    <Home />
  </main>

  <Footer />
</>

);
}

export default App;
