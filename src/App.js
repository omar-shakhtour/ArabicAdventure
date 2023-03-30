import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Level from "./routes/Level";
import L1 from "./routes/L1";
import Zero from "./routes/OneRoutes/Zero";
import GameOver from "./routes/GameOver";
import One from "./routes/OneRoutes/One";
import Two from "./routes/OneRoutes/Two";
import Three from "./routes/OneRoutes/Three";
import Four from "./routes/OneRoutes/Four";
//import all pages here and add route below

import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Level" element={<Level />}/>
        <Route path="/L1" element={<L1 />}/>
        <Route path="/Zero" element={<Zero />}/>
        <Route path="/GameOver" element={<GameOver />}/>
        <Route path="/One" element={<One />}/>
        <Route path="/Two" element={<Two />}/>
        <Route path="/Three" element={<Three />}/>
        <Route path="/Four" element={<Four />}/>
      </Routes>
    </>
  );
}

export default App;
