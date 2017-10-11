import {Marker} from "./model/marker";
import {IStorageData} from "./model/IStorageData";

export class StorageService {
    public static saveImage(image: string): void {
        localStorage.setItem("image", image);
    }

    public static saveMarkers(markers: Marker[]) {
        localStorage.setItem("markers", JSON.stringify(markers));
    }

    public static getAll(): IStorageData {
        return <IStorageData>{
            image: localStorage.getItem("image"),
            markers: JSON.parse(localStorage.getItem("markers"))
        }
    }
}