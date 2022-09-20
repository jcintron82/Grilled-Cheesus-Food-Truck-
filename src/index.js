import  {aboutUsTab, menuTab, contactUsTab, aboutUsTabBtn,menuTabBtn,
contactUsTabBtn,createMainPage} from './mainpage.js'

import {createMenuPage, clearDom} from './menupage.js'

import {createContactUsPage} from './contactpage.js'

//Renders the content divs for the main page and assigns classes

createMainPage()



// END OF MAIN PAGE RENDER

//Event listeners for the navigation tabs
aboutUsTabBtn.addEventListener('click', function () {
	clearDom()
	createMainPage();

})




menuTabBtn.addEventListener('click', function () {
	clearDom()
	createMenuPage();
	
})


contactUsTabBtn.addEventListener('click', function () {
	clearDom()
	createContactUsPage();
})

