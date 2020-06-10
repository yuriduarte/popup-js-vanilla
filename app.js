const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');

button.addEventListener('click', function() {
  popup.classList.toggle('show');
});

popup.addEventListener('click', function(event) {
  const classNameOfClickedElement = event.target.classList[0];
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldClosePopup = classNames.some(classNames => 
    classNames === classNameOfClickedElement
  )

  if (shouldClosePopup) {
    popup.classList.toggle('show');
  }
});

document.addEventListener('keydown', function(event) {
  const key = event.key;
  const isVisible = popup.classList.contains('show')

  if (isVisible && key === 'Escape') {    
    popup.classList.toggle('show');    
  }

});
