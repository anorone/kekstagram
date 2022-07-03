const open = (modalWindow) => {
  document.body.classList.add('modal-open');
  modalWindow.classList.remove('hidden');
};

const close = (modalWindow) => {
  document.body.classList.remove('modal-open');
  modalWindow.classList.add('hidden');
};

export { open, close };
