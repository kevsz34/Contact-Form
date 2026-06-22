//All inputs and others
const messageSent = document.querySelector(".messageSent");

const form = document.querySelector("form");

const inpList = document.querySelectorAll("input");

const inpFN = document.getElementById("inpFN");
const inpSN = document.getElementById("inpSN");
const inpEmail = document.getElementById("inpEmail");
const generalE = document.getElementById("generalE");
const supportR = document.getElementById("supportR");
const messageA = document.getElementById("messageA");
const consentBox = document.getElementById("consentBox");

//All error "p"
const pErrorL = document.querySelectorAll("p");

const fnError = document.getElementById("fnError");
const snError = document.getElementById("snError");
const emError = document.getElementById("emError");
const radError = document.getElementById("radError");
const meError = document.getElementById("meError");
const boxError = document.getElementById("boxError");



function isEmpty(value){
    return value == ""
}

 function isValid(value){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/   
        return regex.test(value)
    }



const submitB = document.querySelector("button");


submitB.addEventListener("click", submit);

function submit(){


    let valid = true

    messageSent.classList.remove("displayF")
    inpList.forEach(inp =>{
        inp.classList.remove("inpError")
    })
    pErrorL.forEach(p => {
    p.classList.remove("pError");
    p.textContent = ""
});

    if(isEmpty(inpFN.value)){
        fnError.classList.add("pError")
        inpFN.classList.add("inpError")
        fnError.textContent = "This field is required"
        valid = false
    }

        if(isEmpty(inpSN.value)){
        snError.classList.add("pError")
        inpSN.classList.add("inpError")
        snError.textContent = "This field is required"
        valid = false
    }

        if(isEmpty(inpEmail.value)){
        emError.classList.add("pError")
        inpEmail.classList.add("inpError")
        emError.textContent = "This field is required"
        valid = false
    }else if(!isValid(inpEmail.value)){
        emError.classList.add("pError")
        emError.textContent = "Please enter a valid email address"
        valid = false
    }

        if(!(generalE.checked || supportR.checked)){
        radError.classList.add("pError")
        radError.textContent = "Please select a query type"
        valid = false
    }

        if(isEmpty(messageA.value)){
        meError.classList.add("pError")
        messageA.classList.add("inpError")
        meError.textContent = "This field is required"
        valid = false
    }
    
        if(!consentBox.checked){
        boxError.classList.add("pError")
        boxError.textContent = "To submit this form, please consent to being contacted"
        valid = false
        }

        if(valid === true){
            messageSent.classList.add("displayF")
        }
}