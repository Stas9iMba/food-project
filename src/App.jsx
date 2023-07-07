import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}></Route>)
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
