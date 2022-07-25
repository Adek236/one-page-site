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
          <News />
          <News />
          <News />
          <News />
        </FourBox>
        <DoubleBox>
          <Guides />
          <Guides />
        </DoubleBox>
        <SingleBox>
          <Offers descSide="right" />
          <Offers />
          <Offers descSide="right" />
        </SingleBox>
        <DoubleBox>
          <Guides />
          <Guides />
        </DoubleBox>
        <SingleBox>
          <Offers />
        </SingleBox>
      </Main>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
