import React from 'react';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import News from './Components/News/News';
import FourBox from './Components/Containers/FourBox/FourBox';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <FourBox>
          <News/>
          <News/>
          <News/>
          <News/>
        </FourBox>
      </Main>
      {/* Main
            Section
              Content
      */}
      <Footer>
        Footer
      </Footer>
    </Layout>
  );
}

export default App;
