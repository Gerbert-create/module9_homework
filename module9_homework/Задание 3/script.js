function userInput() {

	const btn = document.querySelector('#btn')
	const input = document.querySelector('input')
	const error = document.querySelector('.error')
	const htmlResult = document.querySelector('.resultData')



	function Analyse() {
		let num = Number(input.value)
		if (input.value == "" || isNaN(num)) {
			input.style.border = '2px solid red'
			return errorMessage('Это не число')
		} else if (num < 1 || num > 10) {
			input.style.border = '2px solid red'
			return errorMessage('Число вне диапазона от 1 до 10')
		} else {
			input.style.border = '2px solid green'
			errorMessage('')
			XHR(`https://picsum.photos/v2/list?limit=${num}`, displayResult)
		}
	}

	function XHR(url, callback) {

		const xhr = new XMLHttpRequest()
		xhr.open('GET', url, true)

		xhr.onload = function () {
			console.log(`Статус: ${xhr.status}; Результат: ${xhr.response}`)
			const result = JSON.parse(xhr.response)
			callback(result)
			console.log(result)
		}

		xhr.onerror = function () {
			alert(`Ошибка: ${xhr.status}`)
		}

		xhr.send()
	}

	function displayResult(apiData) {
		let imgBlock = ''
		apiData.forEach(function (item) {
			const img = `
				<div class='img_result'>
					<p>${item.author}</p>
					<img src="${item.download_url}" width="500px" height="300px">
				</div>
   		 	`
			imgBlock = imgBlock + img
		})
		htmlResult.innerHTML = imgBlock
	}

	function errorMessage(message) {
		error.innerHTML = message
		error.style.color = 'red'
	}

	btn.addEventListener('click', Analyse)

}

document.addEventListener('DOMContentLoaded', userInput)


