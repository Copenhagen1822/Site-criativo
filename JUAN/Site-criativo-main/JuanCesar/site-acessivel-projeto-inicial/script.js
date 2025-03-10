document.addEventListener('DOMContentLoaded', function(){
 const aumentaFonteBotao = document.getElementById('aumentar-fonte');
 const diminuirFonteBotao = document.getElementById('aumentar-fonte');

 let tamanhoAtualFonte = 1;

 aumentaFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte += 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'

 })

 dominuiFonteBotao.addEventListener('click', function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = '${tamanhoAtualFonte}rem'

 })


})