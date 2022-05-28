function result() {
    let name = document.getElementById("name").value;
    let score = 0;
    let c1 = document.getElementById('c1').checked
    let c2 = document.getElementById('c2').checked
    let c3 = document.getElementById('c31').checked || document.getElementById('c32').checked || document.getElementById('c33').checked
    let c4 = document.getElementById('c4').checked
    let c5 = document.getElementById('c5').checked
    let c6 = document.getElementById('c6').checked
    let c7 = document.getElementById('c7').checked
    let c8 = document.getElementById('c8').checked
    let c9 = document.getElementById('c9').checked
    let c10 = document.getElementById('c10').checked
    if (c1) {
        score++
    }
    if (c2) {
        score++
    }
    if (c3) {
        score++
    }
    if (c4) {
        score++
    }
    if (c5) {
        score++
    }
    if (c6) {
        score++
    }
    if (c7) {
        score++
    }
    if (c8) {
        score++
    }
    if (c9) {
        score++
    }
    if (c10) {
        score++
    }
    if (name == "") {
        alert("Username must be filled out");
        return false;
    }
    if (score !== 10) {
        score = '0' + score
    }
    
    document.write('<center >' + '<h1 style="font-size: 80px;margin-top: 100px;text-transform:uppercase">' +
        name + ', your score is: ' + '<div style="color:#F30000;display:block; font-size: 198px">' + score + '</div>' + '</h1>' + '</center>')

}