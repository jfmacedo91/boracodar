const searchInput = document.querySelector('#search');
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

searchInput.addEventListener('input', () => {
  if(searchInput.value != '') {
    for(let card of cards) {
      let title = card.querySelector('h3');
      title = title.textContent.toLocaleLowerCase();
      let searchText = searchInput.value.toLowerCase();
      if(!title.includes(searchText)) {
        card.style.display = 'none';
      } else {
        card.style.display = 'flex';
      }
    }
  } else {
    for(let card of cards) {
      card.style.display = 'flex';
    }
  }
});


cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  dropzones.forEach(dropzone => {
    dropzone.classList.add('highlight');
  });
}

function drag() {
  this.classList.add('isDragging');
}

function dragend() {
  dropzones.forEach(dropzone => {
    dropzone.classList.remove('highlight');
  });
  this.classList.remove('isDragging');
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
});

function dragover() {
  this.classList.add('over');
  this.appendChild(document.querySelector('.isDragging'));
}

function dragleave() {
  this.classList.remove('over');
}