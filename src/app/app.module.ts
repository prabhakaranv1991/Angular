import{NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppRootComponent } from './appRoot/appRoot.component';
import { ComponentsModule } from './components/components.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations:[AppRootComponent],
    imports:[
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
    ],
    bootstrap:[AppRootComponent],
    exports:[],

})
export class AppModule{

}