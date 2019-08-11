import Vue from 'vue';
import Router from 'vue-router';

import gridView from '../components/gridView'
import imageView from '../components/imageView'
import accordianView from '../components/accordianView'
import indexView from '../components/indexView'


Vue.use(Router);

export default new Router({
routes: [{
    path: '/',
    name: 'app',
    component: app,
},
{
    path: '/index',
    name: 'indexView',
    component: indexView,
},
{
    path: '/grid',
    name: 'gridView',
    component: gridView,
},
{
    path: '/accordian',
    name: 'accordianView',
    component: accordianView,
},
{
    path: '/image',
    name: 'imageView',
    component: imageView,
}],
});