import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { LongPressModule } from 'ionic-long-press';

import {HomeComponent} from "./home.component";
import {IonicModule} from "ionic-angular";

@NgModule({
    imports: [
        IonicModule.forRoot(HomeComponent),
        LongPressModule
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
