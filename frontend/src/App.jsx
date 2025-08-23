import MainNavigation from "./components/MainNavigation";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddTask from "./Pages/Addtask";
import EditTask from "./Pages/EditTask";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import UpdateProfile from "./Pages/UpdateProfile";
import About from "./Pages/About";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/addTask",
            element: <AddTask />,
          },
          {
            path: "/task/editTask/:id",
            element: <EditTask />,
          },
          {
            path: "/user/edit/:id",
            element: <UpdateProfile />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
      <Toaster position="top-right" reverseOrder={false}  />
    </>
  );
};

export default App;
