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
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        if (localStorage.name || localStorage.score) {
            delete localStorage.name;
            delete localStorage.score;
        }
        localStorage.name_ = name
        if (localStorage.bestScore_ < score) {
            localStorage.bestScore_ = score
        } else if (localStorage.bestScore_ == undefined) {
            localStorage.bestScore_ = score
        } else {

        }
        localStorage.score_ = score

    } else {
        alert('Your device is not support localStorage!')
    }

    document.getElementById('body').innerHTML = '<span class="allOutput">' + name + ', YOUR SCORE IS: <span class="scoreOut"><br>' + score + '</span><br>' + 'AND YOUR Highest SCORE IS: <span class="bestScoreOut"><br>' + localStorage.bestScore_ + '</span><br><a href="index.html" class="retake">retake</a></span>' + '<div class="ttaken">You took the test <span class="clickC">' + localStorage.clickcount + '</span> times in total<div>'
}
