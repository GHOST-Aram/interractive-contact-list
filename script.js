
//Clear form
function clearForm(form){
    const inputList = document.querySelectorAll(`form input[type=text]`)
    const gender = document.querySelector('form select')

    inputList.forEach(input =>{
        input.value=''
    })
    gender.value=''
}
//Abort creating contact
function closeContactForm(form){
    form.style.display = 'none'
}

//Creat Contact
function createContact(){
    const contactInfo = document.querySelectorAll(`form input[type=text]`)
    const gender = document.querySelector('form select')
    const contactObj = {
        name:contactInfo[0].value,
        phone1:contactInfo[1].value,
        phone2:contactInfo[2].value,
        email:contactInfo[3].value,
        company:contactInfo[4].value,
        techStack:contactInfo[5].value,
        twitter:contactInfo[6].value,
        gender:gender.value,

    }
    return contactObj
}

//Create contact name node
function createNameNode(contactObj){
    const nameNode = document.createElement('p') 
    nameNode.classList.add('contact-name')
    nameNode.textContent = contactObj.name
    return nameNode
}
//Filter list when user types in searchbox
function filterContacts(input){
    const contacts = document.querySelectorAll('.contacts-list p')
    const alphabet = document.querySelectorAll('.contacts-list h4') 

    const regex = new RegExp(input,'ig')

    alphabet.forEach(h4=>{
        h4.style.display = 'none'
    })
    
    contacts.forEach(contact => {
        if(regex.test(contact.textContent)){
            contact.parentElement.previousElementSibling.style.display = 'block'
            contact.style.display = 'block'
            contact.style.color = 'maroon'
            
        }
        else{
            contact.style.color = 'grey'
            contact.style.display = 'none'
        }
        
        if(input.trim()==='')
        contact.style.color = 'grey'

    });
}
//open Contact

function openContactForm(form){
    clearForm(form)
    form.style.display = 'block'
}

//RENDER CONTACT NAME
function render(object){
    const contactList = document.querySelector('#contact-list')
    const contactGroup = document.createElement('div')
    contactGroup.classList.add('contact-group')
    const nameNode = createNameNode(object)
    contactGroup.appendChild(nameNode)
    contactList.appendChild(contactGroup)

    
}
//Save con====tact
function saveContact(list, contactObj){
    list.push(contactObj)
}


//filter input
const searchBox = document.querySelector('input')

searchBox.addEventListener('input', ()=>{
    filterContacts(searchBox.value)
})
//Get contact form
const contactForm = document.querySelector('#contact-form')
//Add contact
const addBtn = document.querySelector('#add-contact-btn')

addBtn.addEventListener('click', ()=>{
    openContactForm(contactForm)
})

//Abort create contact
const closebtn = document.querySelector('#close-btn')

closebtn.addEventListener('click',()=>{
    closeContactForm(contactForm)
})

//saveContact
const savebtn = document.querySelector('#save-btn')
const contactList = []
savebtn.addEventListener('click',(event)=>{
    event.preventDefault()
    const contactObj = createContact()
    saveContact(contactList, contactObj)
    closeContactForm(contactForm)
    render(contactObj)
} )

