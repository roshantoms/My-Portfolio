document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const linkText = this.innerText;
        const href = this.getAttribute('href');
        this.innerHTML = '';

        // Create a span for each letter
        for (let i = 0; i < linkText.length; i++) {
            const span = document.createElement('span');
            span.innerText = linkText[i];
            span.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            span.style.display = 'inline-block';
            span.style.position = 'relative';
            span.style.opacity = '0';
            this.appendChild(span);

            // Randomize the scatter effect
            const randomX = (Math.random() - 0.5) * 100;
            const randomY = (Math.random() - 0.5) * 100;

            // Set a timeout to stagger the animation
            setTimeout(() => {
                span.style.transform = `translate(${randomX}px, ${randomY}px)`;
                span.style.opacity = '1';
            }, i * 50);
        }

        // Reset the link text after the animation
        setTimeout(() => {
            this.innerHTML = linkText;
            window.open(href, '_self');
        }, 300);
    });
});




// FALLING DOWN 

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    const formContainer = contactForm.parentElement;

    let containerHeight = formContainer.offsetHeight;
    formContainer.style.minHeight = containerHeight + 'px';
    
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formElements = contactForm.querySelectorAll('input, textarea, button');
        
        const initialPositions = [];
        formElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            initialPositions.push({
                top: rect.top,
                left: rect.left
            });
        });
        
        formElements.forEach((element, index) => {
            element.style.position = 'relative';
            element.style.transition = 'transform 0.5s ease-in';
            
            setTimeout(() => {
                element.style.transform = 'translateY(100vh) rotate(' + (Math.random() * 20 - 10) + 'deg)';
                element.style.transition = 'transform ' + (0.8 + Math.random() * 0.4) + 's cubic-bezier(0.5, 0, 1, 1)';
            }, index * 100);
        });
        
        setTimeout(() => {
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'flex';
            thankYouMessage.style.alignItems = 'center';
            thankYouMessage.style.justifyContent = 'center';
            thankYouMessage.style.height = '100%';
            
            setTimeout(() => {
                thankYouMessage.style.display = 'none';
                formElements.forEach((element, index) => {
                    element.style.transform = 'translateY(100vh) rotate(0deg)';
                    element.style.transition = 'none';
                    element.style.opacity = '1';
                });
                
                contactForm.style.display = '';
                
                setTimeout(() => {
                    formElements.forEach((element, index) => {
                        setTimeout(() => {
                            element.style.transition = 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
                            element.style.transform = 'translateY(0) rotate(0deg)';
                        }, index * 100);
                    });
                }, 50);
                
                
                contactForm.reset();
                
            }, 3000);
            
        }, 1200);
    });
});