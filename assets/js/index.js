let aboutbutton = document.getElementById("aboutbutton")
let skillbutton = document.getElementById('skillbutton')
let projectbutton = document.getElementById('projectbutton')
let contactbutton = document.getElementById('contactbutton')

let aboutsection = document.getElementById('about')
let skillsection = document.getElementById('skill')
let projectsection = document.getElementById('project')
let contactsection = document.getElementById('contact')

aboutbutton.addEventListener('click', displayabout)
skillbutton.addEventListener('click', displayskill)
projectbutton.addEventListener('click', displayproject)
contactbutton.addEventListener('click', displaycontact)

function displayabout() {
    if (skillsection.style.width != '0' || projectsection.style.width != '0' || contactsection.style.width != '0') {
        skillsection.style.padding = '0'
        projectsection.style.padding = '0'
        contactsection.style.padding = '0'
        skillsection.style.width = '0'
        projectsection.style.width = '0'
        contactsection.style.width = '0'
    }
    if (aboutsection.style.width == '40vw') {
        aboutsection.style.width = '0'
        aboutsection.style.padding = '0'
    } else {
        aboutsection.style.width = '40vw'
        aboutsection.style.padding = '30px'
    }
}

function displayskill() {
    if (aboutsection.style.width != '0' || projectsection.style.width != '0' || contactsection.style.width != '0') {
        aboutsection.style.padding = '0'
        projectsection.style.padding = '0'
        contactsection.style.padding = '0'
        aboutsection.style.width = '0'
        projectsection.style.width = '0'
        contactsection.style.width = '0'
    }
    if (skillsection.style.width == '40vw') {
        skillsection.style.width = '0'
        skillsection.style.padding = '0'
    } else {
        skillsection.style.width = '40vw'
        skillsection.style.padding = '30px'
    }
}

function displayproject() {
    if (aboutsection.style.width != '0' || skillsection.style.width != '0' || contactsection.style.width != '0') {
        aboutsection.style.width = '0'
        skillsection.style.width = '0'
        contactsection.style.width = '0'
        aboutsection.style.padding = '0'
        skillsection.style.padding = '0'
        contactsection.style.padding = '0'
    }
    if (projectsection.style.width == '40vw') {
        projectsection.style.width = '0'
        projectsection.style.padding = '0'
    } else {
        projectsection.style.width = '40vw'
        projectsection.style.padding = '30px'
    }
}

function displaycontact() {
    if (aboutsection.style.width != '0' || projectsection.style.width != '0' || skillsection.style.width != '0') {
        aboutsection.style.width = '0'
        projectsection.style.width = '0'
        skillsection.style.width = '0'
        aboutsection.style.padding = '0'
        projectsection.style.padding = '0'
        skillsection.style.padding = '0'
    }
    if (contactsection.style.width == '40vw') {
        contactsection.style.width = '0'
        contactsection.style.padding = '0'
    } else {
        contactsection.style.width = '40vw'
        contactsection.style.padding = '30px'
    }
}