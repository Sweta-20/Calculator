function dis(val) {
    document.getElementById('txt1').value += val;
}
function mod(val) {
    document.getElementById('txt1').value += val;
}
function solve() {
    let x = document.getElementById('txt1').value;
    let y = eval(x);
    document.getElementById('txt1').value = y;
}
function clr() {
    document.getElementById('txt1').value = "";
}
function add() {
    var add = btnadd.value;
    document.getElementById('txt1').value += add;
}
function displaytrig() {
    document.getElementById('btncos').style.display = "inline-block";
    document.getElementById('btnsine').style.display = "inline-block";
    document.getElementById('btntan').style.display = "inline-block";
}

function sqrt() {
    document.getElementById('txt1').value = Math.sqrt(document.getElementById('txt1').value, 1 / 2)
}
function back() {
    var value = document.getElementById("txt1").value;
    document.getElementById("txt1").value = value.substr(0, value.length - 1);
}
function pi() {
    var pai = document.getElementById("txt1").value;
    var paai = pai * 3.141;
    document.getElementById("txt1").value = paai;
}
function logarithm() {
    var logarit = document.getElementById("txt1").value;
    var legit = Math.log10(logarit);
    document.getElementById("txt1").value = legit;
}
function lan() {
    var logarit = document.getElementById("txt1").value;
    var legit = Math.log(logarit);
    document.getElementById("txt1").value = legit;
}
function square() {
    var squared = document.getElementById("txt1").value;
    var redeeemd = Math.pow(squared, 2);
    document.getElementById("txt1").value = redeeemd;
}
function exp() {
    var ex = document.getElementById("txt1").value;
    var redeeemd = Math.exp(ex);
    document.getElementById("txt1").value = redeeemd;
}

function powfun() {
    var p = document.getElementById("txt1").value;
    var pow = Math.pow(p, 2);
    document.getElementById("txt1").value = pow;
}
function absfun() {
    var a = document.getElementById("txt1").value;
    var abs = Math.abs(a);
    document.getElementById("txt1").value = abs;
}

function cos() {
    var trignometry = document.getElementById("txt1").value;
    var result = Math.cos(trignometry);
    document.getElementById("txt1").value = result;

}
function sine() {
    var trignometry = document.getElementById("txt1").value;
    var result = Math.sin(trignometry);
    document.getElementById("txt1").value = result;
}
function tan() {
    var trignometry = document.getElementById("txt1").value;
    var result = Math.tan(trignometry);
    document.getElementById("txt1").value = result;

}
function deg() {
    var trignometry = document.getElementById("txt1").value;
    document.getElementById("txt1").value = Math.tan(trignometry * (Math.PI / 180))
    //same for cos and tan
}

function fact() {
    var n = document.getElementById("txt1").value;
    let answer = 1;
    if (n == 0 || n == 1) {
        answer = 1;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }

    }

    document.getElementById("txt1").value = answer;
}

function onebyX() {
    var Res = eval('1/' + document.getElementById("txt1").value);
    document.getElementById("txt1").value = Res;
}
function e() {
    document.getElementById("txt1").value = Math.E;

}
function plusminus() {
     document.getElementById("txt1").value = 0 - document.getElementById("txt1").value;
}
var m = 0;
function m() {
    var m = 0;
}
function mplus() {
    m = m * 1 + document.getElementById("txt1").value * 1;
    document.getElementById("txt1").value = m;
}
function mminus() {
    m = m * 1 - document.getElementById("txt1").value * 1;
    document.getElementById("txt1").value = m;
}
function mr() {
    document.getElementById("txt1").value = m
}