import { BrowserRouter, useRoutes } from "react-router-dom";
import Miform from '../src/components/mandatory_info_form/Miform.jsx';
import './App.css'


function App() {
    const routes = useRoutes([
    {
      path: '/',        // Original_Path : '/form'
      element: <Miform />
    },

  ]);

    return routes;
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;