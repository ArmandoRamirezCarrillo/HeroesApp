import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { LoginPage } from '../auth';
import { HeroesRoutes, childHeroesRoutes } from '../heroes/routes';

export const AppRoutes = [
    {
        path: '/login',
        element: <PublicRouter> <LoginPage/> </PublicRouter>,
    },
    {
        path: '/',
        element: <PrivateRouter> <HeroesRoutes/> </PrivateRouter> ,
        children: childHeroesRoutes
    },
];