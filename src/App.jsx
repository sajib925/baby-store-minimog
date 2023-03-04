import {Outlet} from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
