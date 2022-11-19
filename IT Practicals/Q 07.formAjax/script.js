const tableBody = document.getElementsByTagName("tbody");
var htmltxt="";

const xhr = new XMLHttpRequest();
xhr.open("GET", "formData.json", true);
xhr.getResponseHeader("Content-Type", "application/json");
xhr.onload = function () {
        const obj = JSON.parse(this.responseText);
        for(var i=0;i<obj.length;i++){
                console.log(obj[i]['name']);
                htmltxt=htmltxt+`<tr>
                <td>${obj[i]['type']}</td>
                <td>${obj[i]['name']}</td>
                <td>${obj[i]['age']}</td>
                <td>${obj[i]['weight']}</td>
                <td>${obj[i]['like']}</td>
                </tr>`
        }
        console.log(htmltxt);
        $('tbody').html(htmltxt);
}

xhr.send();