import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DcPage } from "../heroes/pages/DcPage";
import { MarvelPage } from "../heroes/pages/MarvelPage";

const router = createBrowserRouter([
    {
        path: '/marvel',
        element: <MarvelPage/>,
    },
    {
        path: '/dc',
        element: <DcPage/>,
    },
    {
        path: '/login',
        element: <LoginPage/>,
    },
    {
        path: '/',
        element: <Navigate to={'/marvel'}/>,
    },
]);

export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
