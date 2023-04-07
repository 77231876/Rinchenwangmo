const popoverTrigger = document.querySelector('.popover-trigger');
const popoverContainer = document.querySelector('.popover-container');

popoverTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  popoverContainer.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (!popoverTrigger.contains(event.target) && !popoverContainer.contains(event.target)) {
    popoverContainer.style.display = 'none';
  }
});