function comprobar(palabra)
{
   var mayus = false;
   var minus = false;
   for(i = 0; i<palabra.length;i++)
   {
      if(palabra[i] === palabra[i].toUpperCase()) 
      {
         mayus = true;
      }
      else 
      {
         minus = true;
      }
   }

   if(mayus == true && minus == true)
   {
      document.write("Hay tanto mayusculas como minusculas");
   }
   else if (mayus == true && minus == false)
   {
      document.write("Hay solo mayusculas");
   }
   else if (mayus == false && minus == true)
   {
      document.write("Hay solo minusculas");
   }
}