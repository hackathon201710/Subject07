import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {HomeComponent} from "../pages/home/home.component";
import {Marker} from "../pages/storage/model/marker";
import {StorageService} from "../pages/storage/storageService";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    public root = HomeComponent;

  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    });
  }

  public get markers(): Marker[] {
      return StorageService.getAll().markers;
  }
}
