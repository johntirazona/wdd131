const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener('click', () => {
  const chapter = input.value.trim();

  if (chapter !== '') {
    const li = document.createElement('li');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';

    li.textContent = chapter;

    li.append(deleteBtn);

    list.append(li);

    input.value = '';
    input.focus();

    deleteBtn.addEventListener('click', () => {
      list.removeChild(li);
    });
  } else {
    alert('Please enter a chapter name!');
  }
});