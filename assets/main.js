let n = 64;
let totalSquares = n * n;

let size = 650/n;

let makeGrid = () =>
{
    let x = `${size}px`;

    // Access the container element
    let container = document.getElementById('container');
    // Manipulate the the style to set the rows and cols with css variables
    container.style.setProperty('--rows', n);
    container.style.setProperty('--cols', n);
    // Edit the grid pixel size
    container.style.setProperty('--size', x);

    console.log(size);

    console.log(typeof x);



    for(let i = 0; i < (totalSquares); i++)
    {
        let square = document.createElement('div');
        square.classList.add('box');
        container.appendChild(square);
    }

}

let getSquareSize = () =>
{
    let size = document.getElementById('size');

    size.addEventListener('click', size)
    {
        console.log(size.min);
    }


}



getSquareSize();
makeGrid();