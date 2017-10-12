import { NgModule } from '@angular/core';
import {IonicModule} from "ionic-angular";
import {AboutComponent} from "./about.component";

@NgModule({
    imports: [
        IonicModule.forRoot(AboutComponent),
    ],
    declarations: [
        AboutComponent
    ],
    entryComponents: [
        AboutComponent
    ]
})
export class AboutModule {}
