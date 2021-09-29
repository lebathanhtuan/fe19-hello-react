import React, { useState } from 'react'
import './App.css';

import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
import Footer from './Footer'

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(true)

  return (
    <>
      <Header setIsShowSidebar={setIsShowSidebar} isShowSidebar={isShowSidebar} />
      <div className="container">
        <Sidebar isShowSidebar={isShowSidebar} />
        <Main isShowSidebar={isShowSidebar} />
      </div>
      <Footer />
    </>
  );
}

export default App;
