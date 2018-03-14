//* função para abrir e fechar menu mobile *//
// usando javascript //

// window.onload = function(){
//   document.querySelector(".menu-mobile").addEventListener("click", function(){
//     if(document.querySelector(".menu nav ul").style.display == 'flex'){
//       document.querySelector(".menu nav ul").style.display = 'none';
//     }else{
//       document.querySelector(".menu nav ul").style.display = 'flex';
//     }
//   });
// };

// usando a biblioteca jquery //

$( "#hamburger" ).click(function() {
$( "#click-menu" ).slideToggle( "slow" );
});
