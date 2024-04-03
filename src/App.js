import React,{Suspense,lazy} from "react";
import "./App.scss";
import "../src/assets/Style/loader.css";


const RouterComponent = lazy(() => import("./routes"));
const App = () => {
  return (

      <Suspense  fallback={<div className="loader"></div>}>
        <RouterComponent />
      </Suspense>
 
  );
};

export default App;
