import React, {useState} from "react";
import {RouterProvider} from "react-router-dom";
import router from "./routes/Router.jsx";
import {MainContext} from "./context/MainContext.jsx";


function App() {
    const [dir, setDir] = useState('rtl');

  return (
    <>
        <MainContext.Provider value={[dir, setDir]}>
            <RouterProvider router={router} />
        </MainContext.Provider>
    </>
  )
}

export default App;
