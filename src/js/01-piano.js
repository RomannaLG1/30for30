// import Player from '@vimeo/player';
// const iframe = document.querySelector('#vimeo-player');

// const player = new Player(iframe);
// console.log(player);

// const fs = require('fs');
// const path = require('path');
// const directoryPath = 'src/sounds';
// fs.readdir(directoryPath, (err, files) => {
//   if (err) {
//     return console.log('Unable to scan dir' + err);
//   }
//   files.forEach(function (file) {
//     // Check if the file name matches the pattern
//     if (/zvuk-notyi-[a-z]+\.wav/i.test(file)) {
//       // Rename the file
//       const oldPath = path.join(directoryPath, file);
//       const newPath = path.join(
//         directoryPath,
//         file.replace('vo-vtoroy-oktave', 'u-drugiy-oktavi')
//       );
//       fs.rename(oldPath, newPath, function (err) {
//         if (err) {
//           console.log('Error renaming file: ' + err);
//         } else {
//           console.log('Renamed file: ' + oldPath + ' -> ' + newPath);
//         }
//       });
//     }
//   });
// });

// ==================================================== //

function playSound(e) {
  let keyCode;
  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else if (e.type === 'click') {
    keyCode = e.currentTarget.getAttribute('data-key');
  } else {
    return;
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio || !key) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

  setTimeout(() => {
    key.classList.remove('playing');
  }, 70);
}

window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', playSound);
});
keys.forEach(i => i.addEventListener('transitionend', removeTransitionend));

function removeTransitionend(e) {
  if (e.propertyName !== 'transform') {
    return;
  }

  this.classList.remove('playing');
}
