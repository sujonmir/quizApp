function result() {
    let name = document.getElementById("name").value;
    let score = 0;
    function scoreUpdateByID(a) {
        if (document.getElementById(a).checked) { score++ }
        return score
    }
    scoreUpdateByID('c1')
    scoreUpdateByID('c2')
    scoreUpdateByID('c31')
    scoreUpdateByID('c32')
    scoreUpdateByID('c33')
    scoreUpdateByID('c4')
    scoreUpdateByID('c5')
    scoreUpdateByID('c6')
    scoreUpdateByID('c7')
    scoreUpdateByID('c8')
    scoreUpdateByID('c9')
    scoreUpdateByID('c10')
    if (name == "") { return false; }
    if (score !== 10) {
        score = '0' + score
    }

    document.write('<center >' + '<h1 style="font-size: 80px;margin-top: 100px;text-transform:uppercase">' +
        name + ', your score is: ' + '<div style="color:#F30000;display:block; font-size: 198px">' + score + '</div>' + '</h1>' + '</center>')
}