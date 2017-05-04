var TABLE_SIZE = 5;
var CELL_SIZE = '30px';
var DELAY = 1; // ms

var t = renderTable(TABLE_SIZE);
var tds = t.querySelectorAll('td');
addCommonStyles();
positionTable(t);
var offset = getCellsOffset(tds);
abcoluteCells(tds);

t.onclick = startAnimation;

function renderTable(size, wrapper) {
    wrapper = wrapper || document.body;
    size = size || 10;
    var table = document.createElement('table');
    for (var i = 0; i < size; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < size; j++) {
            var td = document.createElement('td');
            td.textContent = getRandomInteger(0, 100);
            var mainColor = getRandomHexColor();
            td.style.backgroundColor = mainColor;
            var invertedColor = getInvertedHexColor(mainColor);
            td.style.color = invertedColor;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    wrapper.appendChild(table);
    return table;
}
function getRandomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function addCommonStyles() {
    var styleElement = document.createElement('style');
    styleElement.innerText = "table td {" +
                                "text-align: center; " +
                                "cursor: pointer; " +
                                "line-height: " + CELL_SIZE + "; " +
                                "height: " + CELL_SIZE + "; " +
                                "width: " + CELL_SIZE + "; " +
                                // "border-radius: 50%" +
                              "}";
    styleElement.async = false;
    document.getElementsByTagName('head')[0].appendChild(styleElement);
}

function getRandomHexColor() {
    var symbolsQty = 6;
    var hexColor = '#';
    for (var i = 0; i < symbolsQty; i++) {
        hexColor += getRandomInteger(0, 15).toString(16);
    }
    return hexColor;
}
function getInvertedHexColor(hexColor) {
    var color = hexColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    return "#" + color;
}


function positionTable(t) {
	t.style.position = 'absolute';
	t.style.left = '50%';
	t.style.top = '50%';
	t.style.marginTop = -t.offsetHeight / 2 + 'px';
	t.style.marginLeft = -t.offsetWidth / 2 + 'px';
}


function abcoluteCells(tds) {
	for (var i = 0; i < tds.length; i++) {
		tds[i].style.position = 'absolute';
		tds[i].style.top = offset[i].top + 'px';
		tds[i].style.left = offset[i].left + 'px';
	}
}

function getCellsOffset(tds) {
	var arr = [];
	for (var i = 0; i < tds.length; i++) {
		var rect = tds[i].getBoundingClientRect();
		arr.push({
			top: tds[i].offsetTop,
			left: tds[i].offsetLeft,
			td: tds[i]
		});
	}
	return arr;
}

function animate(tds) {

	for (var i = 0; i < tds.length; i++) {

		switch (tds[i].direction) {
			case 'top':
				tds[i].style.top = parseInt(tds[i].style.top) - getRandomInteger(0,10) + 'px';
				box=tds[i].getBoundingClientRect();
				if(box.top+parseInt(TABLE_SIZE)<=21){
				    tds[i].getRandomDirection();
                    tds[i].getRandomColor();
                }
				break;
            case 'top-left':
                tds[i].style.top = parseInt(tds[i].style.top) - getRandomInteger(0,10) + 'px';
                tds[i].style.left = parseInt(tds[i].style.left) - getRandomInteger(0,10) + 'px';
                box=tds[i].getBoundingClientRect();
                if(box.top+parseInt(TABLE_SIZE)<=20||box.left+parseInt(TABLE_SIZE)<=21){
                    tds[i].getRandomDirection();
                    tds[i].getRandomColor();
                }
                break;
            case 'top-right':
                tds[i].style.top = parseInt(tds[i].style.top) - getRandomInteger(0,10) + 'px';
                tds[i].style.left = parseInt(tds[i].style.left) + getRandomInteger(0,10) + 'px';
                box=tds[i].getBoundingClientRect();
                if(box.top+parseInt(TABLE_SIZE)<=20||box.right+parseInt(TABLE_SIZE)>=document.documentElement.clientWidth-21){
                    tds[i].getRandomDirection();
                    tds[i].getRandomColor();
                }
                break;
			case 'bottom':
				tds[i].style.top = parseInt(tds[i].style.top) + getRandomInteger(0,10) + 'px';
                box=tds[i].getBoundingClientRect();
                if(box.bottom+parseInt(TABLE_SIZE)>=document.documentElement.clientHeight-21){
                    tds[i].getRandomDirection();
                    tds[i].getRandomColor();
                }
				break;
            case 'bottom-left':
                tds[i].style.top = parseInt(tds[i].style.top) + getRandomInteger(0,10) + 'px';
                tds[i].style.left = parseInt(tds[i].style.left) - getRandomInteger(0,10) + 'px';
                box=tds[i].getBoundingClientRect();
                if(box.bottom+parseInt(TABLE_SIZE)>=document.documentElement.clientHeight-21||box.left+parseInt(TABLE_SIZE)<=21){
                    tds[i].getRandomDirection();
                    tds[i].getRandomColor();
                }
                break;
            case 'bottom-right':
                tds[i].style.top = parseInt(tds[i].style.top) + getRandomInteger(0,10) + 'px';
                tds[i].style.left = parseInt(tds[i].style.left) + getRandomInteger(0,10) + 'px';
                box=tds[i].getBoundingClientRect();
                if(box.bottom+parseInt(TABLE_SIZE)>=document.documentElement.clientHeight-21||box.right+parseInt(TABLE_SIZE)>=document.documentElement.clientWidth-21){
                    tds[i].getRandomDirection();
                    tds[i].getRandomColor();
                }
                break;
			case 'left':
				tds[i].style.left = parseInt(tds[i].style.left) - getRandomInteger(0,10) + 'px';
                box=tds[i].getBoundingClientRect();
                if(box.left+parseInt(TABLE_SIZE)<=21){
                    tds[i].getRandomDirection();
                    tds[i].getRandomColor();
                }
				break;
			case 'right':
				tds[i].style.left = parseInt(tds[i].style.left) + getRandomInteger(0,10) + 'px';
                box=tds[i].getBoundingClientRect();
                if(box.right+parseInt(TABLE_SIZE)>=document.documentElement.clientWidth-21){
                    tds[i].getRandomDirection();
                    tds[i].getRandomColor();
                }
				break;

		}
	}
}
getRandomDirection(tds);

function startAnimation() {
	setInterval(function() {
		animate(tds);
	}, DELAY);
}

function getRandomDirection(tds) {
	var arr = ['top', 'left', 'right', 'bottom'];
	 // 0 ... 3
    for (var i=0;i<tds.length;i++){
        tds[i].getRandomDirection=function () {
            var arr = ['top', 'top-left', 'left', 'bottom-left', 'right', 'top-right', 'bottom-right', 'bottom'];
            var int = getRandomInteger(0, arr.length - 1);
            this.direction=arr[int];
        };
        tds[i].getRandomColor=function(){


            hexColor=this.style.backgroundColor= getRandomHexColor();
            this.style.color=getInvertedHexColor(hexColor);

        };
        tds[i].getRandomColor();
        tds[i].getRandomDirection();
    }

}







