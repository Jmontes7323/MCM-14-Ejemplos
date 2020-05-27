función  esPalindrome ( palabra )  {
función  Stack ( ) {
var  s  =  [ ] ;
para  ( var  i  =  0 ;  i  <  palabra . longitud ;  ++ i )  {
s . empujar ( palabra [ i ] ) ;
}
var  rword  = "" ;
while  ( s . length ( )  >  0 )  {
rword  + =  s . pop ( ) ;
}
if  ( palabra  ==  rword )  {
volver  verdadero ;
}
más  {
	devuelve  falso ;
}
}
}
var  palabra  =  "hola" ;
if  ( isPalindrome ( word ) )  {
consola . log ( palabra  +  "es palindroma" ) ;
}
más  {
consola . log ( palabra  +  "no es palindroma" ) ;
}
palabra  =  "cívico"
if  ( isPalindrome ( word ) )  {
consola . log ( palabra  +  "es palindroma" ) ;
}
más  {
consola . log ( palabra  +  "no es palíndromo" ) ;
}
