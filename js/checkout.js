let fName, errorName, fLastN, errorLastN, fEmail, errorEmail, fPhone, errorPhone, fAddress, errorAddress, fPassword, errorPassword

const onlyLettersRegex = /^[a-zA-ZÀ-ÿ\s]+$/
const phoneRegex = /^[0-9]{9}$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/
const emailRegex = /^\S+@\S+\.\S+$/

window.onload = () => {
	fName = document.getElementById('fName')
	errorName = document.getElementById('errorName')

	fLastN = document.getElementById('fLastN')
	errorLastN = document.getElementById('errorLastN')

	fEmail = document.getElementById('fEmail')
	errorEmail = document.getElementById('errorEmail')

	fPhone = document.getElementById('fPhone')
	errorPhone = document.getElementById('errorPhone')

	fAddress = document.getElementById('fAddress')
	errorAddress = document.getElementById('errorAddress')

	fPassword = document.getElementById('fPassword')
	errorPassword = document.getElementById('errorPassword')

	const fieldsToValidate = [
		{ field: fName, error: errorName, regex: onlyLettersRegex },
		{ field: fLastN, error: errorLastN, regex: onlyLettersRegex },
		{ field: fEmail, error: errorEmail, regex: emailRegex },
		{ field: fPhone, error: errorPhone, regex: phoneRegex },
		{ field: fPassword, error: errorPassword, regex: passwordRegex },
		{ field: fAddress, error: errorAddress }
	]
	
	fieldsToValidate.forEach(({ field, error, regex }) => {
		field.addEventListener('blur', () => {
			validateField(field, error, regex)
		})
	})
}

const validateField = (field, errorField, extraValidation = null) => {
	const value = field.value.trim()

	if (value.length < 3 || (extraValidation && !extraValidation.test(value))) {
		errorField.style.display = 'block'
		return false
	} else {
		errorField.style.display = 'none'
		return true
	}
}

// Exercise 6
const validate = () => {
	let isValid = true

	if (!validateField(fName, errorName, onlyLettersRegex)) isValid = false
	if (!validateField(fLastN, errorLastN, onlyLettersRegex)) isValid = false
	if (!validateField(fEmail, errorEmail, emailRegex)) isValid = false
	if (!validateField(fPhone, errorPhone, phoneRegex)) isValid = false
	if (!validateField(fPassword, errorPassword, passwordRegex)) isValid = false
	if (!validateField(fAddress, errorAddress)) isValid = false

	if (!isValid) {
		alert('Please fix errors before submitting.')
	} else {
		alert('Form submitted successfully!')
	}

	return isValid
}