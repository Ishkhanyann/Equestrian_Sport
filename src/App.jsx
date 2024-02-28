import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Shop from "./Pages/Shop/Shop";
import SignIn from "./Pages/SignIn/SignIn";
import Layouts from "./Pages/Layouts/Layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts/>}>
      <Route index element={<Home />} />
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="Courses" element={<Courses />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="SignIn" element={<SignIn />} />
    </Route>
  )
);

function App() {
  return(
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
