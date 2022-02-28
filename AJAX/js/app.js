// HTTP Request - GET

// XMLHTTPREQUEST

// ActiveX

function LoadDoc() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {

        if(this.readyState===4 && this.status===200) {
            document.querySelector('#common').innerHTML = this.responseText;
        }
    }
    

    xhr.open('GET','aasync.html');
    xhr.send();
}

// open('GET','message.txt',)

// HTTP STATUS CODE


// 0 - sorgu hele baslamayib
// 1 - 
// 2
// 3 
// 4 - 
