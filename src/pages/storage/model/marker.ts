export class Marker {
    public static readonly SIZE = 30;

    public information: string;

    public id: string;

    constructor(public number: string|number, public x: number, public y: number) {
    }
}