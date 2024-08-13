let btn1 = document.getElementById('mybutton');
let btn2 = document.getElementById('mybutton2');
let copyDiv = document.getElementById('copy-div');
let rgb1 = '#000';
let rgb2 = '#ffff';

// color code
const hexValue = () =>{
    let myHexValues = "0123456789abcdef";
    let color = "#";

    for(let i=0; i<6; i++){
        let random = Math.floor(Math.random()*16);
        color = color + myHexValues[random];
    }
    // console.log(color.toUpperCase());
    return color;
}


// button1 color
const hendleButton1 = () =>{
    rgb1 = hexValue();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`; 
    btn1.className =`bg-[${rgb1}] btn rounded-full px-10 text-white`;
    btn1.innerText = rgb1;
}

// button2 color
const hendleButton2 = () =>{
    rgb2 = hexValue();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerText = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`; 
    btn2.className =`bg-[${rgb2}] btn rounded-full px-10 text-white`;
    btn2.innerText = rgb2;
}

btn1.addEventListener('click', hendleButton1);
btn2.addEventListener('click', hendleButton2);

// copy color
copyDiv.addEventListener('click', ()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
    alert('copy');
})