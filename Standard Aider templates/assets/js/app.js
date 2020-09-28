document.querySelector('#page').contentEditable = true;

defaultTemplateVars = ["Cursive", "caseNormal"]

$('.toggle-option').click(function () {
    toggleType = $(this).attr('data-toggle');
    toggleValue = $(this).attr('id');
    if (!$(this).hasClass('multi-select')) {
        if (!$(this).hasClass('selected')) {
            $('.toggle-option', $(this).parent()).removeClass('selected');
            $(this).addClass('selected');
            changeTemplate(toggleType, toggleValue);
        }
    } else {
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
            else if (toggleValue == 'Monospace')
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


    if ((node.className === "exp_role") || (node.className === "first_exp")) {
        let li = document.createElement("li");
        li.classList.add('experience_item')
        li.innerHTML = "<p class='semi-bold added_exp'>2015 - 2017</p>        <p>Title: Ex. User Interfce Designer</p> <p>Company: Ex. Facebook</p><p class='exp_role'>Primary role: Ex. I Design applications for Infosys intranet & marketplace clients</p>"

        let experienceItems = document.getElementById("experience_items")

        if (node.className === "first_exp") {
            experienceItems.insertBefore(li, experienceItems.childNodes[0])
        } else if (node.className === "exp_role") {
            let currentNode = getSelectionContainerElement();
            let currentLi = currentNode.parentNode
            currentLi.parentNode.insertBefore(li, currentLi.nextSibling);
        }

    } else if ((node.className === "last_train") || (node.className === "first_train")) {

        let li = document.createElement("li");
        li.classList.add('training_item')
        li.innerHTML = "<span>YEAR</span><div><p class='training-title'>Training Title</p> <p>Trainig Organization</p> <p class='last_train'>Training Duration</p></div>"

        let trainingItems = document.getElementById("training_items")

        if (node.className === "first_train") {
            trainingItems.insertBefore(li, trainingItems.childNodes[0])
        } else if (node.className === "last_train") {
            let currentNode = getSelectionContainerElement();
            let currentLi = currentNode.parentNode.parentNode
            currentLi.parentNode.insertBefore(li, currentLi.nextSibling);
        }
    } else if ((node.className === "info_grade") || (node.className === "first_edu")) {
        let li = document.createElement("li");
        li.classList.add('education_item')

        li.innerHTML = "<div class='li_wrap'><div class='date'>2015</div><div class='info'> <p class='semi-bold info_title'>Electrical Engineering</p><p class='info_sch'>RCC Institute of Information Technology</p><p class='info_addr'>Maulana Abul Kalam Azad University of Technology</p><p class='info_grade'>DGPA - 7.84</p></div></div>"

        let educationItems = document.getElementById("education_items")

        if (node.className === "first_edu") {
            educationItems.insertBefore(li, educationItems.childNodes[0])
        } else if (node.className === "info_grade") {
            let currentNode = getSelectionContainerElement();
            let currentLi = currentNode.parentNode.parentNode.parentNode
            currentLi.parentNode.insertBefore(li, currentLi.nextSibling);
        }
    } else if ((node.className === "last_skill") || (node.className === "first_skill")) {

        if (node.className === "first_skill") {

            var li = document.createElement("li");
            li.classList.add('skill_item')

            li.innerHTML = "<p>HTML, CSS, JS, SASS</p><span class='rating'><img src='assets/images/Vector.svg' alt=''>            <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>            </span>"

            var skillItems = document.getElementById("skill_items")
            skillItems.insertBefore(li, skillItems.childNodes[0])


        } else if (node.className === "last_skill") {
            var li = document.createElement("li");
            li.classList.add('skill_item')

            li.innerHTML = "<p>HTML, CSS, JS, SASS</p><span class='rating'><img src='assets/images/Vector.svg' alt=''>            <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>                <img src='assets/images/Vector.svg' alt=''>            </span>"

            document.getElementById("skill_items").appendChild(li)
        }
    }

}


function getSelectionContainerElement() {
    var range, sel, container;
    if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        return range.parentElement();
    } else if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt) {
            if (sel.rangeCount > 0)
                range = sel.getRangeAt(0);
        } else {
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