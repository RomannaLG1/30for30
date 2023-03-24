// const spacingBorder = document.querySelector('input[name="spacing"]');
// const blurImg = document.querySelector('input[name="blur"]');
// const baseColor = document.querySelector('input[name="base"]');
// const image = document.querySelector('.css-img');

// spacingBorder.addEventListener('change', () => {
//   image.style.padding = `${spacingBorder.value}px`;
// });

// blurImg.addEventListener('change', () => {
//   image.style.filter = `blur(${blurImg.value}px)`;
// });

// baseColor.addEventListener('change', () => {
//   image.style.background = `${baseColor.value}`;
// });

const inputs = document.querySelectorAll('.controls input');
const image = document.querySelector('.css-img');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(i => i.addEventListener('change', handleUpdate));
inputs.forEach(i => i.addEventListener('mousemove', handleUpdate));
