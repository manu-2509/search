
import './App.css';
import {Search} from './components/search'
import {Routes,Route} from "react-router-dom"
import {Country} from './components/country'
function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Search/>}/>
      <Route path="/countries/:country" element={<Country></Country>}/>
     </Routes>
    </div>
  );
}

export default App;
