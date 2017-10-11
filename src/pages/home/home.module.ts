import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Device } from "@ionic-native/device";

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
    providers: [
        Camera,
        Device
    ]
})
export class HomeModule {}
