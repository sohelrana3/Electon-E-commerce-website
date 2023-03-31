import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import Rootlayouts from "./components/leyouts/Rootlayouts";
import Home from "./pages/Home";
import Contract from "./pages/Contract";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayouts />}>
      <Route index element={<Home />}></Route>
      <Route path="/contract"  element={<Contract />}></Route>
      
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />
}

export default App;
