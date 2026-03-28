import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import Layout from "./components/Layout";
import "./css/style.css";

const App = () => {
  useEffect(() => {
    emailjs.init("T_e__wGnTcvDBY_aN");
  }, []);

  return <Layout />;
};

export default App;
