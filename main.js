// Inside main.js

document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph');
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (heart.classList.contains('activated-heart')) {
            heart.classList.remove('activated-heart');
            heart.innerText = '♡';
          } else {
            heart.classList.add('activated-heart');
            heart.innerText = '♥';
          }
        })
        .catch(error => {
          modal.classList.remove('hidden');
          modalMessage.innerText = error;
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});

// Provided mimicServerCall function for simulating server response
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
