let display_size = 480;
let gridSize = 16; // Number of squares per row or column
let squareSize = display_size / gridSize; // Calculate the size of each square
let currentSize = document.createElement('div');

// construct the etch-a-sketch
const etch_a_sketch = document.querySelector('#container');
etch_a_sketch.style.backgroundColor = 'gray';
etch_a_sketch.style.display = 'flex';
etch_a_sketch.style.height = `${display_size}px`;
etch_a_sketch.style.width = `${display_size}px`;
etch_a_sketch.style.flexWrap = 'wrap';


// Gets player options
const resizebtn = document.createElement('button');
resizebtn.textContent = 'Resize';
resizebtn.classList.add('resizebtn');
resizebtn.style.marginBottom = '30px';
etch_a_sketch.insertAdjacentElement('beforebegin', resizebtn)

// Sets defaults
CreateGridBlocks(gridSize, squareSize);
const gridBlocks = document.querySelectorAll('.grid');

gridBlocks.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'blue';
    })
});

document.body.appendChild(currentSize);
currentSize.textContent = `Current Size: ${gridSize}x${gridSize}`
//------------------------------------------


resizebtn.addEventListener('click', () => {
    gridSize = prompt('Please enter the desired size of the display (1-100)');
    while (gridSize <= 0 || gridSize > 100)
    {
        gridSize = prompt('Please enter the desired size of the display (1-100)');
    }
    squareSize = display_size / gridSize;
    CreateGridBlocks(gridSize, squareSize);
    currentSize.textContent = `Current Size: ${gridSize}x${gridSize}`;

})


function CreateGridBlocks (gridLength, squareSize)
{
    let gridBlocks = document.querySelectorAll('.grid');
    gridBlocks.forEach(element => {
        element.remove()
    })

    for (let i = 0; i < gridLength**2; i++)
    {
        const square = document.createElement('div');
        square.classList.add('grid');
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;
        square.style.background = 'lightgray';
        etch_a_sketch.appendChild(square);
    }

    etch_a_sketch.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('grid')) { 
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = '#' + randomColor;
        }
    })
}