import { NgModule } from '@angular/core';

import {HomeComponent} from "./home.component";
import {IonicModule} from "ionic-angular";

@NgModule({
    imports: [
        IonicModule.forRoot(HomeComponent)
    ],
    declarations: [
        HomeComponent
    ],
    entryComponents: [
        HomeComponent
    ],
})
export class HomeModule {}
