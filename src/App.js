import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Layout from "./Components/Layout/Layout";
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import News from "./Components/News/News";
import FourBox from "./Components/Containers/FourBox/FourBox";
import DoubleBox from "./Components/Containers/DoubleBox/DoubleBox";
import SingleBox from "./Components/Containers/SingleBox/SingleBox";
import Footer from "./Components/Footer/Footer";
import Guides from "./Components/Guides/Guides";
import Offers from "./Components/Offers/Offers";
import Modal from "./Components/Modal/Modal";

import  getWindowDimensions  from "./Controllers/useWindowWith";

const Component = () => {
  const { width } = getWindowDimensions();

  return (
    <div>
      {console.log("4- ", width)}
      width: {width}
    </div>
  );
}

function App() {
  const [showModal, setShowModal] = useState(false);
  // const { windowWith } = useWindowWith();
  return (
    <Layout>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Header>
        <NavBar setShowModal={setShowModal} />
      </Header>
      <Main>
        <Component/>
        <FourBox>
          <News id="0"/>
          <News id="1"/>
          <News id="2"/>
          <News id="3"/>
        </FourBox>
        <DoubleBox>
          <Guides id="0"/>
          <Guides id="1"/>
        </DoubleBox>
        <SingleBox>
          <Offers id="0" descSide="right" />
          <Offers id="1"/>
          <Offers id="2" descSide="right" />
        </SingleBox>
        <DoubleBox>
          <Guides id="2"/>
          <Guides id="3"/>
        </DoubleBox>
        <SingleBox>
          <Offers id="3"/>
        </SingleBox>
      </Main>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
