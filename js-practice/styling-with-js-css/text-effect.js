
const textPreview =  document.getElementById("text-preview");
const customTextInput = document.getElementById("custom-text")
const classList = document.getElementById("class-list")

function reflectChangesIntoPreview(){
    setTextPreview(customTextInput.value)

}

function resetAll(){
    customTextInput.value = "This is sample text"
    setTextPreview(customTextInput.value)

    const activeButtons = document.querySelectorAll(".effect-button.active")
    for(let button of activeButtons){
        button.classList.remove('active')
    }
    textPreview.classList = ['text-preview']
    classList.textContent = "No classes applied"
}


function setTextPreview(text){
    textPreview.textContent = text
}


document.getElementById("button-list").addEventListener('click', function (e) {
    if(e.target.tagName === "BUTTON"){
        const button = e.target
        const className = button.getAttribute('data-class')
        const buttonId = button.id
        toggleEffect(buttonId, className)
    }
})

function toggleEffect(id, className){
    if(textPreview.classList.contains(className)){
        textPreview.classList.remove(className)
        document.getElementById(id).classList.remove('active')

    } else {

        textPreview.classList.add(className)
        document.getElementById(id).classList.add('active')
    }

    if(textPreview.classList.length === 1){
        classList.textContent = "No classes applied"
    } else{
        classList.textContent = Array.from(textPreview.classList).splice(1)
    }
    
    
}
