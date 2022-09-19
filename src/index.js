import  {content, div1, header,blurbBox,newDiv, tab, tabs, aboutUsTab, menuTab, contactUsTab, aboutUsTabBtn,menuTabBtn,
contactUsTabBtn, addText, logoDivContainer, logo, addImage, createMainPage} from './mainpage.js'

import { } from './menupage.js'

//Renders the content divs for the main page and assigns classes

newDiv(content, header, 'header');
newDiv(content, div1, 'mainPage' );
newDiv(div1, blurbBox, 'logoAndBlurb');
newDiv(header, tabs, 'tabsContainer')
newDiv(tabs, aboutUsTab, 'tabs')
newDiv(tabs, menuTab, 'tabs')
newDiv(tabs, contactUsTab, 'tabs')
newDiv(header, logoDivContainer, 'logoDivContainer' )


aboutUsTab.appendChild(aboutUsTabBtn)
aboutUsTabBtn.className = 'aboutUsBtn'

menuTab.appendChild(menuTabBtn)
menuTabBtn.className = 'aboutUsBtn'

contactUsTab.appendChild(contactUsTabBtn);
contactUsTabBtn.className = 'aboutUsBtn'








//Adds text to aforementioned rendered divs
addText(aboutUsTabBtn, 'About Us');
addText(menuTabBtn, 'Menu');
addText(contactUsTabBtn, 'Contact Us');
addText(logoDivContainer, 'Grilled Cheesus')


addImage(logoDivContainer, logo, 'cheese.png', 'mainPageLogoImg')



//Event listeners for the navigation tabs
aboutUsTabBtn.addEventListener('click', function () {
	createMainPage();

})

menuTabBtn.addEventListener('click', function () {
	
})


contactUsTabBtn.addEventListener('click', function () {
	alert('hi')
})

