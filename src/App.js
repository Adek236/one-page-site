import React from 'react';
import './Styles/App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      <Main>
        Main
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
