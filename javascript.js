document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const data = { name: name, email: email, message: message };

        fetch('https://script.google.com/macros/s/AKfycbycotQgE15BQ1z2tcGe1xA3oRC7gubonHRlo5-VzhkR9XgrAbK2p32btolgIOd3pC2Z/exec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.result === 'success') {
                    alert('Message sent successfully!');
                } else if (result.result === 'duplicate') {
                    alert('This message has already been sent. Please try again.');
                } else {
                    alert('An error occurred: ' + result.message);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again.');
            });

        form.reset();
    });
});
