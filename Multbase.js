función  mulBase ( num ,  base )  {
función  Stack ( ) { 
var  s = [ ] ;
hacer  {
s . empujar ( num % base ) ;
num  =  Matemáticas . piso ( num / = base ) ;
}  while  ( num  >  0 ) ;
var  convertido  =  "" ;
while  ( s . length ( )  >  0 )  {
convertido  + =  s . pop ( ) ;
}
volver  convertido ;
}
}
var  num  =  32 ;
 base  var =  2 ;
var  newNum  =  mulBase ( num ,  base ) ;
consola . log ( num  +  "convertido a base"  +  base  +  "es"  +  newNum ) ;
num  =  125 ;
base  =  8 ;
var  newNum  =  mulBase ( num ,  base ) ;
consola . log ( num  +  "convertido a base"  +  base  +  "es"  +  newNum ) ;
