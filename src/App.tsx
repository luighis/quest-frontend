import { Routes, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/Navbar";
import FaqsSection from "./components/FaqsSection";
import ContributorsSection from "./components/ContributorsSection";
import SignInPage from "./pages/SignIn";
import AccountSettings from "./components/AccountSettings";

const Home = () => (
  <>
    <ContributorsSection />
    <FaqsSection />
    <SignInPage />
  </>
);

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<AccountSettings />} />
      </Routes>
    </>
  );
}

export default App;
