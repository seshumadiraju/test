import ClientsSection from "../components/ClientsSection";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import IndestriesWeServe from "../components/IndestriesWeServe";
import OurServices from "../components/OurServices";

function Home() {
  return (
    <div>
      <Header />
      <OurServices />
      <HowItWorks />
      <IndestriesWeServe />
      <ClientsSection />
      <ContactForm />
    </div>
  );
}

export default Home;
