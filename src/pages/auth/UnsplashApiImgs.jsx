import { useEffect, useState } from "react";
import axios from "axios";

const ApiImages = () => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const accessKey = "BAyQTJ2TMUpLvz0LKDlUV6YWMDa81-2kK4I-RuSQSUg";

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?orientation=landscape&w=1920&h=1080",
        {
          headers: {
            Authorization: `Client-ID ${accessKey}`,
          },
        }
      )
      .then((response) => {
        setBackgroundImage(response.data.urls.full);
      })
      .catch((error) => {
        console.error("Error fetching the background image:", error);
      });
  }, [accessKey]);

  const bgStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return <div style={bgStyle}></div>;
};

export default ApiImages;
