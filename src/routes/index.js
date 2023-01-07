import config from '../config'
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import MenShoes from '../pages/MenShoes';
import WomenShoes from '../pages/WomenShoes';
import Detail from '../pages/Detail';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.men, component: MenShoes },
    { path: config.routes.women, component: WomenShoes },
    { path: config.routes.detail, component: Detail },
    // { path: '/detail', component: Detail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
