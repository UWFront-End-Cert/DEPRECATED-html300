import recipes from './recipes.vue';
import blogs from './blogs.vue';
import home from './home.vue';
import events from './events.vue';


export const routes = [
  {path: '/home', component : home},
  {path: '/recipes', component : recipes},
  {path: '/blogs', component : blogs },
  {path: '/events', component : events },
]
