import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {NavController} from "ionic-angular";
import {HomeComponent} from "../home/home.component";

@Component({
    template: "Hello world"
})
export class CameraComponent {

    constructor(camera: Camera,
                navCtrl: NavController) {
        const options: CameraOptions = {
            quality: 100,
            destinationType: camera.DestinationType.FILE_URI,
            encodingType: camera.EncodingType.JPEG,
            mediaType: camera.MediaType.PICTURE,
            correctOrientation: true
        };

        if (camera) {
            camera.getPicture(options)
                .then((imageURI: string) => {
                    navCtrl.push(HomeComponent, {
                        image: imageURI
                    })
                })
                .catch((exception) => {
                    if (exception === "cordova_not_available") {
                        navCtrl.push(HomeComponent, {
                            image: "http://4.bp.blogspot.com/-kwJ03qEG-Eo/UGx2wiGauqI/AAAAAAAAXU0/6YnYqj8-nNM/s1600/funny-cat-pictures-018-030.jpg"
                        })
                    } else {
                        console.error("Something went wrong...", exception);
                    }
                });
        }
    }
}
