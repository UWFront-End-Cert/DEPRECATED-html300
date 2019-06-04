import recipes from './recipes.vue';
import blogs from './blogs.vue';
import index from './';
import events from './events.vue';


export const routes = [
   {path: '/', component : index},
  {path: '/recipes', component : recipes},
  {path: '/blogs', component : blogs },
  {path: '/events', component : events },
]
