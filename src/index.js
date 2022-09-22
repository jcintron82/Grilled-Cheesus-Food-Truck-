import  {aboutUsTab, menuTab, contactUsTab, aboutUsTabBtn,menuTabBtn,
contactUsTabBtn,createMainPage} from './mainpage.js'

import {createMenuPage, clearDom, aboutUsTabBtnMenu, contactUsTabBtnMenu} from './menupage.js'

import {createContactUsPage, aboutUsTabBtnContact,contactUsTabBtnContact, menuTabBtnContact} from './contactpage.js'

import css from './menupage.css'

//RENDERS CONTENT FOR ORIGINAL PAGE LOAD
	createMainPage();



//EVENT LISTENERS FOR THE ABOUT US MAIN PAGE
aboutUsTabBtn.addEventListener('click', function () {
	clearDom();
	createMainPage();

})

menuTabBtn.addEventListener('click', function () {
	clearDom();
	createMenuPage();
	
})

contactUsTabBtn.addEventListener('click', function () {
	clearDom();
	createContactUsPage();
})



//EVENT LISTENERS FOR THE MENU PAGE
aboutUsTabBtnMenu.addEventListener('click', function () {
	clearDom();
	createMainPage();

})

contactUsTabBtnMenu.addEventListener('click', function () {
	clearDom();
	createContactUsPage();

})



//EVENT LISTENERS FOR THE CONTACT US PAGE
aboutUsTabBtnContact.addEventListener('click', function () {
	clearDom();
	createMainPage();

})

menuTabBtnContact.addEventListener('click', function () {
	clearDom();
	createMenuPage();
	
})
