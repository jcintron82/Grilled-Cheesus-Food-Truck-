
//Variables for basic page layout 
let content = document.getElementById('content');
const div1 = document.createElement('div')
const header = document.createElement('header')
const blurbBox = document.createElement('div')
const blurbHead = document.createElement('div')
const blurbBody = document.createElement('div')
const ourStoryBox = document.createElement('div')
const ourStoryBoxSignature = document.createElement('div')

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
aboutUsTabBtn.className = 'navBtns';
aboutUsTabBtn.textContent = 'About Us';

menuTab.appendChild(menuTabBtn);
menuTabBtn.className = 'navBtns';
menuTabBtn.textContent = "Menu";

contactUsTab.appendChild(contactUsTabBtn);
contactUsTabBtn.className = 'contactUsBtn'
contactUsTabBtn.textContent = 'Contact Us'

//ADDS TEXT TO HEADER LOGO CONTAINER
grilledDiv.textContent = 'Grilled'
cheesusDiv.textContent = 'Cheesus'

//CREATES MAIN BODY
newDiv(content, div1, 'mainPage' );
newDiv(div1, blurbBox, 'logoAndBlurb');
newDiv(blurbBox, blurbHead, 'blurbHead')
newDiv(blurbBox, blurbBody, 'blurbBody')
newDiv(blurbBody, ourStoryBox, 'ourStoryBox')
newDiv(blurbBody, ourStoryBoxSignature, 'ourStoryBoxSignature')



blurbHead.textContent = 'From humble beginnings...'
ourStoryBox.textContent = 'Despite our catchy name and modern sandwich twists, Grilled Cheesus actually comes from very humble beginnings. With roots steeped in all things that make a grilled cheese made by Grandma just *that* much better, the idea was created as a way to bring homestyle comfort food and the modern adventurous spirit together in unison; into one cheesy, holy mess.'
ourStoryBoxSignature.textContent = '- Bill Lemons, CEO Grilled Cheesus'




}