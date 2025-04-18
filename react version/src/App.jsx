// src/App.jsx
import React, { useEffect } from "react";
import "./css/style.css";
import emailjs from "emailjs-com";
import Layout from "./components/Layout";

const App = () => {
  useEffect(() => {
    emailjs.init("T_e__wGnTcvDBY_aN");
  }, []);

  return <Layout />;
};

export default App;
