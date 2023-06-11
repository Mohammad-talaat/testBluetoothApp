import { Component } from '@angular/core';
import { BleClient } from '@capacitor-community/bluetooth-le';
import { filter } from 'rxjs';
import { BLE } from '@ionic-native/ble/ngx';
import { LoadingController } from '@ionic/angular';
  
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  deviceName:any;
  deviceID:any;
  deviceUUID:any;
  errorMessage :any= null;
  constructor(private ble: BLE,private loadingController: LoadingController) { }
  
  // async scanDevices() {
  //   await BleClient.initialize();
  
  //   // Create and present the loading spinner
  //   const loading = await this.loadingController.create({
  //     message: 'Scanning for devices...'
  //   });
  //   await loading.present();
  
  //   // Start the BLE scan
  //   const scanSubscription = await BleClient.requestLEScan({ namePrefix: "iTAG" }, (result) => {
  //     console.log(result.localName)
  //     console.log(result.uuids)
  //     if (result.localName === "iTAG") {
  //       this.deviceID = result.manufacturerData
  //       this.deviceName = result.localName
  //       this.deviceUUID = result.uuids
  
  //       // Stop scanning
  //     }
  //   })
  //   // await BleClient.stopLEScan();

  //   // // Dismiss the loading spinner
  //   // await loading.dismiss();
  
  //   // If scan doesn't find device after a set amount of time, stop scanning and dismiss loader
  //   setTimeout(async () => {
  //     if (this.deviceID === null) {
  //       await BleClient.stopLEScan();
  //       await loading.dismiss();
  //     }
  //   }, 10000);  // Adjust the timeout as needed
  // }
  

  async scanDevices() {
    // const loading = await this.loadingController.create({
    //   // message: 'Scanning for devices...'
    // });
    // await loading.present();
  
    this.ble.startScan([]).subscribe(
      device => {
        // this.deviceID = null
        // this.deviceName = null
        // this.deviceUUID = null
        console.log('--------- device id --------')
        console.log(device.id);
        console.log('--------- device name --------')
        console.log(device.name);
        // if (device.id === "FF:FF:AA:A3:E8:C2") {
        // if (device.id === "FF:FF:AA:A3:E8:C2") {
        //   console.log(device.id);
        //   this.deviceID = device.id;
        //   this.deviceName = device.name;
        //   this.deviceUUID = device.uuids
        //   this.ble.stopScan();
        //   loading.dismiss();  // Dismiss the loading spinner when the device is found
        // } else if(device.id === "FF:FF:90:06:86:0D")
        // {
        //   console.log(device.id);
        //   this.deviceID = device.id;
        //   this.deviceName = device.name;
        //   this.deviceUUID = device.uuids
        //   this.ble.stopScan();
        //   loading.dismiss();
        // }
      },
      error => {
        console.error(JSON.stringify(error));
        this.errorMessage = JSON.stringify(error.Msg)
        // loading.dismiss();  // Dismiss the loading spinner when an error occurs
      }
    );
  }
  

}
