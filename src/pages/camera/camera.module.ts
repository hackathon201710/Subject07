import { NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';

import {CameraComponent} from "./camera.component";

@NgModule({
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
