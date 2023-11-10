import "./css/App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="h-[50px] flex items-center justify-center text-white lg:text-[20px] bg-[#FF9500] m-[10px] rounded">
        Free Courses 🌟 Get It Now
      </header>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
