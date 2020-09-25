document.querySelector('#page').contentEditable = true;

defaultTemplateVars = ["fontMonospace", "caseNormal"]

$('.toggle-option').click(function () {
    toggleType = $(this).attr('data-toggle');
    toggleValue = $(this).attr('id');
    if (!$(this).hasClass('multi-select')) {
        if (!$(this).hasClass('selected')) {
            $('.toggle-option', $(this).parent()).removeClass('selected');
            $(this).addClass('selected');
            changeTemplate(toggleType, toggleValue);
        }
    }
    else {
        if ($(this).hasClass('selected'))
            $(this).removeClass('selected');
        else
            $(this).addClass('selected');
        changeTemplate(toggleType, toggleValue);
    }
});

$('input[name="sectionToggle"]').change(function () {
    toggleSection($(this).val(), $(this).is(':checked'));
});


function toggleSection(sectionName, toggleState) {
    if (toggleState == true)
        $('input[value="' + sectionName + '"]').attr('checked', 'true');
    else
        $('input[value="' + sectionName + '"]').removeAttr('checked');
    $('#' + sectionName).toggle();
}

function changeTemplate(toggleType, toggleValue) {
    switch (toggleType) {
        case 'font':
            if (toggleValue == 'Roboto')
                $('#page').removeClass('ubuntu').removeClass('cursive').removeClass('monospace').addClass('roboto');
            else if (toggleValue == 'Cursive')
                $('#page').removeClass('roboto').removeClass('ubuntu').removeClass('monospace').addClass('cursive');
            else if (toggleValue == 'Ubuntu')
                $('#page').removeClass('roboto').removeClass('monospace').removeClass('cursive').addClass('ubuntu');
            else if (toggleValue == 'monospace')
                $('#page').removeClass('ubuntu').removeClass('cursive').removeClass('roboto').addClass('monospace');
            break;
        case 'case':
            if (toggleValue == 'caseNormal')
                $('.title').removeClass('uppercase');
            else
                $('.title').addClass('uppercase');
            break;
    }
}
function insertList() {
    node = getSelectionContainerElement();
    var ul = document.createElement("ul");
    ul.style.marginLeft = '0px';

    console.log(getSelectionContainerElement())
    let firstExp = "first_exp";
    let lastExp = "exp_role";

    if ((node.className === lastExp) || (node.className === firstExp)) {
        if (node.className === firstExp) {

            var li = document.createElement("li");
            li.classList.add('experience_item')

            li.innerHTML = "<p class='semi-bold added_exp'>2015 - 2017</p>        <p>Title: Ex. User Interfce Designer</p> <p>Company: Ex. Facebook</p><p class='exp_role'>Primary role: Ex. I Design applications for Infosys intranet & marketplace clients</p>"

            var experienceItems = document.getElementById("experience_items")
            experienceItems.insertBefore(li, experienceItems.childNodes[0])
        }
        else if (node.className === lastExp) {
            var li = document.createElement("li");
            li.classList.add('experience_item')

            li.innerHTML = "<p class='semi-bold added_exp'>2015 - 2017</p>        <p>Title: Ex. User Interfce Designer</p> <p>Company: Ex. Facebook</p><p class='exp_role'>Primary role: Ex. I Design applications for Infosys intranet & marketplace clients</p>"

            document.getElementById("experience_items").appendChild(li)
        }
        // ul.innerHTML = "<li class='experience_item'><p class='semi-bold added_exp'>2015 - 2017</p>        <p>Title: Ex. User Interfce Designer</p> <p>Company: Ex. Facebook</p><p class='exp_role'>Primary role: Ex. I Design applications for Infosys intranet & marketplace clients</p></li>";
    }

    else if ((node.className === "last_train") || (node.className === "first_train")) {

        if (node.className === "first_train") {

            var li = document.createElement("li");
            li.classList.add('training_item')

            li.innerHTML = "<span>YEAR</span><div><p class='training-title'>Training Title</p> <p>Trainig Organization</p> <p>Training Duration</p></div>"

            var trainingItems = document.getElementById("training_items")
            trainingItems.insertBefore(li, trainingItems.childNodes[0])


        }

        else if (node.className === "last_train") {
            var li = document.createElement("li");
            li.classList.add('training_item')

            li.innerHTML = "<span>YEAR</span><div><p class='training-title'>Training Title</p> <p>Trainig Organization</p> <p>Training Duration</p></div>"

            document.getElementById("training_items").appendChild(li)
        }
    }

    else if ((node.className === "last_edu") || (node.className === "first_edu")) {

        if (node.className === "first_edu") {

            var li = document.createElement("li");
            li.classList.add('education_item')

            li.innerHTML = "<div class='li_wrap'><div class='date'>2015</div><div class='info'> <p class='semi-bold info_title'>Electrical Engineering</p><p class='info_sch'>RCC Institute of Information Technology</p><p class='info_addr'>Maulana Abul Kalam Azad University of Technology</p><p class='info_grade'>DGPA - 7.84</p></div></div>"

            var trainingItems = document.getElementById("education_items")
            trainingItems.insertBefore(li, trainingItems.childNodes[0])


        }

        else if (node.className === "last_edu") {
            var li = document.createElement("li");
            li.classList.add('education_item')

            li.innerHTML = "<div class='li_wrap'><div class='date'>2015</div><div class='info'> <p class='semi-bold info_title'>Electrical Engineering</p><p class='info_sch'>RCC Institute of Information Technology</p><p class='info_addr'>Maulana Abul Kalam Azad University of Technology</p><p class='info_grade'>DGPA - 7.84</p></div></div>"

            document.getElementById("education_items").appendChild(li)
        }
    }

    else if ((node.className === "last_skill") || (node.className === "first_skill")) {

        if (node.className === "first_skill") {

            var li = document.createElement("li");
            li.classList.add('skill_item')

            li.innerHTML = "<p>HTML, CSS, JS, SASS</p><span class='rating'><img src='assets/images/Vector.svg' alt=''>            <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>            </span>"

            var skillItems = document.getElementById("skill_items")
            skillItems.insertBefore(li, skillItems.childNodes[0])


        }

        else if (node.className === "last_skill") {
            var li = document.createElement("li");
            li.classList.add('skill_item')

            li.innerHTML = "<p>HTML, CSS, JS, SASS</p><span class='rating'><img src='assets/images/Vector.svg' alt=''>            <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>            </span>"

            document.getElementById("skill_items").appendChild(li)
        }
    }

    insertAfter(node, ul);
}

function changeListStyle(value) {
    node = getSelectionContainerElement();
    while (node.tagName != 'UL')
        node = node.parentNode;
    node.className = value;

}

function getSelectionContainerElement() {
    var range, sel, container;
    if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        return range.parentElement();
    }
    else if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt) {
            if (sel.rangeCount > 0)
                range = sel.getRangeAt(0);
        }
        else {
            // Old WebKit selection object has no getRangeAt, so
            // create a range from other selection properties
            range = document.createRange();
            range.setStart(sel.anchorNode, sel.anchorOffset);
            range.setEnd(sel.focusNode, sel.focusOffset);
            // Handle the case when the selection was selected backwards (from the end to the start in the document)
            if (range.collapsed !== sel.isCollapsed) {
                range.setStart(sel.focusNode, sel.focusOffset);
                range.setEnd(sel.anchorNode, sel.anchorOffset);
            }
        }
        if (range) {
            container = range.commonAncestorContainer;
            // Check if the container is a text node and return its parent if so
            return container.nodeType === 3 ? container.parentNode : container;
        }
    }
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}



// Navbar

function toggleClass(elem,className){
    if (elem.className.indexOf(className) !== -1){
      elem.className = elem.className.replace(className,'');
    }
    else{
      elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
    }
  
    return elem;
  }
  
  function toggleDisplay(elem){
    const curDisplayStyle = elem.style.display;			
  
    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
      elem.style.display = 'block';
    }
    else{
      elem.style.display = 'none';
    }
  
  }
  
  function toggleMenuDisplay(e){
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');
  
    toggleClass(menu,'hide');
    toggleClass(icon,'rotate-90');
  }
  
  function handleOptionSelected(e){
    toggleClass(e.target.parentNode, 'hide');			
  
    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdown .title');
    const icon = document.querySelector('.dropdown .title .fa');
  
  
    titleElem.textContent = newValue;
    titleElem.appendChild(icon);
  
    //trigger custom event
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
      //setTimeout is used so transition is properly shown
    setTimeout(() => toggleClass(icon,'rotate-90',0));
  }
  
  function handleTitleChange(e){
    const result = document.getElementById('result');
  
    result.innerHTML = 'The result is: ' + e.target.textContent;
  }
  
  //get elements
  const dropdownTitle = document.querySelector('.dropdown .title');
  const dropdownOptions = document.querySelectorAll('.dropdown .option');
  
  //bind listeners to these elements
  dropdownTitle.addEventListener('click', toggleMenuDisplay);
  
  dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
  
  document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);