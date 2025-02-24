import Artist from "../views/artist";
import SignUp from "../views/auth";
import Home from "../views/home";
import Marketplace from "../views/marketplace";
import Nft from "../views/nft";
import Rankings from "../views/ranking";
import Wallet from "../views/wallet";


const routesPage = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/signup",
        component: SignUp
    },
    {
        path: "/wallet",
        component: Wallet
    },
    {
        path: "/artist",
        component: Artist
    },
    {
        path: "/rankings",
        component: Rankings
    },
    {
        path: "/marketplace",
        component: Marketplace
    },
    {
        path: "/nft",
        component: Nft
    },
]

export {routesPage};