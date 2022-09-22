//VARIABLES FOR NAV BUTTONS
let content = document.getElementById('content');
const div1 = document.createElement('div')
const header = document.createElement('header')
const mainContainer = document.createElement('div')

//VARIABLES FOR LOGO IN HEADER
const logoDivContainer = document.createElement('div')
const gMaps = document.createElement('img');
const grilledDiv = document.createElement('div')
const cheesusDiv = document.createElement('div')

//VARIABLES FOR NAV BUTTONS
const tabs = document.createElement('ul');
export const aboutUsTab = document.createElement('li')
export const aboutUsTabBtnContact =document.createElement('button')
export const menuTab = document.createElement('li')
export const menuTabBtnContact =document.createElement('button')
export const contactUsTab = document.createElement('li')
export const contactUsTabBtnContact =document.createElement('button')

//VARIABLES FOR THE MAIN BODY
const phoneNbrDivContainer = document.createElement('div')
const addressDivContainer = document.createElement('div')
const googleMapsContainer = document.createElement('div')





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
    child.className = style

}

addImage(googleMapsContainer, gMaps, './gMaps.jpg', 'gMapsImg')
//CREATES THE HEADER
content.className = 'content'
newDiv(content, header, 'header');
newDiv(header, tabs, 'tabsContainer')
newDiv(tabs, aboutUsTab, 'tabs')
newDiv(tabs, menuTab, 'tabs')
newDiv(tabs, contactUsTab, 'tabs')
newDiv(header, logoDivContainer, 'logoDivContainer' )
newDiv(logoDivContainer, grilledDiv, 'grilled')
newDiv(logoDivContainer, cheesusDiv, 'cheesus')

//CREATES BUTTONS IN HEADER
aboutUsTab.appendChild(aboutUsTabBtnContact);
aboutUsTabBtnContact.className = 'navBtns';
aboutUsTabBtnContact.textContent = 'About Us';

menuTab.appendChild(menuTabBtnContact);
menuTabBtnContact.className = 'navBtns';
menuTabBtnContact.textContent = "Menu";

contactUsTab.appendChild(contactUsTabBtnContact);
contactUsTabBtnContact.className = 'contactUsBtn'
contactUsTabBtnContact.textContent = 'Contact Us'

//ADDS TEXT TO HEADER LOGO CONTAINER
grilledDiv.textContent = 'Grilled'
cheesusDiv.textContent = 'Cheesus'

//ADDS LOGO TO HEADER



//CREATES MAIN BODY
newDiv(content, div1, 'ContactUsMainPage' );
newDiv(div1, mainContainer, 'contactUsInfoContainer');
newDiv(mainContainer, phoneNbrDivContainer, 'phoneNbrDivContainer')
newDiv(mainContainer, addressDivContainer, 'addressDivContainer')
newDiv(mainContainer, googleMapsContainer, 'googleMapsContainer')


//ADDS TEXT AND CONTENT TO MAIN BODY CONTAINERS
phoneNbrDivContainer.textContent = 'Please call to make an order: 123-456-7890'
addressDivContainer.textContent = '123 Seasame St, Seattle, USA'


}

