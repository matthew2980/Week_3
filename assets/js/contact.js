/**	CONTACT FORM
*************************************************** **/
var _hash = window.location.hash;

/**
	BROWSER HASH - from php/contact.php redirect!

	#alert_success 		= email sent
	#alert_failed		= email not sent - internal server error (404 error or SMTP problem)
	#alert_mandatory	= email not sent - required fields empty
**/	jQuery(_hash).show();
const message = document.getElementById('send-message')

const fullName = document.getElementById('name')
const emailNum = document.getElementById('email')
const phoneNum = document.getElementById('phone')
const companyName = document.getElementById('company_name')
const projectName = document.getElementById('project_name')
const projectDesc = document.getElementById('project_description')
const departments = document.getElementById('department')
const messages = document.getElementById('message')
const files = document.getElementById('attachment')


message.addEventListener('click', function () {
	const data = { 
		fullname: fullName.value,
		email: emailNum.value,
		phone: phoneNum.value,
		company_name: companyName.value,
		project_name: projectName.value,
		project_desc: projectDesc.value,
		department: departments.value,
		message: messages.value,
		file: files.value
	};
	fetch('http://99.79.77.144:3000/api/contact', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(data),
	})
	  .then((response) => response.json())
	  .then((data) => {
		console.log('Success:', data);
	  })
	  .catch((error) => {
		console.error('Error:', error);
	  });

})
