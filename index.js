function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const serviceID = "Email Service/Add New Service"; //https://emailjs.com/
    const templateID = "Email Template/Create New Template"; //https://emailjs.com/

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById('name').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert("Sent!");
        }
        )
        .cat((err) => console.log(err));

}