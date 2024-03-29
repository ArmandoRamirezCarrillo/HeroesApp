import { MarvelPage,DcPage,SearchPage,HeroPage } from "../pages"
import { Navigate } from "react-router-dom"
 
export const childHeroesRoutes = [
    {
        path: "/",
        element: <MarvelPage/>
    },
    {
        path: "/dc",
        element: <DcPage/>
    },
    {
        path: "/search",
        element: <SearchPage/>
    },
    {
        path: "/hero/:heroId",
        element: <HeroPage/>
    },
    {
        path: "/marvel",
        element: <MarvelPage/>
    },
    {
        path: "/",
        element: <Navigate to={"/marvel"}/>
    }
]