function comprobar(palabra)
{
   var nuevapalabra = palabra.replace(/ /g, '');
   var j = nuevapalabra.length-1;
   var palindromo = true;
   for(i=0; i<j; i++)
   {
      if(nuevapalabra[i]!==nuevapalabra[j])
      {
         palindromo = false;
      }
      j--;

   }

   if(palindromo)
   {
      document.write("Es un palindromo");
   } 
   else 
   {
      document.write("No es un palindromo");
   }
}