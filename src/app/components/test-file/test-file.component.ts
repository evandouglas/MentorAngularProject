import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-file',
  templateUrl: './test-file.component.html',
  styleUrls: ['./test-file.component.css']
})

//awesome class
export class TestFileComponent implements OnInit {
  constructor() { }

  ngOnInit() {

  }

  public removeSpaces(input: string): string {
    return input.replace(/ /gi, '');
  }
}
