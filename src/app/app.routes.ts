import {Routes} from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {SearchEngineComponent} from './search-engine/search-engine.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

export const appRoutes: Routes = [
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'search',
        component: SearchEngineComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
    ,
    {
        path: 'user/:userId',
        component: UserComponent
    }
]