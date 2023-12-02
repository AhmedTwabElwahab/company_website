import React, {Suspense, useState} from "react";
import {RouterProvider} from "react-router-dom";
import router from "./routes/Router.jsx";
import {MainContext} from "./context/MainContext.jsx";
import Spinner from "./components/Spinner.jsx";


function App() {
    const [dir, setDir] = useState('ltr');

  return (
    <>
        <MainContext.Provider value={[dir, setDir]}>
            <Suspense fallback={ <Spinner /> }>
                <RouterProvider router={router} />
            </Suspense>
        </MainContext.Provider>
    </>
  )
}

export default App;
