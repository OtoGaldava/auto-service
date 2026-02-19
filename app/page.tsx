"use client"
import Image from "next/image"; 
import styles from "./page.module.css"
import Header from "./Components/Header/header";
import Section from "./Components/Section/section";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/contact";

export default function Home() {
    function handleClick () {
        window.location.href = '/'
    }

  return (
    <div className={styles.main}> 
      <Header></Header>
      
      <div className={styles.container}>
        <Section></Section>
        <Services></Services>
        <Contact></Contact>
      </div>
      {/* <div className={styles.services}></div>
      <div className={styles.bottom}></div> */}

    </div>
  );
}
