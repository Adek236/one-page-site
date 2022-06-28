import React from 'react';
import './Styles/App.css';
import Header from './Components/Header/Header';
import Layout from './Components/Layout/Layout';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <Layout>
      <Header>
        <NavBar />
      </Header>
      {/* Main
            Section
              Content
      */}
      {/* Footer */}
    </Layout>
  );
}

export default App;
