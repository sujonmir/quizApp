function result() {
    let name = document.getElementById("name").value;
    let score = 0;
    if (document.getElementById('c1').checked) {
        score++
    }
    if (document.getElementById('c2').checked) {
        score++
    }
    if (document.getElementById('c31').checked || document.getElementById('c32').checked || document.getElementById('c33').checked) {
        score++
    }
    if (document.getElementById('c4').checked) {
        score++
    }
    if (document.getElementById('c5').checked) {
        score++
    }
    if (document.getElementById('c6').checked) {
        score++
    }
    if (document.getElementById('c7').checked) {
        score++
    }
    if (document.getElementById('c8').checked) {
        score++
    }
    if (document.getElementById('c9').checked) {
        score++
    }
    if (document.getElementById('c10').checked) {
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