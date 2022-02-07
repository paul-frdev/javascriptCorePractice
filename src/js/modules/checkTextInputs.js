const checkTextInputs = (selector) => {
  const texInputs = document.querySelectorAll(selector);

  texInputs.forEach(input => {
      input.addEventListener('keypress', function(e) {
          if (e.key.match(/[^а-яе 0-9]/ig)) {
              e.preventDefault();
          }
      });
  });
}

export default checkTextInputs;
