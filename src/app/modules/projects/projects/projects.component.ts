import { Component, OnInit } from '@angular/core';
declare var $;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  	constructor() { }

  	ngOnInit(): void {
	  	$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    responsiveClass:true,
		    nav: true,
		    navText: ["<span class='left'><i class='fa fa-angle-left' aria-hidden='true'></i></span>","<span class='right'><i class='fa fa-angle-right' aria-hidden='true'></i></span>"],
		    responsive:{
		        1000:{
		            items:1,
		            nav:true,
		            loop:false
		        }
		    }
		})
  	}
}
