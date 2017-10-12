import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { LongPressModule } from 'ionic-long-press';

import {HomeComponent} from "./home.component";
import {IonicModule} from "ionic-angular";
import {AboutModule} from "../about/about.module";

@NgModule({
    imports: [
        IonicModule.forRoot(HomeComponent),
        LongPressModule,
        AboutModule
    ],
    declarations: [
        HomeComponent
    ],
    entryComponents: [
        HomeComponent
    ],
    providers: [
        Camera
    ]
})
export class HomeModule {}
