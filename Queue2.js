función  Queue ( )  {
esta . dataStore  =  [ ] ;
esta . enqueue  =  enqueue ;
esta . dequeue  =  dequeue ;
esta . frente  =  frente ;
esta . atrás  =  atrás ;
esta . toString  =  toString ;
esta . vacío  =  vacío ;
}
función  enqueue ( elemento )  {
esta . dataStore . empujar ( elemento ) ;
}
función  dequeue ( )  {
devuelve  esto . dataStore . shift ( ) ;
}
función  front ( )  {
devuelve  esto . dataStore [ 0 ] ;
}
función  back ( )  {
devuelve  esto . dataStore [ esto . dataStore . longitud - 1 ] ;
}
función  toString ( )  {
var  retStr  =  "" ;
for  ( var  i  =  0 ;  i  <  this . dataStore . length ;  ++ i )  {
retStr  + =  esto . dataStore [ i ]  +  "\ n" ;
}
volver  retStr ;
}
función  vacía ( )  {
if  ( this . dataStore . length  ==  0 )  {
volver  verdadero ;
}
más  {
devuelve  falso ;
}
}
// Programa de prueba
var  q  =  nueva  cola ( ) ;
q . poner en cola ( "Meredith" ) ;
q . poner en cola ( "Cynthia" ) ;
q . poner en cola ( "Jennifer" ) ;

consola . log ( q . toString ( ) ) ;
q . dequeue ( ) ;
consola . log ( q . toString ( ) ) ;
consola . log ( "Principio de la cola:"  +  q . front ( ) ) ;
consola . log ( "Ultimo de la cola:"  +  q . back ( ) ) ;
