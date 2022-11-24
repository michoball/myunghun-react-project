import { Route, Routes } from "react-router-dom";
import "./App.css";
import { createApi } from "unsplash-js";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { ConfigProvider } from "antd";
import { useEffect, useRef, useState } from "react";

function App() {
  const [image, setImage] = useState(null);
  const imgRef = useRef();
  const upsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  useEffect(() => {
    upsplash.search
      .getPhotos({ query: "space" })
      .then((result) => {
        setImage(result.response);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (image) {
      const ranNum = Math.floor(Math.random() * 9);
      imgRef.current.style.backgroundImage = `url(${image.results[ranNum].urls.regular})`;
    }
  }, [image]);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#626C80" } }}>
      <div className="App" ref={imgRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
