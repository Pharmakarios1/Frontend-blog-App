import {Routes, Route} from "react-router-dom"

import './App.css';
import HomePage from './pages/home/HomePage';
import articleDetailPage from "./pages/articleDetail/articleDetailPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index  path="/" element={<HomePage></HomePage>} />
        <Route index  path="/blog/:id" element={ articleDetailPage} />
      </Routes>
    </div>
  );
}

export default App;
