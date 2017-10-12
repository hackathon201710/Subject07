export class StorageService {

    private static readonly IMAGEKEY = "image";

    public static saveImage(image: string): void {
        localStorage.setItem(StorageService.IMAGEKEY, image);
    }

    public static getLastImage(): string {
        return localStorage.getItem(StorageService.IMAGEKEY);
    }
}