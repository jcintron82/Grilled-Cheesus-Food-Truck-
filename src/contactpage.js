//VARIABLES FOR NAV BUTTONS
let content = document.getElementById('content');
const div1 = document.createElement('div')
const header = document.createElement('header')
const blurbBox = document.createElement('div')

//VARIABLES FOR LOGO IN HEADER
const logoDivContainer = document.createElement('div')
const logo = document.createElement('img');

//VARIABLES FOR NAV BUTTONS
const tabs = document.createElement('ul');
export const aboutUsTab = document.createElement('li')
export const aboutUsTabBtnContact =document.createElement('button')
export const menuTab = document.createElement('li')
export const menuTabBtnContact =document.createElement('button')
export const contactUsTab = document.createElement('li')
export const contactUsTabBtnContact =document.createElement('button')

//RENDERS THE CONTACT US PAGE
export function createContactUsPage() {
  //creates new div elements
 function newDiv(parent, newdiv, style, ){
    parent.appendChild(newdiv);
    newdiv.className = style;
  
}
//function to add images
 function addImage(parent, child, src, style) {
    child.src = src;
    parent.appendChild(child)
    logo.className = style

}

//CREATES THE HEADER
newDiv(content, header, 'header');
newDiv(header, tabs, 'tabsContainer')
newDiv(tabs, aboutUsTab, 'tabs')
newDiv(tabs, menuTab, 'tabs')
newDiv(tabs, contactUsTab, 'tabs')
newDiv(header, logoDivContainer, 'logoDivContainer' )

//CREATES BUTTONS IN HEADER
aboutUsTab.appendChild(aboutUsTabBtnContact);
aboutUsTabBtnContact.className = 'aboutUsBtn';
aboutUsTabBtnContact.textContent = 'About Us';

menuTab.appendChild(menuTabBtnContact);
menuTabBtnContact.className = 'aboutUsBtn';
menuTabBtnContact.textContent = "Menu";

contactUsTab.appendChild(contactUsTabBtnContact);
contactUsTabBtnContact.className = 'aboutUsBtn'
contactUsTabBtnContact.textContent = 'Contact Us'

//ADDS TEXT TO HEADER LOGO CONTAINER
logoDivContainer.textContent = 'Grilled Cheesus'

//ADDS LOGO TO HEADER
addImage(logoDivContainer, logo, 'cheese.png', 'mainPageLogoImg')


//CREATES MAIN BODY
newDiv(content, div1, 'ContactUsMainPage' );
newDiv(div1, blurbBox, 'contactUsInfoContainer');
}

