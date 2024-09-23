import "./App.css";
import ListComponent from "./components/List-Directory/ListComponent";
import FoodMenuComponent from "./components/Sub-Menu/FoodMenuComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Use BrowserRouter, Routes, and Route

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ListComponent />} />
           <Route path="/menu/:storeName" element={<FoodMenuComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
