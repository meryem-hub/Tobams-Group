import Image from "next/image";
import Header from "../components/Header"; 
import Hero from "../components/Hero";
import TGAcademy from   '../components/TGAcademy';
import Training from   '../components/Training';
import Program from   '../components/Program';
import Transformation from   '../components/TransformationHub';
import TrainingConsultant from   '../components/TrainingConsultant';
export default function Home() {
  return (
    <>
       <Header/>
   <Hero/>
   <TGAcademy/>

      <Training/>
      <Program/>
      <Transformation/>
      <TrainingConsultant/>
    </>

  );
}
