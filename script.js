const form = document.querySelector("form");
const fullName = document.getElementById("name");
const fullEmail = document.getElementById("email");
const fullNumber = document.getElementById("number");
const fullSubject = document.getElementById("subject");
const fullMessage = document.getElementById("message");
function sendEmail(){
    const bodymessage= `Full Name: ${fullName.value}<br> 
    Email: ${fullEmail.value}<br> 
    Phone Number: ${fullNumber.value}<br> 
    Subject: ${fullSubject.value}<br> 
    Message: ${fullMessage.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ganesh04dev@gmail.com",
        Password : "BE2624914CAD78C388FC3C4D3FFA36E13C84",
        To : 'ganesh04dev@gmail.com',
        From : "ganesh04dev@gmail.com",
        Subject : fullSubject.value,
        Body : bodymessage
    }).then(
        message => {
            if (message=="OK"){
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}
form.addEventListener("submit",e=>{
    e.preventDefault();

    sendEmail();
});