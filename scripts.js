let nextPlayer = 'X';

// Show the first player.
document.getElementById('next-lbl').innerText = nextPlayer;

// Create the game board.
createGameBoard();

function createGameBoard()
{
    // Add a button to each game board cell.
    for (let i = 1; i <= 9; i++)
    {
        document.getElementById('c' + i).innerHTML = '<button>[ ]</button>';
    }

    // Add a click event listener to every button.
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener('click', takeCell);
    }
}


// Handles a player choosing a cell.
function takeCell(event)
{
    let button = event.target;

    // Fill the chosen cell with the current player.
    button.innerText = '[ ' + nextPlayer + ' ]';

    // Prevent the same cell from being clicked again.
    button.disabled = true;

    // Switch players.
    if (nextPlayer === 'X')
    {
        nextPlayer = 'O';
    }
    else
    {
        nextPlayer = 'X';
    }

    // Update the next player label.
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check whether every cell has been chosen.
    if (isGameOver())
    {
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}


// Returns true when all buttons are disabled.
function isGameOver()
{
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++)
    {
        if (!btns[i].disabled)
        {
            return false;
        }
    }

    return true;
}