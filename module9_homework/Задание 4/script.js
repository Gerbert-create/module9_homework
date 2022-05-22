function userForm() {
	const input_1 = document.querySelector('.inputNumber_1')
	const input_2 = document.querySelector('.inputNumber_2')
	const error = document.querySelector('.error')



	function Analyse_input() {
		let num1 = Number(input_1.value)
		let num2 = Number(input_2.value)

		if ((isNaN(num1) || isNaN(num2)) || (input_1.value == "" || input_2.value == "")) {
			input_1.style.border = '2px solid red'
			input_2.style.border = '2px solid red'
			return errorMessage('одно из чисел не число или пустое поле')
		} else if ((num1 || num2) < 100 || (num1 || num2) > 300) {
			input_1.style.border = '2px solid red'
			input_2.style.border = '2px solid red'
			return errorMessage('одно из чисел вне диапазона от 100 до 300')
		} else {
			input_1.style.border = '2px solid green'
			input_2.style.border = '2px solid green'
			errorMessage('')
			sendingForm(`https://picsum.photos/${num1}/${num2}`)
		}
	}

	function sendingForm(url) {
		fetch(url)
			.then(function (response) {

				console.log(response)
				const result = response.url

				console.log(result)
				resultImg = document.querySelector('.image')
				resultImg.src = result
			})

			.catch(function (response) {
				if (response.status >= 400) {
					alert('ERROR')
				}
			})

	}


	function errorMessage(message) {
		error.innerHTML = message
		error.style.color = 'red'
	}

	btn.addEventListener('click', Analyse_input)
}

document.addEventListener('DOMContentLoaded', userForm)