import "./App.css";
import Navbar from "./App/Navbar/Navbar";
import Info from "./App/Info/Info";
import Card from "./App/Cards/card"
import Carousel from "./App/Carousel/carousel";
function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <Card/>
        <Carousel/>
        <Info/>
       
      </div>)
    
  }
export default App;
