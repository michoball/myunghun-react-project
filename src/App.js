import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#626C80" } }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
