/*
let apple = {
    marka: "Macbook",
    model: "Pro",
    qiymet: 3000,
    SSD: 128,
    HDD: 1000
}
let asus = {
    marka: "Asus",
    model: "Rog",
    qiymet: 3335,
    SSD: 256,
    HDD: 1000
}

let computer = {
    kompAdi: function() {
        return `${this.marka} ${this.model}`
    },
    kompQiymet: function(){
        var dollarPrice = 1.7;
        return Math.floor(this.qiymet / dollarPrice) + "$"
    },
    yaddasKomp: function(ssd,hdd) {
        return "SSD: " + ssd + " HDD: " + hdd
    }
}

console.log(computer.kompAdi.call(apple))
console.log(computer.kompQiymet.call(apple))
console.log(computer.kompQiymet.apply(asus))
console.log(computer.yaddasKomp.call(apple))

console.log(computer.yaddasKomp.call(apple,555))
console.log(computer.yaddasKomp.apply(apple,[222,333]))


const object1 = {
    num1: 1,
    num2: 2
}


function SumNumbers(x,y) {
    return x+y + this.num1 + this.num2
}

const new_func = SumNumbers.bind(object1);
console.log(new_func(3,4))


console.log(firstname);
var firstname = "Altan";
*/

let download = document.querySelector('.download');
let table = document.querySelector('#table');
download.onclick = function() {
    this.nextElementSibling.click();
}

download.nextElementSibling.onchange = function(e) {
   for(let file of e.target.files) { 
       const reader = new FileReader();
       reader.onloadend = function(event) {
           let tr = document.createElement('tr');
           let tdImg = document.createElement('td');
           let tdName = document.createElement('td');
           let tdSize = document.createElement('td');

           let img = document.createElement('img');
           img.setAttribute('src',event.target.result)
           tdImg.appendChild(img);
           tdName.innerText = file.name;
           tdSize.innerText = Math.floor(file.size / 1024) + "MB";

           tr.appendChild(tdImg);
           tr.appendChild(tdName);
           tr.appendChild(tdSize);

           table.appendChild(tr)
           
       }
    reader.readAsDataURL(file);
     }

     document.querySelector('table').classList.remove('d-none')
}