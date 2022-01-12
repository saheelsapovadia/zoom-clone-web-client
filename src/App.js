import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
