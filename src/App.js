import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/home" element={<Layout><Home/></Layout>}/>
        <Route path="/contact" element={<Layout><Contact/></Layout>}/>
        <Route path="/home" element={<Layout><Home/></Layout>}/>

      </Routes>
    </Router>
  );
}

export default App;
