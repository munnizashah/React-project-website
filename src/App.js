import React from "react";
import "./App.css";

import {
  Blogs,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
