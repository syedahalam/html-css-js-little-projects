const sendEmail = () => {
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'syedaalamtesting@gmail.com',
		Password: 'xpskcvdsaimedpij',
		To: 'syedahalam@yahoo.com',
		From: document.getElementById('email').value,
		Subject: 'RSVP',
		Body:
			'Name: ' +
			document.getElementById('name').value +
			'<br> Email: ' +
			document.getElementById('email').value +
			'<br> Guests Attending: ' +
			document.getElementById('guests').value +
			'<br> Yes, I am attending: ' +
			document.getElementById('message').value,
	}).then((message) => alert('Message sent successfully!'));
};

// ////////////// Form wave text section ////////////

const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 60}ms">${letter}</span>`
		)
		.join('');
});
// ///////////////// end of wave text/////////////////////
