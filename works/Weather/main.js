Date.prototype.getMonthName = function() {

    var month = ['Jan','Feb','Mar','Apr','May','Jun',
        'Jul','Aug','Sep','Oct','Nov','Dec'];
    return month[this.getMonth()];
};


var xhr =new XMLHttpRequest();
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&APIKEY=77812f90c1de45c1117ddeff04dbe265', true);
xhr.send();
xhr.onreadystatechange = function(ev) {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);

        var img=document.createElement('img');
        img.src='http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        img.className='icon';
        document.querySelector('.widget').appendChild(img);

        var temp=document.createElement('div');
        temp.className='temp';
        temp.textContent=Math.round(data.main.temp-273.15)+' C°';
        document.querySelector('.widget').appendChild(temp);

        var city=document.createElement('div');
        city.className='city';
        city.textContent=data.name;
        document.querySelector('.widget').appendChild(city);

        var watch = document.createElement('div');
        watch.className = 'watch';
        var date = new Date();
        minutes=date.getMinutes();
        if(minutes<10){
            minutes='0'+minutes;
        }
        hours=date.getHours();
        if(hours<10){
            hours='0'+hours;
        }
        time = hours + ':' + minutes;
        var year=date.getFullYear();
        var month=date.getMonthName();
        var day=date.getDate();
        var curDate;
        curDate=document.createElement('div');
        curDate.textContent=day+' '+ month+' '+year;
        watch.textContent = time;
        curDate.className='curDate';
        document.querySelector('.widget').appendChild(curDate);
        document.querySelector('.widget').appendChild(watch);

        setInterval(createWatch, 1000);


        function createWatch() {
            var date = new Date();
            minutes=date.getMinutes();
            if(minutes<10){
                minutes='0'+minutes;
            }
            hours=date.getHours();
            if(hours<10){
                hours='0'+hours;
            }
            time = hours + ':' + minutes;
            var year=date.getFullYear();
            var month=date.getMonthName();
            var day=date.getDate();


            curDate.textContent=day+' '+ month+' '+year;
            watch.textContent = time;
        }


        var humidity=document.createElement('div');
        humidity.textContent='Влажность: '+data.main.humidity+' %';
        document.querySelector('.widget').appendChild(humidity);
        humidity.className='humidity';



        var pressure=document.createElement('div');
        pressure.textContent='Давление: '+Math.round(data.main.pressure*0.00750062)+' мм рт ст';
        pressure.className='pressure';
        document.querySelector('.widget').appendChild(pressure);

        var descr=document.createElement('div');
        descr.className='descr';
        descr.textContent= data.weather[0].description.toUpperCase();
        document.querySelector('.widget').appendChild(descr);

        var wind=document.createElement('div');
        wind.className='wind';
        var windDeg=data.wind.deg;
        if(windDeg>=335||windDeg<=25){
            windDeg=' северный'
        }
        if(windDeg>=25){
            windDeg=' северо-западный'
        }
        if(windDeg>=70){
            windDeg=' западный'
        }
        if(windDeg>=115){
            windDeg=' юго-восточный'
        }
        if(windDeg>=160){
            windDeg=' южный'
        }
        if(windDeg>=205){
            windDeg=' юго-западный'
        }
        if(windDeg>=250){
            windDeg='  восточный'
        }
        if(windDeg>=295){
            windDeg=' северо-восточный'
        }
        wind.textContent='Ветер: '+data.wind.speed+' м/с'+windDeg;
        document.querySelector('.widget').appendChild(wind);
    }
};