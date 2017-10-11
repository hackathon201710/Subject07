import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

declare const require: any;
const mx = require("mxgraph")({
    mxImageBasePath: "assets/images",
    mxBasePath: "assets"
});

@Component({
    templateUrl: "./home.html"
})
export class HomeComponent {

    public imageUrl: string;

    private static options: CameraOptions;

  constructor(private camera: Camera) {
      if (!this.imageUrl) {
          HomeComponent.options = {
              quality: 100,
              destinationType: camera.DestinationType.FILE_URI,
              encodingType: camera.EncodingType.JPEG,
              mediaType: camera.MediaType.PICTURE,
              correctOrientation: true
          };
          // this.getImage();
      }
  }

    ionViewDidLoad(): void {
        let container = document.getElementById('graphContainer');

        mx.mxEvent.disableContextMenu(container);
        let graph = new mx.mxGraph(container);
        // new mx.mxRubberband(graph);
        let parent = graph.getDefaultParent();
        graph.getModel().beginUpdate();
        let v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
        let v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
        graph.insertEdge(parent, null, 'Parent', v1, v2);
        graph.getModel().endUpdate();
    }

    public get graphStyle() {
      return "url(" + this.imageUrl + ")";
    }

    private getImage(): void {
        this.camera.getPicture(HomeComponent.options)
            .then((imageURI: string) => {
              this.imageUrl = imageURI;
            })
            .catch((exception) => {
                if (exception === "cordova_not_available") {
                    this.imageUrl = "http://4.bp.blogspot.com/-kwJ03qEG-Eo/UGx2wiGauqI/AAAAAAAAXU0/6YnYqj8-nNM/s1600/funny-cat-pictures-018-030.jpg";
                } else {
                    console.error("Something went wrong...", exception);
                }
            });
    }
}
