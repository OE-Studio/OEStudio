import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ScrollToTop from "./components/ScrollTop";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import Home from "./views/Home";
import WorkPage from "./views/WorkPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/work" element={<WorkPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        {/* <Route exact path="/store" element={<Merch />} /> */}
        {/* <Route exact path="/oedemy" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
