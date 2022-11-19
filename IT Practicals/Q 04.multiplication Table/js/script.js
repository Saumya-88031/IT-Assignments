const mainEl = document.getElementById('main');

var i = 2;
var j = 1;
var t = 1;

var colors = ['#002B5B', '#AAC4FF', '#8BBCCC', '#006778', '#FF5677'];


const childhead = document.createElement('h3');
childhead.innerHTML = `Table of ${i}`;
mainEl.appendChild(childhead);
setInterval(() => {
        if (j > 10) {
                i++;
                j = 1;
                const childhead = document.createElement('h3');
                childhead.innerHTML = `Table of ${i}`;
                childhead.style.color = colors[(j - 1) % 5];
                childhead.style.fontSize = `${t}rem`;
                mainEl.appendChild(childhead);
        }

        if (i > 10) return;

        const child = document.createElement('h5');
        child.innerHTML = `${i} * ${j} = ${i * j}`;
        child.style.color = colors[(j - 1) % 5];
        child.style.fontSize = `${t}rem`;
        mainEl.appendChild(child);
        window.scrollTo(0, document.body.scrollHeight);

        j++;
        t += 0.05;
}, 5000);