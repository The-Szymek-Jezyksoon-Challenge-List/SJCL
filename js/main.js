import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';
import Packs from './pages/packs.js';

const routes = [
  { path: '/', component: List },
  { path: '/leaderboard', component: Leaderboard },
  { path: '/roulette', component: Roulette },
  { path: '/packs', component: Packs },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');

console.log('✅ Router uruchomiony:', router.getRoutes());
