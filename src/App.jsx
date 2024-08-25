import Navbar from "./components/navbar/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./components/article/Article";
import DilliODilli from "./components/blogs/DilliODilli";
import WomanInBrothel from "./components/blogs/WomanInBrothel";
import ExtractsFromLoversNotebook from "./components/blogs/ExtractsFromLoversNotebook";
import ThatsLife from "./components/blogs/ThatsLife";
import LifeByTheSea from "./components/blogs/LifeByTheSea";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/auth/Signin";
// import Write from "./components/create-story/Write";
import Write from "./pages/Write";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const userStatus = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (
      location.pathname === "/create-story" ||
      location.pathname === "/signin"
    ) {
      document.body.classList.remove("padding-top");
    } else {
      document.body.classList.add("padding-top");
    }
  }, [location.pathname]);

  return (
    <>
      <ToastContainer toastClassName="custom-toast" />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/create-story"
          element={userStatus ? <Write /> : <Navigate to="/signin" />}
        />
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="blog/:id" element={<Article />} />
          <Route path="profile/:id" element={<Profile />} />

          {/* <Route path="/blog" element={<Blog />} /> */}

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
