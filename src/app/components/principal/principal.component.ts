import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollTopService }  from '../../services/scroll-top.service';
import { isError } from "util";

import { UserWService } from '../../services/user-w.service';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor( 
  	public location: Location,
    public router: Router,
  public scrollTopService:ScrollTopService,
   public _uw:UserWService,
  private dataApi: DataApiService
  	) { }
    loadAPI = null;  

  url = "assets/assetsshadi/js/vendor/vendor.min.js";
  url2 = "assets/assetsshadi/js/plugins/plugins.min.js";
  url3 = "assets/assetsshadi/js/main.js";



 public loadScript() {
    let node = document.createElement("script");
    node.src = this.url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
  public loadScript2() {
    let node = document.createElement("script");
    node.src = this.url2;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }
    public loadScript3() {
    let node = document.createElement("script");
    node.src = this.url3;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }


  ngOnInit() {
      if (this._uw.loaded==true){
      this.loadAPI = new Promise(resolve => {
        this.loadScript();
        this.loadScript2();
        this.loadScript3();
        });
      }
      
      // this._uw.account=false;
    this._uw.loaded=true;
   
   
  }

}
