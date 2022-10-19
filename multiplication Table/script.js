const para = document.querySelector('p');

document.getElementById('c-red').addEventListener('click' ,()=>{
        para.style.color = 'red';
});

document.getElementById('c-green').addEventListener('click' ,()=>{
        para.style.color = 'green';
});

document.getElementById('c-blue').addEventListener('click' ,()=>{
        para.style.color = 'blue';
});

document.getElementById('s-10').addEventListener('click' , ()=>{
        para.style.fontSize = `${10}px`;
});

document.getElementById('s-20').addEventListener('click' , ()=>{
        para.style.fontSize = `${20}px`;
});

document.getElementById('s-30').addEventListener('click' , ()=>{
        para.style.fontSize = `${30}px`;
});

document.getElementById('f-ss').addEventListener('click' , ()=>{
        para.style.fontFamily = 'sans-serif';
});

document.getElementById('f-s').addEventListener('click' , ()=>{
        para.style.fontFamily = 'serif';
});

document.getElementById('f-m').addEventListener('click' , ()=>{
        para.style.fontFamily = 'monospace';
})