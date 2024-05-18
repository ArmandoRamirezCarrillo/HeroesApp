import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';


const router = createBrowserRouter(AppRoutes);

export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
