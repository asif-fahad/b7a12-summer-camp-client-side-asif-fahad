import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../layouts/Dashboard";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers.jsx/ManageUsers";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass/AddAClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import UpdateClass from "../pages/Dashboard/Instructor/UpdateClass/UpdateClass";
import Feedback from "../pages/Dashboard/Admin/Feedback/Feedback";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageclasses/feedback/:id',
                element: <AdminRoute><Feedback></Feedback></AdminRoute>
            },
            {
                path: 'addaclass',
                element: <InstructorRoute><AddAClass></AddAClass></InstructorRoute>
            },
            {
                path: 'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: 'updateClass/:id',
                element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>
            },
            {
                path: 'myenrolledclasess',
                element: <PrivateRoute><MyEnrolledClasses></MyEnrolledClasses></PrivateRoute>
            },
            {
                path: 'myselectedclasses',
                element: <PrivateRoute><MySelectedClasses></MySelectedClasses></PrivateRoute>
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: 'paymentHistory',
                element: <PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
            }
        ]
    },
]);

export default router;