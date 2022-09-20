
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

function clearDom(parent,child) {
  content.innerHTML = '';
}

export function createContactUsPage() {

  function clearDom(parent,child) {
  content.innerHTML = '';
}
  clearDom()

 function newDiv(parent, newdiv, style, ){
    parent.appendChild(newdiv);
    newdiv.className = style;
  
}
//function to add text to newly created divs
 function addText(parent,text) {
    let newText = document.createTextNode(text);
    parent.appendChild(newText)
}

//function to add images
 function addImage(parent, child, src, style) {
    child.src = src;
    parent.appendChild(child)
    logo.className = style

}


newDiv(content, header, 'header');
newDiv(header, tabs, 'tabsContainer')
newDiv(tabs, aboutUsTab, 'tabs')
newDiv(tabs, menuTab, 'tabs')
newDiv(tabs, contactUsTab, 'tabs')
newDiv(header, logoDivContainer, 'logoDivContainer' )

//creates buttons in header

aboutUsTab.appendChild(aboutUsTabBtn)
aboutUsTabBtn.className = 'aboutUsBtn'

menuTab.appendChild(menuTabBtn)
menuTabBtn.className = 'aboutUsBtn'

contactUsTab.appendChild(contactUsTabBtn);
contactUsTabBtn.className = 'aboutUsBtn'

//adds text to header elements
addText(aboutUsTabBtn, 'About Us');
addText(menuTabBtn, 'Menu');
addText(contactUsTabBtn, 'Contact Us');
addText(logoDivContainer, 'Grilled Cheesus')

//adds logo to header
addImage(logoDivContainer, logo, 'cheese.png', 'mainPageLogoImg')


//creates main body 
newDiv(content, div1, 'ContactUsMainPage' );
newDiv(div1, blurbBox, 'contactUsInfoContainer');
}

