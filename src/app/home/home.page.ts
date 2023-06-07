import { Component } from '@angular/core';
import { BleClient } from '@capacitor-community/bluetooth-le';
import { filter } from 'rxjs';
import { BLE } from '@ionic-native/ble/ngx';
  
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  deviceName:any
  deviceID:any
  deviceUUID:any
  constructor(private ble: BLE) { }
  
  // async scanDevices(){
  //   await BleClient.initialize({ androidNeverForLocation: true });
  //   const device = await BleClient.requestDevice()
  //   console.log(device)
  //   this.deviceID = device.deviceId
  //   this.deviceName = device.name
  //   this.deviceUUID = device.uuids
  // }

  scanDevices() {
    this.ble.startScan([]).subscribe(
      device => {
        if (device.id === "FF:FF:90:06:86:0D") {
          console.log(JSON.stringify(device));
          this.deviceID = device.id;
          this.deviceName = device.name;
        }
      }
    );    
  }

}
