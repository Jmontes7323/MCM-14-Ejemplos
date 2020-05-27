función  Stack ( )  {
esta . dataStore  =  [ ] ;
esta . arriba  =  0 ;
esta . empujar  =  empujar ;
esta . pop  =  pop ;
esta . peek  =  peek ;
esta . claro  =  claro ;
esta . longitud  =  longitud ;
}
función  push ( elemento )  {
esta . dataStore [ esto . top ++ ]  =  elemento ;
}
función  peek ( )  {
devuelve  esto . dataStore [ esto . arriba - 1 ] ;
}
función  pop ( )  {
devuelve  esto . dataStore [ - esto . arriba ] ;
}
función  clara ( )  {
esta . arriba  =  0 ;
}
 longitud de la función ( )  {
devuelve  esto . arriba ;
}
var  s  =  nueva  pila ( ) ;
s . empujar ( "David" ) ;
s . empujar ( "Raymond" ) ;
s . empujar ( "Bryan" ) ;
consola . log ( "Longitud:"  +  s . longitud ( ) ) ;
consola . log ( s . peek ( ) ) ;
var  estalló  =  s . pop ( ) ;
consola . log ( "Elemento descartado:"  +  reventado ) ;
consola . log ( s . peek ( ) ) ;
s . empujar ( "Cynthia" ) ;
consola . log ( s . peek ( ) ) ;
s . claro ( ) ;
consola . log ( "Longitud:"  +  s . longitud ( ) ) ;
consola . log ( s . peek ( ) ) ;
s . empujar ( "Clayton" ) ;
consola . log ( s . peek ( ) ) ;
consola . log ( "Longitud:"  +  s . longitud ( ) ) ;
