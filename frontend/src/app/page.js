import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Components/Banner/Banner";
import TabSection from "./Components/TabSection/TabSection";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
   <>
 
  <Banner/>
  <TabSection/>
   <Footer/>
   </>
  );
}
