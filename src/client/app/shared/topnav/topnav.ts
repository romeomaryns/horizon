import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {

	searchTerm = '';
	changeTheme(color: string): void {
		var link: any = $('<link>');
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}

	rtl(): void {
		var body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebarToggler(): void  {
		var sidebar: any = $('#sidebar');
		var mainContainer: any = $('.main-container');
		sidebar.toggleClass('sidebar-left-zero');
		mainContainer.toggleClass('main-container-ml-zero');
	}

	onKey(event:any):void {
		console.log(event.key);
		console.log(event.target.value);
		this.searchTerm = event.target.value ;
		if(event.key == 'Enter'){
			console.log('Enter pressed !!! value : ' + event.target.value);
			console.log(this.searchTerm);
		}
	}
}
