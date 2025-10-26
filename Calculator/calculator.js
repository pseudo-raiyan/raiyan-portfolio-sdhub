
  const input = document.querySelector('#input-here');
  const buttons = document.querySelectorAll('button');

  let expression = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;

      if (value === 'C') {
        expression = '';
        input.value = '';
      } 
      else if (value === '=') {
        try {
          const result = eval(expression);
          input.value = result;
          expression = result.toString();
        } catch (err) {
          input.value = 'Error';
          expression = '';
        }
      } 
      else {
        expression += value;
        input.value = expression;
      }
    });
  });

