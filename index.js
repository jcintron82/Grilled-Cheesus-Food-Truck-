let content = document.getElementById('content');
const div = document.createElement('div')
const header = document.createElement('header')

function newDiv(parent, newdiv, style, ){
	parent.appendChild(newdiv);
	newdiv.className = style;
	
}


newDiv(content, header, '.header');
