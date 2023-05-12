let n = 92;
let totalSquares = n * n;

let makeGrid = () =>
{
    let container = document.getElementById('container');
    container.style.setProperty('--rows', n);
    container.style.setProperty('--cols', n);

    for(let i = 0; i < (totalSquares); i++)
    {
        let square = document.createElement('div');
        square.classList.add('box');
        container.appendChild(square);
    }

}

makeGrid();