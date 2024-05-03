let display_size = 480;
let gridSize = 16; // Number of squares per row or column
let squareSize = display_size / gridSize; // Calculate the size of each square
let currentSize = document.createElement('div');
let default_color = true;

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

// Color Button
const choose_color_btn = document.createElement('button');
choose_color_btn.textContent = 'Toggle Rainbow Mode';
choose_color_btn.classList.add('choose_color_btn');
choose_color_btn.style.marginBottom = '30px';
etch_a_sketch.insertAdjacentElement('beforebegin', choose_color_btn);

// Sets defaults
CreateGridBlocks(gridSize, squareSize);
const gridBlocks = document.querySelectorAll('.grid');


document.body.appendChild(currentSize);
currentSize.textContent = `Current Size: ${gridSize}x${gridSize}`
//------------------------------------------

// Resize btn functionality
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

// Color Button Functionality
choose_color_btn.addEventListener('click', () => {
    default_color = !default_color;
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
        if (event.target.classList.contains('grid') && !default_color) { 
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.backgroundColor = '#' + randomColor;
        }
        else if (event.target.classList.contains('grid') && default_color) {
            let color = 'black';
            event.target.style.backgroundColor = color;
        }
    })
}