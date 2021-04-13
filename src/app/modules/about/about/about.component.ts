import { Component, OnInit } from '@angular/core';
declare var $;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	$("#webDesign").animate({
	    width: "70%"
	}, 2500);
	$("#angular").animate({
	    width: "85%"
	}, 2500);
	$("#nodejs").animate({
	    width: "90%"
	}, 2500);
	$("#mongoDB").animate({
	    width: "80%"
	}, 2500);
  }

}
