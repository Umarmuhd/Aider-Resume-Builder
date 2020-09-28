document.querySelector('#page').contentEditable = true;

defaultTemplateVars = [ "fontMonospace" , "caseNormal"]

$('.toggle-option').click(function(){
	toggleType = $(this).attr('data-toggle');
	toggleValue = $(this).attr('id');
	if(!$(this).hasClass('multi-select'))
	{
		if(!$(this).hasClass('selected'))
		{
			$('.toggle-option',$(this).parent()).removeClass('selected');
			$(this).addClass('selected');
			changeTemplate(toggleType,toggleValue);
		}
	}
	else
	{
		if($(this).hasClass('selected'))
			$(this).removeClass('selected');
		else
			$(this).addClass('selected');
		changeTemplate(toggleType,toggleValue);
	}
});

// $('input[name="sectionToggle"]').change(function(){
// 	toggleSection($(this).val(),$(this).is(':checked'));
// });


// function toggleSection(sectionName,toggleState)
// {
// 	if(toggleState==true)
// 		$('input[value="'+sectionName+'"]').attr('checked','true');
// 	else
// 		$('input[value="'+sectionName+'"]').removeAttr('checked');
// 	$('#'+sectionName).toggle();
// }

function changeTemplate(toggleType,toggleValue)
{
	switch(toggleType)
	{
		case 'font':
			if(toggleValue=='montserrat')
				$('#page').removeClass('poppins').removeClass('openSans').removeClass('monospace').addClass('montserrat');
			else if(toggleValue=='poppins')
				$('#page').removeClass('montserrat').removeClass('openSans').removeClass('monospace').addClass('poppins');
			else if(toggleValue=='openSans')
				$('#page').removeClass('montserrat').removeClass('monospace').removeClass('poppins').addClass('openSans');
			else if(toggleValue=='monospace')
				$('#page').removeClass('montserrat').removeClass('poppins').removeClass('openSans').addClass('monospace');
			break;
			case 'case':
			if(toggleValue == 'caseNormal')
				$('.title').removeClass('uppercase');
			else
				$('.title').addClass('uppercase');
			break;
	}
}
function insertList()
{	
	node = getSelectionContainerElement();

	if((node.className === "last-exp") || (node.className === "first-exp")){

		let li = document.createElement("li");
		li.classList.add('experience_item')
		li.innerHTML = "<p class='semi-bold date'>Mnt YEAR to Mnt YEAR</p><p class='semi-bold role'>Role - Company</p><p class='last-exp'>Job Role Description example: sit deserunt numquam esse earum nemo accusantium quis molestias obcaecati eaque laboriosam incidunt!</p>"

		let experienceItems = document.getElementById("experience_items")

		if (node.className === "first-exp"){			
		experienceItems.insertBefore(li, experienceItems.childNodes[0])
		}
		else if (node.className === "last-exp"){
			let currentNode = getSelectionContainerElement();
            let currentLi = currentNode.parentNode
            currentLi.parentNode.insertBefore(li, currentLi.nextSibling);
		}
				
	}

	else if((node.className === "last-edu") || (node.className === "first-edu")){

		let li = document.createElement("li");
		li.classList.add('education_item');
		li.innerHTML = "<p><span class='semi-bold'>B.Eng Computer Engineering,</span> 2005 - 2010</p><p>Massachusetts University, US</p><p class='last-edu'>CGPA : 4.02 /5</p>"

		let educationItems = document.getElementById("education_items")

		if(node.className === "first-edu"){			
			educationItems.insertBefore(li, educationItems.childNodes[0])
		}
		else if(node.className === "last-edu"){
			let currentNode = getSelectionContainerElement();
            let currentLi = currentNode.parentNode
            currentLi.parentNode.insertBefore(li, currentLi.nextSibling);
		}

	}

}

function changeListStyle(value)
{
	node = getSelectionContainerElement();
	while(node.tagName!='UL')
		node = node.parentNode;
	node.className = value;

}

function getSelectionContainerElement()
{
	var range, sel, container;
	if (document.selection && document.selection.createRange)
	{
		range = document.selection.createRange();
		return range.parentElement();
	}
	else if (window.getSelection)
	{
		sel = window.getSelection();
		if (sel.getRangeAt)
		{
			if (sel.rangeCount > 0)
				range = sel.getRangeAt(0);
		}
		else
		{
			// Old WebKit selection object has no getRangeAt, so
			// create a range from other selection properties
			range = document.createRange();
			range.setStart(sel.anchorNode, sel.anchorOffset);
			range.setEnd(sel.focusNode, sel.focusOffset);
			// Handle the case when the selection was selected backwards (from the end to the start in the document)
			if (range.collapsed !== sel.isCollapsed)
			{
				range.setStart(sel.focusNode, sel.focusOffset);
				range.setEnd(sel.anchorNode, sel.anchorOffset);
			}
		}
		if (range)
		{
			container = range.commonAncestorContainer;
			// Check if the container is a text node and return its parent if so
			return container.nodeType === 3 ? container.parentNode : container;
		}
	}
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


function printDiv(){
	var divContent = document.getElementById("toPrint").innerHTML
	var a = window.open('', '', 'height = auto, width = 595');
	a.document.write('<html>')
	a.document.write('<body>')
	a.document.write(divContent)
	a.document.write('</body></html>')
	a.document.close()
	a.print()
}
