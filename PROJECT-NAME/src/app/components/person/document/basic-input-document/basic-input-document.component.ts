import { Component, OnInit } from '@angular/core';
import {DocumentConstants} from 'app/config/constants';
import { Document } from "app/model/person/document";

@Component({
  selector: 'app-basic-input-document',
  templateUrl: './basic-input-document.component.html',
  styleUrls: ['./basic-input-document.component.css']
})
export class BasicInputDocumentComponent implements OnInit {
  palceholder = "Nro. de documento";
  document : Document;
  constructor() { }

  ngOnInit() {
  }

}
