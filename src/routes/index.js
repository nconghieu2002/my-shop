import config from '../config'
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import MenShoes from '../pages/MenShoes';
import WomenShoes from '../pages/WomenShoes';
import Detail4 from '../pages/Detail4';
import Detail5 from '../pages/Detail5';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.men, component: MenShoes },
    { path: config.routes.women, component: WomenShoes },
    { path: config.routes.detail4, component: Detail4 },
    { path: config.routes.detail5, component: Detail5 },
    // { path: '/detail', component: Detail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
