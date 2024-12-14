const textContainer = document.querySelector('.animated-text-fullscreen');


const words = [
    "Welcome", "to", "fakEbay.com,", 
    "the", "home", "of", "completely", 
    "legitimate", "and", "totally", 
    "real", "deals!", "Why", "buy", 
    "from", "other", "stores", "when", 
    "you", "can", "shop", "here", 
    "and", "find", "things", "you", 
    "never", "needed,", "but", "absolutely", 
    "want?", 
    "Our", "exclusive", "products", 
    "include", "rare,", "mint-condition", 
    "toaster", "ovens", "that", "only", 
    "work", "on", "Tuesdays,", 
    "left-handed", "mugs,", "and", 
    "the", "world-famous", "Invisible", 
    "Carpet.", "Yes,", "it's", "just", 
    "a", "box,", "but", "it's", "a", 
    "collectible!", 
    "Did", "you", "know", "fakEbay", 
    "was", "founded", "by", "a", "group", 
    "of", "hedgehogs", "in", "a", 
    "basement?", "Legend", "has", 
    "it", "that", "our", "first", 
    "sale", "was", "a", "slightly", 
    "used", "toothbrush,", "which", 
    "shipped", "for", "only", "$500!", 
    "Why", "trust", "us?", "Because", 
    "our", "customer", "service", 
    "team", "consists", "of", "highly-trained", 
    "pigeons,", "who", "will", "personally", 
    "deliver", "your", "complaints", 
    "to", "the", "void.", "Our", "shipping", 
    "policy?", "We", "ship", "worldwide,", 
    "except", "to", "the", "actual", "world.", 
    "So,", "what", "are", "you", "waiting", 
    "for?", "Start", "shopping", "now,", 
    "and", "become", "part", "of", "the", 
    "fakEbay", "family!", "Remember,", 
    "if", "it’s", "not", "fake,", "it’s", 
    "not", "worth", "buying!"
];


function randomScreenPosition() {
    return {
        x: Math.random() * window.innerWidth - 50, 
        y: Math.random() * window.innerHeight - 20 
    };
}


function animateWords() {
    words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.classList.add('word');

        const { x, y } = randomScreenPosition();
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;

        textContainer.appendChild(span);

        
        setTimeout(() => {
            span.style.opacity = 1; 
            span.style.transition = 'opacity 1s ease';
        }, index * 100); 

        
        setTimeout(() => {
            span.style.opacity = 0;
            setTimeout(() => {
                span.remove();
            }, 1000); 
        }, (index + 1) * 3000); 
    });
}


window.onload = animateWords;

document.addEventListener('DOMContentLoaded', () => {
    const founderImage = document.querySelector('.founder-image');
    
    
    setTimeout(() => {
        
        founderImage.classList.add('glitch');

        
        setTimeout(() => {
            founderImage.classList.remove('glitch');
        }, 1000);
    }, 4000);  
});

const ads = document.querySelectorAll('.ad-image');
const container = document.querySelector('.ad-container');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

let adDirections = [];

function randomDirection() {
    return {
        x: Math.random() < 0.5 ? 1 : -1,
        y: Math.random() < 0.5 ? 1 : -1
    };
}


ads.forEach((ad, index) => {
    adDirections.push(randomDirection());
    animateAd(ad, index);
});

function animateAd(ad, index) {
    let adRect = ad.getBoundingClientRect();
    let adSpeed = 2 + Math.random() * 3;  

    function move() {
        const adX = ad.offsetLeft;
        const adY = ad.offsetTop;

        
        if (adX <= 0 || adX + adRect.width >= containerWidth) {
            adDirections[index].x *= -1;
        }

        if (adY <= 0 || adY + adRect.height >= containerHeight) {
            adDirections[index].y *= -1;
        }

        
        ad.style.left = adX + adDirections[index].x * adSpeed + 'px';
        ad.style.top = adY + adDirections[index].y * adSpeed + 'px';

        requestAnimationFrame(move);
    }

    move();
}


const adImages = document.querySelectorAll('.ad-image');


adImages.forEach(image => {
    
    const initialPositionX = Math.random() * window.innerWidth;
    const initialPositionY = Math.random() * window.innerHeight;
    const directionX = Math.random() < 0.5 ? 1 : -1;
    const directionY = Math.random() < 0.5 ? 1 : -1;

    image.style.position = 'absolute';
    image.style.left = `${initialPositionX}px`;
    image.style.top = `${initialPositionY}px`;

    
    let posX = initialPositionX;
    let posY = initialPositionY;
    let velocityX = directionX * (Math.random() * 3 + 2); 
    let velocityY = directionY * (Math.random() * 3 + 2); 

    function bounce() {
        
        posX += velocityX;
        posY += velocityY;

        
        if (posX <= 0 || posX >= window.innerWidth - image.width) {
            velocityX = -velocityX; 
        }

        if (posY <= 0 || posY >= window.innerHeight - image.height) {
            velocityY = -velocityY; 
        }

        
        image.style.left = `${posX}px`;
        image.style.top = `${posY}px`;

        
        requestAnimationFrame(bounce);
    }

    
    bounce();

    
    let isDragging = false;
    let offsetX, offsetY;

    
    image.addEventListener('mousedown', (e) => {
        isDragging = true;

        
        offsetX = e.clientX - image.getBoundingClientRect().left;
        offsetY = e.clientY - image.getBoundingClientRect().top;

        
        velocityX = 0;
        velocityY = 0;
    });

    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            t
            image.style.left = `${e.clientX - offsetX}px`;
            image.style.top = `${e.clientY - offsetY}px`;
        }
    });

    
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;

            
            velocityX = directionX * (Math.random() * 3 + 2); 
            velocityY = directionY * (Math.random() * 3 + 2); 
            bounce(); 
        }
    });
});

const serviceItems = document.querySelectorAll('.service-item');


function randomizePosition(element) {
    const parent = element.parentElement;
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;

    
    const randomX = Math.random() * (parentWidth - element.offsetWidth);
    const randomY = Math.random() * (parentHeight - element.offsetHeight);

   
    element.style.position = 'absolute';
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}


serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        randomizePosition(item);
    });
    
});
