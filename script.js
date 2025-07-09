const submit = document.getElementById('send-btn')

function passwordValidation() {
    
    const pw = document.getElementById('pw')
    const pwconf = document.getElementById('pwconf')    

    console.log(pw.value, pwconf.value)

    if (pw.value.length < 3) {
        pw.setCustomValidity("Password must be 3 characters or more")
        return false
    }
    
    if (pw.value === pwconf.value) {
        console.log('PW OK')
        return
    } else {
        pw.setCustomValidity("The paswords don't match")
        return false
    }
}

submit.addEventListener('click', () => {
        passwordValidation()
})