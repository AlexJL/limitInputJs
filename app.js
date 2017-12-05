//onKeyUp="return limitar(event,this.value,100)" 
//onKeyDown="return limitar(event,this.value,100)"


function limitar(e, contenido, tam){
  var unicode=e.keyCode? e.keyCode : e.charCode;
  // Permitimos las siguientes teclas:
  // 8 backspace
  // 46 suprimir
  // 13 enter
  // 9 tabulador
  // 37 izquierda
  // 39 derecha
  // 38 subir
  // 40 bajar
  if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
    return true;
  // Si ha superado el limite de caracteres devolvemos false
  if(contenido.length>=tam)
    return false;
   return true;
}
