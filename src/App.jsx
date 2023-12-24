import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import routs from "./router/routs";

function App() {
  return <RouterProvider router={createBrowserRouter(routs)}></RouterProvider>;
}

export default App;
