import { Component } from '@angular/core';
import {timeout} from "rxjs/operator/timeout";

class Options {
    constructor(public privacy: boolean, public online: boolean) {
    }
}

@Component({
    templateUrl: './about.html'
})
export class AboutComponent {

    public options: Options;

    constructor() {
        if (!this.options) {
            this.options = new Options(
                true,
                localStorage.getItem("workOnline") === "true"
            );
        }
    }

    public saveStuff(): void {
        localStorage.setItem("workOnline", ""+this.options.online);
    }

    public undoChange(): void {
        setTimeout( () => {
            this.options.privacy = true;
        }, 500);
        // this.options.online = true;
        // console.warn(this.options);
    }

}
