import { HashRouter, Routes, Route } from "react-router-dom";
import Searchcity from "./Pages/Searchcity";
import Weather from "./Pages/Weather";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Searchcity/>} />
        <Route path='/weather' element={<Weather/>} />
      </Routes>
    </HashRouter>
      
    
  );
}

export default App;
