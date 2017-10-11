import {
    Component
} from '@angular/core';

declare const require: any;
const mx = require("mxgraph")({
    mxImageBasePath: "assets/images",
    mxBasePath: "assets"
});

@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html'
})
export class GraphPage {

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
}