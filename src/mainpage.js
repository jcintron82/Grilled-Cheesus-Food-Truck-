
//Variables for basic page layout 
let content = document.getElementById('content');
const div1 = document.createElement('div')
const header = document.createElement('header')
const blurbBox = document.createElement('div')
const blurbHead = document.createElement('div')
const blurbBody = document.createElement('div')

//Variables for the logo in the header
const logoDivContainer = document.createElement('div')
const logo = document.createElement('img');
const grilledDiv = document.createElement('div')
const cheesusDiv = document.createElement('div')

//for the nav buttons
const tabs = document.createElement('ul');
export const aboutUsTab = document.createElement('li')
export const aboutUsTabBtn =document.createElement('button')
export const menuTab = document.createElement('li')
export const menuTabBtn =document.createElement('button')
export const contactUsTab = document.createElement('li')
export const contactUsTabBtn =document.createElement('button')



export function createMainPage() {

	 function newDiv(parent, newdiv, style, ){
     parent.appendChild(newdiv);
     newdiv.className = style;
  
}

//function
	 function addImage(parent, child, src, style) {
	 child.src = src;
	 parent.appendChild(child)
	 logo.className = style

}
//CREATES HEADER

newDiv(content, header, 'header');
newDiv(header, tabs, 'tabsContainer')
newDiv(tabs, aboutUsTab, 'tabs')
newDiv(tabs, menuTab, 'tabs')
newDiv(tabs, contactUsTab, 'tabs')
newDiv(header, logoDivContainer, 'logoDivContainer' )
newDiv(logoDivContainer, grilledDiv, 'grilled')
newDiv(logoDivContainer, cheesusDiv, 'cheesus')


//CREATES BUTTONS IN HEADER
aboutUsTab.appendChild(aboutUsTabBtn);
aboutUsTabBtn.className = 'aboutUsBtn';
aboutUsTabBtn.textContent = 'About Us';

menuTab.appendChild(menuTabBtn);
menuTabBtn.className = 'navBtns';
menuTabBtn.textContent = "Menu";

contactUsTab.appendChild(contactUsTabBtn);
contactUsTabBtn.className = 'navBtns'
contactUsTabBtn.textContent = 'Contact Us'

//ADDS TEXT TO HEADER LOGO CONTAINER
grilledDiv.textContent = 'Grilled'
cheesusDiv.textContent = 'Cheesus'

//CREATES MAIN BODY
newDiv(content, div1, 'mainPage' );
newDiv(div1, blurbBox, 'logoAndBlurb');
newDiv(blurbBox, blurbHead, 'blurbHead')
newDiv(blurbBox, blurbBody, 'blurbBody')
blurbHead.textContent = 'Our Story...'
blurbBody.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'


//ADDS LOGO TO HEADER
addImage(header, logo, 'cheese.png', 'mainPageLogoImg')
}


