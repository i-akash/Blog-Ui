//react comp
import React from 'react';

//components
import Navbar from './components/navigation/navbar/Navbar'

//css
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.appWindow}>
        <Navbar/>
    </div>
  );
}

export default App;
