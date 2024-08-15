import Navbar from "./components/navbar/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import DilliODilli from "./components/blogs/DilliODilli";
import WomanInBrothel from "./components/blogs/WomanInBrothel";
import ExtractsFromLoversNotebook from "./components/blogs/ExtractsFromLoversNotebook";
import ThatsLife from "./components/blogs/ThatsLife";
import LifeByTheSea from "./components/blogs/LifeByTheSea";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/auth/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Home />} />

          <Route path="dilli-o-dilli" element={<DilliODilli />} />

          <Route
            path="extracts-from-a-lovers-notebook"
            element={<ExtractsFromLoversNotebook />}
          />
          <Route path="life-by-the-sea" element={<LifeByTheSea />} />
          <Route path="thats-life" element={<ThatsLife />} />
          <Route path="a-woman-in-brothel" element={<WomanInBrothel />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
