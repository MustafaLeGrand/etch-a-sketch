let n = 100;

let makeGrid = () =>
{
    // Grid size variables
    let totalPixels = n * n;
    let sizeOfPixel = 650/n;

    // Size of each pixel in the grid converted into string plus the px
    let x = `${sizeOfPixel}px`;

    // Access the container element
    let container = document.getElementById('container');
    // Manipulate the the style to set the rows and cols with css variables
    container.style.setProperty('--rows', n);
    container.style.setProperty('--cols', n);
    // Edit the grid pixel size
    container.style.setProperty('--size', x);

    // Cycle to add every pixel in the grid
    for(let i = 0; i < totalPixels; i++)
    {
        // Each pixel is a div
        let square = document.createElement('div');
        // Adding styles
        square.classList.add('box');
        // Appending the div to form the grid
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