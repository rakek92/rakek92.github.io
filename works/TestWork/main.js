var data;
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://kde.link/test/get_field_size.php', false);
xhr.onload = function () {
    try {
        data = JSON.parse(this.responseText);
        console.log('Data was successfully received and parsed\n\t', data);
    } catch (e) {
        console.warn('Warning! Invalid json data was received!');
        data = {};
    }
};
xhr.onerror = function () {
    console.error('XHR error: ' + this.status);
};
xhr.send();
document.querySelector('.start').addEventListener('click', start);

function start() {
    scoreId=0;
    timerId=0;
    this.style.display = 'none';
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var imgNum = (data.width * data.height) / 2;//number of imgs
    var imgs = [];
    for (var i = 0; i < imgNum; i++) {
        imgs.push('https://kde.link/test/' + i + '.png');
        imgs.push('https://kde.link/test/' + i + '.png');
        if (i >= 9) {
            i = 0;
            imgNum = imgNum - 9;
        }
    }


    var table = document.createElement('table');
    table.className = 'field';
    document.querySelector('.content').appendChild(table);
    for (i = 0; i < data.height; i++) {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (j = 0; j < data.width; j++) {
            var td = document.createElement('td');
            td.className = 'field_item';
            tr.appendChild(td);
            img = document.createElement('img');
            var randSrc = random(0, imgs.length - 1);
            img.src = imgs[randSrc];
            img.style.visibility='hidden';
            imgs.splice(randSrc, 1);
            td.appendChild(img);
        }
    }

    table.addEventListener('click', show);
    function show(event) {
        var target = event.target;
        while (target != table) {
            if (target.tagName == 'TD') {
                highlight(target);
                return;
            }
            target = target.parentNode;
        }
    }

    var checkArr = [];

    function highlight(node) {
        if (checkArr.length < 2&&node.children[0].style.visibility !== 'visible') {
            node.children[0].style.visibility = 'visible';


            checkArr.push(node.children[0]);
            setTimeout(check, 1500);
            function check() {
                if (checkArr[1] && checkArr[1].src !== checkArr[0].src) {
                    checkArr[1].style.visibility = 'hidden';
                    checkArr[0].style.visibility = 'hidden';
                }
                if (checkArr[1]) {
                    checkArr = [];

                }
            }

        }
    }
    createWatch();
    createScore();
    function createWatch() {
        var watch = document.createElement('div');
        watch.className = 'watch';
        function clock() {

            var seconds = 0;
            return function tik() {
                endGame();
                function endGame(){
                    imgs=document.querySelectorAll('img');
                    for (var i=0;i<imgs.length;i++){
                        if(imgs[i].style.visibility==='hidden'){
                            return;
                        }
                    }
                    clearInterval(timerId);
                    clearInterval(scoreId);
                    alert(watch.textContent +' '+ document.querySelector('.score').textContent);
                }
                seconds++;
                watch.textContent = 'Time: ' + seconds;
            }
        }
        watch.textContent = 'Time: ';
        watch.className='watch';
        document.querySelector('.content').appendChild(watch);
        timerId=setInterval(clock(), 1000);
    }
    function createScore() {
         var score = document.createElement('div');
            score.className = 'score';
            function scoreDispl() {
              var points = 1000;
              return function tik() {
                 points--;
                 score.textContent = 'Score: ' + points;
              }
         }
         score.textContent = 'Score: ';
         score.className='score';
         document.querySelector('.content').appendChild(score);
         scoreId=setInterval(scoreDispl(), 1000);
    }
}




