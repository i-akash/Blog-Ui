//react comp
import React from "react";

//components
import Navbar from "./components/navigation/navbar/Navbar";
import AppRoute from "./components/navigation/route/AppRoute";
import Footer from "./components/common/footer/Footer";
//css
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.appWindow}>
        <Navbar />
        <div className={styles.container}>
          <AppRoute />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
