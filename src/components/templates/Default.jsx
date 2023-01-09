import React from "react";

import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

export default function Default(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
