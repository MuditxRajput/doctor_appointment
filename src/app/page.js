import AboutSection from "@/components/AboutSection/page";
import Hero from "@/components/Hero/page";
import { databaseConnection } from "@/database/database";

const Homepage = () => {
  databaseConnection();
  return (
    <div>
      <Hero />
      <AboutSection/>
    </div>
  );
};

export default Homepage;
