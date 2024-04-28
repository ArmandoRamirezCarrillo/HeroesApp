import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes, childHeroesRoutes } from '../heroes/routes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
// import { DcPage, MarvelPage } from "../heroes";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <PublicRouter> <LoginPage/> </PublicRouter>,
    },
    {
        path: '/',
        element: <PrivateRouter> <HeroesRoutes/> </PrivateRouter> ,
        children: childHeroesRoutes
    },
]);

export const AppRouter = () => {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
