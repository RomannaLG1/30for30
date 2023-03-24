const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach(panel => {
    if (panel !== this && panel.classList.contains('open')) {
      panel.classList.remove('open');
    }
  });
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName === 'flex-grow') {
    this.classList.toggle('open-active');
  }
}

panels.forEach(i => i.addEventListener('click', toggleOpen));
panels.forEach(i => i.addEventListener('transitionend', toggleActive));
