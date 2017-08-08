var tablero = document.getElementById('tablero');
var right = document.getElementById('right');
var left = document.getElementById('left');
var move = document.getElementById('move');
var play = document.getElementById('play');

var mapa=[
"******************",
"*_________*______*",
"*_******____******",
"*______***__*__*_*",
"***_*____*____**_*",
"*___*____**__*___*",
"*_********__**_*_*",
"*____*______*__*_*",
"*_**_*__*****_**_*",
"*o*__*________**W*",
"******************"];

var directions = ['flechas/left.png',"flechas/up.png","flechas/right.png","flechas/down.png"]

var arrayMapa = [];
for (var i = 0; i < mapa.length; i++) {
  for (var j = 0; j < mapa[i].length; j++) {
    var M= mapa[i].split("");
  }
  arrayMapa.push(M);
}

var n = mapa.length;
var m = mapa[0].length;

var tabla = document.createElement('table');
tabla.border = "0";
for (var i = 0; i < n; i++) {
  var fila = document.createElement('tr');
  for (var j = 0; j < m; j++) {
    var celda = document.createElement('td');
    if (mapa[i][j] == "*") {
      celda.setAttribute('class', 'pared');
    }else if(mapa[i][j] == "o") {
      celda.setAttribute('class','inicio')
      var x = i;
      var y = j;
    }else if(mapa[i][j] == "W") {
      celda.setAttribute('class','final')
    }else{
      celda.setAttribute('class','blanco');
    }
    fila.appendChild(celda);
    arrayMapa[i][j] = celda;
  }
  tabla.appendChild(fila);
}
tablero.appendChild(tabla);


var click = 0;

left.onclick = function () {
  
  if (click<= 0){
    click = 4;
  }
  arrayMapa[x][y].style.backgroundImage = "url("+directions[click-1]+")";
  click = click - 1;
  console.log(click);
}

right.onclick = function () {

  if (click >= 3){
    click = -1;
  }  
  arrayMapa[x][y].style.backgroundImage = "url("+directions[click+1]+")";
  click = click + 1;
  
  console.log(click);
}


var init = document.getElementsByClassName("inicio")[0]
var finit = document.getElementsByClassName("final")[0]
move.onclick = function () {
  if (click == 1 && mapa[x-1][y]=="_"){
    arrayMapa[x-1][y].style.backgroundImage = "url("+directions[1]+")";
    arrayMapa[x][y].style.backgroundImage = "url(flechas/point.png)";
    init.style.backgroundImage = "url(flechas/init1.png)";
    finit.style.backgroundImage = "url(flechas/init.png)";
    x=x-1;
  }
  if (click == 2 && mapa[x][y+1]=="_"){
    arrayMapa[x][y+1].style.backgroundImage = "url("+directions[2]+")";
    arrayMapa[x][y].style.backgroundImage = "url(flechas/point.png)";
    init.style.backgroundImage = "url(flechas/init1.png)";
    finit.style.backgroundImage = "url(flechas/init.png)";
    y=y+1;
  }
  if (click == 3 && (mapa[x+1][y]=="_" || mapa[x+1][y]=="W" )){
    arrayMapa[x+1][y].style.backgroundImage = "url("+directions[3]+")";
    arrayMapa[x][y].style.backgroundImage = "url(flechas/point.png)";
    init.style.backgroundImage = "url(flechas/init1.png)";
    finit.style.backgroundImage = "url(flechas/init.png)";

    if( mapa[x+1][y]=="W" ){
      alert("Ganaste...!")
    }
    x=x+1;
  }
  if (click == 0 && mapa[x][y-1]=="_"){
    arrayMapa[x][y-1].style.backgroundImage = "url("+directions[0]+")";
    arrayMapa[x][y].style.backgroundImage = "url(flechas/point.png)";
    init.style.backgroundImage = "url(flechas/init1.png)";
    finit.style.backgroundImage = "url(flechas/init.png)";
    y=y-1;
  }
}

/*
left.onclick = function () {
  arrayMapa[x][y].style.backgroundImage = "url("+directions[click-2]+")"
  click = click - 1;
  if (click==1){
    click = 5;
  }
  console.log(click);
}
*/