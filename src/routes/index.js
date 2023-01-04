import Home from '../pages/Home';
import Blog from '../pages/Blog';
import SneakerMen from '../pages/SneakerMen';
import SneakerGirl from '../pages/SneakerGirl';
import Detail from '../pages/Detail';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/sneakermen', component: SneakerMen },
    { path: '/sneakergirl', component: SneakerGirl },
    { path: '/@:name', component: Detail },
    // { path: '/detail', component: Detail },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
