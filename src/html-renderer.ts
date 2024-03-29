const createElem = col => {
  const elem = document.createElement('div');
  elem.classList.add('board');
  elem.style.display = 'inline-block';
  elem.style.marginLeft = '10px';
  elem.style.height = '10px';
  elem.style.width = '10px';
  elem.style['background-color'] =
    col === 0
      ? '#e8e8e8'
      : (col === 1
        ? 'red'
        : col === 2
          ? 'gray'
          : 'silver');
  elem.style['border-radius'] = '90%';
  return elem;
}

export const paint = (game: number[][], lives, score) => {
  document.body.innerHTML = `Lives: ${lives}, Score: ${score}`;

  game.forEach(row => {
    const rowContainer = document.createElement('div');
    row.forEach(col => rowContainer.appendChild(createElem(col)));
    document.body.appendChild(rowContainer);
  });
};