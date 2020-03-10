//react comp
import React from 'react';

//components
import Navbar from './components/navigation/navbar/Navbar'
import AppRoute from './components/navigation/route/AppRoute'
//css
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.appWindow}>
        <Navbar/>
        <AppRoute/>
    </div>
  );
}

export default App;
