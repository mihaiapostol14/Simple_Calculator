document.addEventListener('DOMContentLoaded', () => {
  const inputDisplay = document.querySelector('.input')
  const buttons = document.querySelectorAll('button')
  let currentInput = ''

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value')

      if (value === 'AC') {
        currentInput = ''
      } else if (value === 'DEL') {
        currentInput = currentInput.slice(0, -1)
      } else if (value === '=') {
        try {
          currentInput = eval(currentInput).toString()
        } catch (error) {
          currentInput = 'Error'
        }
      } else {
        currentInput += value
      }

      inputDisplay.textContent = currentInput
    })
  })
})
