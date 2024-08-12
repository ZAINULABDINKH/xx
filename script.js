const button = document.querySelector('#b1');
const info = document.querySelector('#info');

// Set initial display state to none
info.style.display = 'none';

// Toggle display state on button click
button.addEventListener('click', (event) => {
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
    event.stopPropagation(); // Prevent click from hiding info immediately
});

// Hide info if clicked outside
document.addEventListener('click', (event) => {
    if (!info.contains(event.target) && event.target !== button) {
        info.style.display = 'none';
    }
});

        // Select elements
const button2 = document.querySelector('#b2');
const info1 = document.querySelector('#info1');

// Set initial display state to none
info1.style.display = 'none';

// Toggle display state on button click
button2.addEventListener('click', (event) => {
    info1.style.display = (info1.style.display === 'block') ? 'none' : 'block';
    event.stopPropagation(); // Prevent click from hiding info immediately
});

// Hide info1 if clicked outside
document.addEventListener('click', (event) => {
    if (!info1.contains(event.target) && event.target !== button2) {
        info1.style.display = 'none';
    }
});
