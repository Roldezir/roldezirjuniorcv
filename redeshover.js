let whatsapp = document.querySelector('.contato1img')
function mudarlogo1(){
    whatsapp.src = 'whatsappLogo1.png'
    whatsapp.style.width='8%'
}
function voltarlogo1(){
    whatsapp.src = 'whatsappLogo.png'
    whatsapp.style.width='6%'
}

let instagram = document.querySelector('.contato2img')
function mudarlogo2(){
    instagram.src = 'instagramLogo1.png'
    instagram.style.width='8%'
}
function voltarlogo2(){
    instagram.src = 'instagramLogo.png'
    instagram.style.width='6%'
}

let linkedin = document.querySelector('.contato3img')
function mudarlogo3(){
    linkedin.src = 'linkedinLogo1.png'
    linkedin.style.width='8%'
}
function voltarlogo3(){
    linkedin.src = 'linkedinLogo.png'
    linkedin.style.width='6%'
}

let gmail = document.querySelector('.contato4img')
function mudarlogo4(){
    gmail.src = 'gmailLogo1.png'
    gmail.style.width='10%'
}
function voltarlogo4(){
    gmail.src = 'gmailLogo.png'
    gmail.style.width='7%'
}
function clicarGmail(){
    
    if(window.innerWidth<=768){
        document.querySelector('.contato4').style.fontSize=20+'px'
    }
    document.querySelector('.contato4').innerText='roldezirjunior@gmail.com'
}