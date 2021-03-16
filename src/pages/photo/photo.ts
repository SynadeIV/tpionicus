import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, normalizeURL, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.Camera.DestinationType.DATA_URL,
    encodingType: this.Camera.EncodingType.JPEG,
    mediaType: this.Camera.MediaType.PICTURE,
    cameraDirection: 0
  };

  imgUrl: any;s

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private Camera : Camera,
    private Toast: ToastController,
    ) {
  }

  onPicture(){
    this.Camera.getPicture(this.options)
      .then((data) => {
        if(data) this.imgUrl = normalizeURL(data);
      })
      .catch((err) => {
        this.Toast.create({
          message: err,
          duration: 3000,
          position: 'bottom'
        }).present();
      });
  }

}
