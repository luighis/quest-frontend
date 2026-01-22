import FaqsSection from "./components/FaqsSection"
import ContributorsSection from "./components/ContributorsSection"
import HeroSection from "./components/HeroSection"
function App() {
 
import "./App.css";
import NavBar from "./components/Navbar";
import FaqsSection from "./components/FaqsSection";
import ContributorsSection from "./components/ContributorsSection";
import SignInPage from "./pages/SignIn";

function App() {
  return (
    <>
      <HeroSection/>
      <ContributorsSection/>
      <FaqsSection/>
      <NavBar />
      <ContributorsSection />
      <FaqsSection />
      <SignInPage />
    </>
  );
}

export default App;
