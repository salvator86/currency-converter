import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  titleFooter: string = 'Created by Oleksandr Chukh';

  constructor() { }

  ngOnInit(): void {
  }

}
