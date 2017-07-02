import { Component, OnInit } from '@angular/core';
import { Document } from 'app/model/person/document';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  document: Document;
  ngOnInit(): void {
    this.document = new Document();
  }
  onChangeDocument(value) {
  }
}
