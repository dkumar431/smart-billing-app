import { useState } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import {Header, Footer, SideBar, PageTitleBar} from "../../components"
import styles from './App.module.scss';

function App() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.app} >
      {/* <Header isSidebarOpened={isSidebarOpened} onClickSidebarIcon={onClickSidebarIcon}/> */}
      <SideBar open={open} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen}/>
      <main className={styles.main}>
        <PageTitleBar/>
      </main>
      
      <Footer open={open}/>
    </div>
  );
}

export default App;
