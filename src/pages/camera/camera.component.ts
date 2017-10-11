import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
    template: "Hello world"
})
export class CameraComponent {

    constructor(private camera: Camera) {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        if (camera) {
            camera.getPicture(options)
                .then((imageData) => {
                    console.warn(imageData);
                })
                .catch((exception) => {
                    console.error("Something went wrong...", exception);
                });
        }
    }
}
