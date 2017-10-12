import { Component } from '@angular/core';

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
                false
            );
        }
    }

    public undoChange(type): void {
        setTimeout( () => {
            this.options[type] = !this.options[type];
        }, 500);
    }

}
