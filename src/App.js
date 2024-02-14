import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorMgs from "./Component/ErrorMsg";
import SuccessMsg from "./Component/SuccessMsg";
import Read from "./Component/Read";
import ReadProcess from "./Component/ReadProcess";
import Update from "./Component/Update";
import Del from "./Demo/Del";
function App() {
  return (
    <div>
      <Del/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read/>}/>
          <Route path="/readProcess/:id" element={<ReadProcess/>}/>
          <Route path="/update/:id" element={<Update/>}/>
          <Route path="/error" element={<ErrorMgs/>}/>
          <Route path="/success" element={<SuccessMsg/>}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
