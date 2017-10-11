import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

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

  constructor(navParams: NavParams) {
      this.imageUrl = (<any>navParams).data.image;
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
}
