
   document.getElementById('contact-btn').addEventListener('click', function() {
    var phoneNumber = document.getElementById('phone-number');
    if (phoneNumber.style.display === 'none') {
        phoneNumber.style.display = 'block'; // Show the phone number
    } else {
        phoneNumber.style.display = 'none'; // Hide the phone number
    }
});