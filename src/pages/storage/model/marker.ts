export class Marker {
    public static readonly SIZE = 20;

    public information: string;

    constructor(public text: string|number, public x: number, public y: number) {
    }
}