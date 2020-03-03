import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner,
  ) {

  }

  triggerScanCode() {

    this.barcodeScanner.scan().then((barcodeData: any) => {
      console.log(barcodeData)

    }).catch();
  }

}
