let value = document.getElementById('value');
let input = document.getElementById('input');

let getGridSize = () =>
{
    value.textContent = input.value;

    input.addEventListener('input', () => {
        value.textContent = input.value;
    });
}

let makeGrid = () =>
{
    // Input
    //let n = ;

    // Grid size variables
    let totalPixels = n * n;
    const gridSide = 650;
    let sizeOfPixel = gridSide/n;

    // Size of each pixel in the grid converted into string plus the px
    let x = `${sizeOfPixel}px`;

    // Access the container element
    let container = document.getElementById('container');
    // Manipulate the the style to set the rows, cols
    // & grid pixel size with css variables
    container.style.setProperty('--rows', n);
    container.style.setProperty('--cols', n);
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

getGridSize();
makeGrid();