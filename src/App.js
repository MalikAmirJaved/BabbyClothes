import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./Layout";


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Layout />}/>
      </Routes>
    </Router>
  );
}

export default App;
