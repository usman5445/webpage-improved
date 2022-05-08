import "./App.css";
import Banner from "./components/banner";
import Footer from "./components/footer";
import MiddleContent from "./components/middleContent";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MiddleContent />
      <Footer />
    </div>
  );
}

export default App;
