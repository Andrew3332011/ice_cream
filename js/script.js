const openBtns = document.querySelectorAll('[data-open-modal]');
const closeBtns = document.querySelectorAll('[data-close-modal]');

openBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const targetModal = btn.dataset.openModal;
    let backdrop;

    if (targetModal) {
      backdrop = document.querySelector(
        `.modal-backdrop[data-modal="${targetModal}"]`
      );
    } else {
      backdrop = btn.closest('.products__item')?.querySelector('.backdrop');
    }

    if (backdrop) {
      backdrop.classList.remove('is-hidden');
      document.body.classList.add('no-scroll');
    }
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const backdrop = btn.closest('.modal-backdrop');
    if (backdrop) {
      backdrop.classList.add('is-hidden');
      document.body.classList.remove('no-scroll');
    }
  });
});

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document
      .querySelectorAll('.modal-backdrop:not(.is-hidden)')
      .forEach(backdrop => {
        backdrop.classList.add('is-hidden');
      });
    document.body.classList.remove('no-scroll');
  }
});


