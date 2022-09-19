export {content, div1, header,blurbBox, tabs}

//Variables for basic page layout 
let content = document.getElementById('content');
const div1 = document.createElement('div')
const header = document.createElement('header')
const blurbBox = document.createElement('div')

//Variables for the logo in the header
export const logoDivContainer = document.createElement('div')
export const logo = document.createElement('img');



//for the nav buttons
const tabs = document.createElement('ul');
export const aboutUsTab = document.createElement('li')
export const aboutUsTabBtn =document.createElement('button')



export const menuTab = document.createElement('li')
export const menuTabBtn =document.createElement('button')

export const contactUsTab = document.createElement('li')
export const contactUsTabBtn =document.createElement('button')

//creates new divs
export function newDiv(parent, newdiv, style, ){
	let content = document.getElementById('content');
		const div1 = document.createElement('div')
		const header = document.createElement('header')
		const blurbBox = document.createElement('div')
					parent.appendChild(newdiv);
					newdiv.className = style;
	
}
//function to add text to newly created divs
export function addText(parent,text) {
	let newText = document.createTextNode(text);
	parent.appendChild(newText)
}

//function
export function addImage(parent, child, src, style) {
	child.src = src;
	parent.appendChild(child)
	logo.className = style

}

export function createMainPage() {
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
}


