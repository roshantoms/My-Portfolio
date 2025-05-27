const cursor = document.querySelector('.cursor');
const outerCircle = document.querySelector('.outer-circle');
const innerDot = document.querySelector('.inner-dot');

let dotPosition = { x: 0, y: 0 };
let circlePosition = { x: 0, y: 0 };
let isMoving = false;

document.addEventListener('mousemove', (e) => {
    dotPosition.x = e.pageX;
    dotPosition.y = e.pageY;

    
    innerDot.style.left = `${dotPosition.x}px`;
    innerDot.style.top = `${dotPosition.y}px`;

    
    isMoving = true;
});

function animate() {
    if (isMoving) {
        circlePosition.x += (dotPosition.x - circlePosition.x) * 0.1;
        circlePosition.y += (dotPosition.y - circlePosition.y) * 0.1;

        outerCircle.style.left = `${circlePosition.x}px`;
        outerCircle.style.top = `${circlePosition.y}px`;
    }

    requestAnimationFrame(animate);
}

// Start the animation loop
animate();

document.addEventListener('mouseleave', () => {
    isMoving = false;
});





document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

document.querySelector('#contact form').onsubmit = function (e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    if (name === '' || email === '') {
        e.preventDefault();
        alert('Please fill out all fields');
    }
};

// popup

function openPopup(imageSrc) {
    document.getElementById("popup-img").src = imageSrc;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}




document.addEventListener('DOMContentLoaded', function () {
const learnMoreButtons = document.querySelectorAll('.learn-more-btn');

learnMoreButtons.forEach(button => {
    button.addEventListener('click', function () {
    const card = this.closest('.card');
    const paragraph = card.querySelector('.card-text');
    paragraph.classList.toggle('d-none');
    });
  });
});

