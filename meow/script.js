
const vignette = document.getElementById("vignette");
let time = 0; // Time counter for pulsing effect
let meows = 0;
let meowmeows = 0;

function updateVignette(mouseX, mouseY, loopBool) {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Calculate distance from the center
  const dx = mouseX - centerX;
  const dy = mouseY - centerY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Normalize the effect strength (closer to edge = stronger vignette)
  const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
  let strength = distance / maxDistance; // 0 (center) to 1 (edges)

  // Make the vignette pulse over time
  const pulse = (Math.sin(time) + 1) / 2; // Value oscillates between 0 and 1
  if (loopBool) {
    time += 0.02; // Adjust this value to change pulse speed
  }

  // Calculate vignette size and opacity
  const size = 40 + pulse * 10 + (strength - (meows * 0.2)) * 20; // Base size + pulse effect + mouse distance effect
  //strength = Math.round(100 - (strength) * 100);
  const intensity = 0.8 + pulse * 0.1 + (strength + meows) * 0.4; // Base intensity + pulse + mouse distance effect

  vignette.style.background = `radial-gradient(circle, rgba(0, 0, 0, 0) ${size}%, rgba(0, 0, 0, ${intensity}) 100%)`;

  requestAnimationFrame(() => updateVignette(mouseX, mouseY, loopBool)); // Loop animation
}

let meow1 = document.getElementById("meow1");
let meow2 = document.getElementById("meow2");
let meow3 = document.getElementById("meow3");
let meow4 = document.getElementById("meow4");
let meow5 = document.getElementById("meow5");
let meow6 = document.getElementById("meow6");
let meow7 = document.getElementById("meow7");
let meow8 = document.getElementById("meow8");
let meow9 = document.getElementById("meow9");
let meowzers1 = document.getElementById("meowzers1");
let meowzers2 = document.getElementById("meowzers2");
let meowzers3 = document.getElementById("meowzers3");
let meowzers4 = document.getElementById("meowzers4");
let meowzers6 = document.getElementById("meowzers6");
let meowzers7 = document.getElementById("meowzers7");
let meowzers8 = document.getElementById("meowzers8");
let meowzers9 = document.getElementById("meowzers9");
meow5.style.opacity = 0;

function meowmeow() {
    meows += 1;
    if (meows == 8) {
        meow5.style.opacity = 1;
        meow5.disabled = false;
    } else {
        meow5.style.opacity = meows * 0.1;
    }

}

meow1.addEventListener("click", (event) => {
  meow1.style.display = "none";
  meowzers1.style.display = "block";
  meowmeow();
});

meow2.addEventListener("click", (event) => {
  meow2.style.display = "none";
  meowzers2.style.display = "block";
  meowmeow();
});

meow3.addEventListener("click", (event) => {
  meow3.style.display = "none";
  meowzers3.style.display = "block";
  meowmeow();
});

meow4.addEventListener("click", (event) => {
  meow4.style.display = "none";
  meowzers4.style.display = "block";
  meowmeow();
});

meow6.addEventListener("click", (event) => {
  meow6.style.display = "none";
  meowzers6.style.display = "block";
  meowmeow();
});

meow7.addEventListener("click", (event) => {
  meow7.style.display = "none";
  meowzers7.style.display = "block";
  meowmeow();
});

meow8.addEventListener("click", (event) => {
  meow8.style.display = "none";
  meowzers8.style.display = "block";
  meowmeow();
});

meow9.addEventListener("click", (event) => {
  meow9.style.display = "none";
  meowzers9.style.display = "block";
  meowmeow();
});

meow5.addEventListener("mouseover", (event) => {
  if (meows == 8) {
    meows = 666;
  }
});
  
meow5.addEventListener("click", (event) => {
    if (meows > -37) {
        meows -= 37;
    } else {
    
        const img = document.createElement('img');
        switch(Math.round(meowmeows % 4)) {
            case 0:
                img.src = './assets/images/meowzers1.png'; // Replace with your image path
                break;
            case 1:
                img.src = './assets/images/meowzers2.png'; // Replace with your image path
                break;
            case 2:
                img.src = './assets/images/meowzers3.png'; // Replace with your image path
                break;
            case 3:
                img.src = './assets/images/meowzers4.png'; // Replace with your image path
                break;
        }
        meowmeows += 1;
        img.width = 50;
        img.style.position = "absolute";
        img.style.zIndex = 2;
        document.body.appendChild(img);
        jumpImage(img);
    }
});

function jumpImage(image) {
    // Random angle and height
    const randomAngle = Math.floor(Math.random() * 360); // Random angle between 0-360 degrees
    const randomHeight = Math.floor(Math.random() * 1000) - 500; // Random height between -250px and 250px
    
    // Apply the transformation with random values
    image.style.transform = `rotate(${randomAngle}deg) translateY(${randomHeight}px)`;

    // Once the transition ends, reset the position to make it jump again
    image.addEventListener('transitionend', () => {
        requestAnimationFrame(() => jumpImage(image));
        setTimeout(jumpImage, 1000); // Repeat after 1 second
    });
}

document.addEventListener("mousemove", (event) => {
  updateVignette(event.clientX, event.clientY, false);
});

// Start the effect at the center initially
updateVignette(window.innerWidth / 2, window.innerHeight / 2, true);