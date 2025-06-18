import MainNavigation from "./components/MainNavigation";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import MyTasks from "./Pages/MyTasks";
import AddTask from "./Pages/Addtask";
import EditTask from "./Pages/EditTask";


const router = createBrowserRouter([
  {
    path:"/",
    element:<MainNavigation />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/myTasks",
        element:<MyTasks />
      },
      {
        path:"/addTask",
        element:<AddTask />
      },
      {
        path:"/editTask",
        element:<EditTask />
      },
      {
        path:"/login",
        element:<Login />
      }
    ]
  }
])

const App = () => {
  return (
   <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
