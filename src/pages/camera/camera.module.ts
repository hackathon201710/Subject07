import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';

import {CameraComponent} from "./camera.component";
import {HomeModule} from "../home/home.module";

@NgModule({
    imports: [
        HomeModule
    ],
    declarations: [
        CameraComponent
    ],
    providers: [
        Camera
    ],
    entryComponents: [
        CameraComponent
    ],
})
export class CameraModule {}
