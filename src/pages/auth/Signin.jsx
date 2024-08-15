import "../../styles/Signin.scss";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import ApiImages from "../../pages/auth/UnsplashApiImgs.jsx";
import { createAccount } from "../../appwrite/auth.js";
import Footer from "../../components/footer/Footer.jsx";

function Signin() {
  const handleSignin = async (e) => {
    e.preventDefault();

    createAccount()
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.error("error create account", error);
      });
  };

  return (
    <>
      <ApiImages />
      <div className="auth-section">
        <div className="container">
          <div className="auth-header">
            <div className="pratibela">Pratibela</div>
            <div className="auth-form">
              <form>
                <h1>Sign in</h1>
                <button type="button" onClick={handleSignin}>
                  <span>
                    <FcGoogle />
                  </span>
                  Continue with Google
                </button>
                <button type="button">
                  <span>
                    <HiOutlineMail />
                  </span>
                  Continue with Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
