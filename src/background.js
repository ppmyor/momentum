const bgImages = [
    "bg-1.jpeg",
    "bg-2.jpeg",
    "bg-3.jpeg",
    "bg-4.jpeg",
    "bg-5.jpeg",
    "bg-6.jpeg",
    "bg-7.jpeg",
    "bg-8.jpeg",
    "bg-9.jpeg",
    "bg-10.jpeg",
    "bg-11.jpeg",
    "bg-12.jpeg",
    "bg-13.jpeg",
    "bg-14.jpeg",
    "bg-15.jpeg",
    "bg-16.jpeg",
];

const chosenImage = bgImages[Math.floor(Math.random() * bgImages.length)];
console.log(chosenImage);

document.body.style.backgroundImage = `url("./src/img/${chosenImage}")`;