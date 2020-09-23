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

$('input[name="sectionToggle"]').change(function(){
	toggleSection($(this).val(),$(this).is(':checked'));
});


function toggleSection(sectionName,toggleState)
{
	if(toggleState==true)
		$('input[value="'+sectionName+'"]').attr('checked','true');
	else
		$('input[value="'+sectionName+'"]').removeAttr('checked');
	$('#'+sectionName).toggle();
}

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
	var ul = document.createElement("ul");
	ul.style.marginLeft = '0px';
	
	console.log(getSelectionContainerElement())

	if((node.className === "last-exp") || (node.className === "first-exp")){
		if(node.className === "last-exp"){
			$(".last-exp")[1].style.marginBottom = "10px"
		}
		else if(node.className === "first-exp"){
			ul.style.marginTop = "10px"
		}
		ul.innerHTML = "<li class='experience_item'><p class='semi-bold date'>Feb 2014 to Aug 2016</p><p class='semi-bold role'>Senior Frontend Developer- Microsoft</p><p class='last-exp first-exp'>Front-end lead for this Flex based 	application with a mobile aspect. Was tasked with building a large high profile Web 2.0 project.</p></li>";
	}

	else if((node.className === "last-edu") || (node.className === "first-edu")){

		if(node.className === "last-edu"){
			$(".last-edu")[0].style.marginBottom = "10px"
		}
		else if(node.className === "first-edu"){
			ul.style.marginTop = "10px"
		}

		ul.innerHTML = "<li class='education_item'><p><span class='semi-bold'>B.Eng Computer Engineering,</span> 2005 - 2010</p><p>Massachusetts University, US</p><p class='last-edu'>CGPA : 4.02 /5</p></li>"
	}

	insertAfter(node,ul);
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
