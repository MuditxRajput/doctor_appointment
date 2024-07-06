import AboutSection from "@/components/AboutSection/page";
import Hero from "@/components/Hero/page";
import { databaseConnection } from "@/database/database";
import Emergency from '../components/Emergency/page';
const Homepage = () => {
  databaseConnection();
  return (
    <div>
      <Hero />
      <AboutSection/>
      <Emergency/>
    </div>
  );
};

export default Homepage;
