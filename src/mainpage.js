
//Variables for basic page layout 
let content = document.getElementById('content');
const div1 = document.createElement('div')
const header = document.createElement('header')
const blurbBox = document.createElement('div')

//Variables for the logo in the header
const logoDivContainer = document.createElement('div')
const logo = document.createElement('img');

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


//CREATES BUTTONS IN HEADER
aboutUsTab.appendChild(aboutUsTabBtn);
aboutUsTabBtn.className = 'aboutUsBtn';
aboutUsTabBtn.textContent = 'About Us';

menuTab.appendChild(menuTabBtn);
menuTabBtn.className = 'aboutUsBtn';
menuTabBtn.textContent = "Menu";

contactUsTab.appendChild(contactUsTabBtn);
contactUsTabBtn.className = 'aboutUsBtn'
contactUsTabBtn.textContent = 'Contact Us'

//ADDS TEXT TO HEADER LOGO CONTAINER
logoDivContainer.textContent = 'Grilled Cheesus'

//CREATES MAIN BODY
newDiv(content, div1, 'mainPage' );
newDiv(div1, blurbBox, 'logoAndBlurb');


//ADDS LOGO TO HEADER
addImage(logoDivContainer, logo, 'cheese.png', 'mainPageLogoImg')
}




