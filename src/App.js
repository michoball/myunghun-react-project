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
  const unSplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
  });

  const genRanNum = () => {
    const ranNum = Math.floor(Math.random() * 9);
    return ranNum;
  };

  const setBgImgHaneler = () => {
    const num = genRanNum();
    if (image)
      imgRef.current.style.backgroundImage = `url(${image.results[num].urls.regular})`;
  };

  useEffect(() => {
    const unsplashImg = async () => {
      const result = await unSplash.search.getPhotos({ query: "space" });
      setImage(result.response);
      const num = genRanNum();
      imgRef.current.style.backgroundImage = `url(${result.response.results[num].urls.regular})`;
    };
    unsplashImg();
    setBgImgHaneler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#626C80" } }}>
      <div className="App" ref={imgRef}>
        <Routes>
          <Route
            path="/"
            element={<Home imgChangeHandler={setBgImgHaneler} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
