const botao1=document.getElementById('botao1')
const botao2=document.getElementById('botao2')
const botao3=document.getElementById('botao3')
const botao4=document.getElementById('botao4')

botao1.addEventListener("click", () => {
    document.body.classList.remove('novopapel2');
    document.body.classList.remove('background-image');
    document.body.classList.remove('novopapel3')
    document.body.classList.remove('novopapel4')
    document.body.classList.add('novopapel')
    
});
botao2.addEventListener("click", () => {
    document.body.classList.remove('background-image');
    document.body.classList.remove('novopapel');
    document.body.classList.remove('novopapel3')
    document.body.classList.remove('novopapel4')
    document.body.classList.add('novopapel2')
    
});

botao3.addEventListener("click", () => {
    document.body.classList.remove('background-image');
    document.body.classList.remove('novopapel');
    document.body.classList.remove('novopapel2')
    document.body.classList.remove('novopapel4')
    document.body.classList.add('novopapel3')
    
});


botao4.addEventListener("click", () => {
    document.body.classList.remove('background-image');
    document.body.classList.remove('novopapel');
    document.body.classList.remove('novopapel2')
    document.body.classList.remove('novopapel3')
    document.body.classList.add('novopapel4')
    
});