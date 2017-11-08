import { Component, OnInit } from '@angular/core';
import { UploadProfileService } from '../services/upload-photo/upload-photo.service';
import { Upload } from '../services/upload-photo/upload';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
 private storage: any;
  user: any;
  uploadProcess = 0;
  uploadFlag = false;

  constructor(private upSvc: UploadProfileService, private _auth: AuthService) { }

  ngOnInit() {
    this.user = this._auth.getCurrentUserObs()
  }

  uploadsingle(event){
    this.uploadProcess=0;
    this.uploadFlag =true;
    let file = event.srcElement.files[0];
    this.upSvc.pushUpload(file).subscribe(this.onProcess, () => {}, this.onComplete)
    console.log("Upload done")
  }
  private onProcess = (process) => {this.uploadProcess = process; }
  private onComplete= () => {this.uploadProcess=0; this.uploadFlag=false;}

  deleteUser() {
    this._auth.deleteUser()
  }
}

