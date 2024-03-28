import React from "react";
import { RouterProvider } from 'react-router-dom';
import { router } from "./rooting/rootes";

const App = () => {

  return <RouterProvider rooter={router}></RouterProvider>
};

export default App;