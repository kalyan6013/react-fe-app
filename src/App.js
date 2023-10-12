import './App.css';

import { useRoutes } from "react-router-dom";
import User from './user';

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <User />
    },
    { path: "/userData", element: <User /> },
  ]);

  return element;
}

export default App;