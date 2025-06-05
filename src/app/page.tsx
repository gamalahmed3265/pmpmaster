import Hero from "./_components/Hero";
import Featured from "./_components/Featured";
import AboutHomePage from "./_components/AboutHomePage";
import Accreditations from "./_components/Accreditations";
import Certified from "./_components/Certified";
import Resources from "./_components/Resources";
import Review from "./_components/Review";
import Article from "./_components/Article";
import NextStep from "./_components/NextSteps";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <AboutHomePage />
      <Accreditations />
      <Certified />
      <Resources />
      <Review />
      <Article />
      <NextStep />
    </main>
  );
}
