//FUNCTION TO CLEAR THE DOM WHEN AN EVENT LISTENER IN THE INDEX FILE IS CALLED
export  function clearDom() {
  content.innerHTML = '';
}

//VARIABLES FOR BASIC PAGE LAYOUT
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
export const aboutUsTabBtnMenu=document.createElement('button')
export const menuTab = document.createElement('li')
export const menuTabBtn =document.createElement('button')
export const contactUsTab = document.createElement('li')
export const contactUsTabBtnMenu =document.createElement('button')

//RENDERS THE MENU PAGE
export function createMenuPage() {

  //creates new div elements
 function newDiv(parent, newdiv, style, ){
    parent.appendChild(newdiv);
    newdiv.className = style;
  
}

//adds images to element(s)
 function addImage(parent, child, src, style) {
    child.src = src;
    parent.appendChild(child)
    logo.className = style

}

//CREATES THE HEADER
newDiv(content, header, 'header2');
newDiv(header, tabs, 'tabsContainer')
newDiv(tabs, aboutUsTab, 'tabs')
newDiv(tabs, menuTab, 'tabs')
newDiv(tabs, contactUsTab, 'tabs')
newDiv(header, logoDivContainer, 'logoDivContainer' )


//CREATES BUTTONS IN HEADER
aboutUsTab.appendChild(aboutUsTabBtnMenu);
aboutUsTabBtnMenu.className = 'aboutUsBtn';
aboutUsTabBtnMenu.textContent = 'About Us';

menuTab.appendChild(menuTabBtn);
menuTabBtn.className = 'aboutUsBtn';
menuTabBtn.textContent = "Menu";

contactUsTab.appendChild(contactUsTabBtnMenu);
contactUsTabBtnMenu.className = 'aboutUsBtn'
contactUsTabBtnMenu.textContent = 'Contact Us'

//ADDS TEXT TO HEADER LOGO CONTAINER
logoDivContainer.textContent = 'Grilled Cheesus'

//ADDS LOGO TO HEADER LOGO CONTAINER
addImage(logoDivContainer, logo, 'cheese.png', 'mainPageLogoImg')


//CREATES MAIN BODY
newDiv(content, div1, 'menuMainPage' );
newDiv(div1, blurbBox, 'menuBodyContainer');
}

