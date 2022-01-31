var text= document.getElementById('txt1');
function dis(val) {
    text.value += val;
}
function mod(val) {
   text.value += val;
}
function solve() {
    let x =text.value;
    text.value = eval(x);
   
}
function clr() {
    text.value = "";
}

function displaytrig() {
    document.getElementById('btncos').style.display = "inline-block";
    document.getElementById('btnsine').style.display = "inline-block";
    document.getElementById('btntan').style.display = "inline-block";
}

function sqrt() {
    text.value = Math.sqrt(text.value, 1 / 2)
}
function back() {
    var value = text.value;
    text.value = value.substr(0, value.length - 1);
}
function pi() {
    var pai = text.value;
    text.value = pai * 3.141;
}
function logarithm() {
    var logarit = text.value;
    text.value = Math.log10(logarit);
   
}
function lan() {
    var logarit = text.value;
    text.value= Math.log(logarit);
   
}
function square() {
    var squared =text.value;
    text.value = Math.pow(squared, 2);
   
}
function exp() {
    var ex = text.value;
    text.value= Math.exp(ex);
    
}

function powfun() {
    var p = text.value;
    text.value = Math.pow(p, 2);
    
}
function absfun() {
    var a =  text.value;
    text.value= Math.abs(a);
    
}

function cos() {
    var trignometry = text.value;
    text.value = Math.cos(trignometry);
    

}
function sine() {
    var trignometry =  text.value;
    text.value = Math.sin(trignometry);

}
function tan() {
    var trignometry =  text.value;
    text.value= Math.tan(trignometry);
 

}
function deg() {
    var trignometry =  text.value;
    text.value = Math.tan(trignometry * (Math.PI / 180))
    //same for cos and tan
}

function fact() {
    var n =  text.value;
    let answer = 1;
    if (n == 0 || n == 1) {
        answer = 1;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }

    }

    text.value= answer;
}

function onebyX() {
    var Res = eval('1/' +  text.value);
    text.value = Res;
}
function e() {
    text.value = Math.E;

}
function plusminus() {
    text.value = 0 -  text.value;
}
var m = 0;
function m() {
    var m = 0;
}
function mplus() {
    m = m * 1 +  text.value * 1;
    text.value = m;
}
function mminus() {
    m = m * 1 -  text.value * 1;
    text.value = m;
}
function mr() {
    text.value = m
}
