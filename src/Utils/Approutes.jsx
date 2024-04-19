import Signin from "../components/Signin";
import Dashboard from "../components/Dashboard";
import CreateEmployee from "../components/CreateEmployee";
import EditEmployee from "../components/EditEmployee";
import EmployeeList from "../components/EmployeeList";
import { Navigate } from "react-router-dom";
const AppRoutes = [
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/dashboard",
    element:<Dashboard />,
  },
  {
    path:'/employee_list',
    element:<EmployeeList/>
  },
  {
    path: "/user/create_employee",
    element: <CreateEmployee />,
  },
  {
    path: "/user/edit_employee/:id",
    element: <EditEmployee />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];
export default AppRoutes;
