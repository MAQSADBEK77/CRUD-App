import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import HomeLayout from "./HomeLayout";
import Create from "./Create";
import Update from "./Update";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          element: <Create />,
          path: "create",
        },
        {
          element: <Update />,
          path: "edit/:id",
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
