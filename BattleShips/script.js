
//function PvP(){
 //   document.getElementsByClassName('wrapper')[0].style.display='none'

    var player1=prompt('Player 1','')
    var player2=prompt('Player 2','')
    var firstPlayer=document.getElementsByClassName('playerName1');
    var secondPlayer=document.getElementsByClassName('playerName2');
    firstPlayer[0].innerHTML=player1;
    secondPlayer[0].innerHTML=player2;
    var rankingCounter={
        fourCount:0,
        threeCount:0,
        twoCount:0,
        oneCount:0
        }
    function Square(){
        this.opened=false;
        this.ship=null;
    }
    function Array(){
        var arr=[], id=0;
        for (var i=0;i<10;i++){
            arr[i]=[];
            for(var j=0;j<10;j++){
                arr[i][j]=new Square();
                var square=document.createElement('div');
                square.className='square';
                square.id=id;
                id++
                var field1= document.getElementsByClassName('field1');
                field1[0].appendChild(square);
            }
        }
        return arr;
    }

    console.table(Array())
    function ranking4(){//debugger
        var background='background-color:grey';
            square=document.getElementsByClassName('square');
            for (var i=0; i<square.length;i++){
                square[i].onmouseover= function(){
                   if (rankingCounter.fourCount<1){ 
                   var second=document.getElementById(+this.id+10);
                   var third=document.getElementById(+this.id+20);
                   var fourth=document.getElementById(+this.id+30);
                  
                       second.style.cssText= background;
                       third.style.cssText= background;
                       fourth.style.cssText= background;
                 } 
                 }

                square[i].onmouseout= function(){

                   var second=document.getElementById(+this.id+10);
                   var third=document.getElementById(+this.id+20);
                   var fourth=document.getElementById(+this.id+30);
                   second.style.cssText= '';
                   third.style.cssText='';
                   fourth.style.cssText='';

                }
                square[i].onclick= function makeCounter(){
                if (rankingCounter.fourCount<1){ 
                    
                    var second=document.getElementById(+this.id+10);
                    var third=document.getElementById(+this.id+20);
                    var fourth=document.getElementById(+this.id+30);
                    var near=[];
                    if(this.nearShip!==true&&second.nearShip!==true&&third.nearShip!==true&&fourth.nearShip!==true){
                        
                        near.push(document.getElementById(+this.id-10))
                        /*---------------------right side--------------*/
                        if (this.id!='9'&&this.id[1]!='9'&&this.id[2]!='9'){
                        near.push(document.getElementById(+this.id-9))
                        near.push(document.getElementById(+this.id+1))
                        near.push(document.getElementById(+this.id+11))
                        near.push(document.getElementById(+this.id+21))
                        near.push(document.getElementById(+this.id+31))
                        near.push(document.getElementById(+this.id+41))
                        }
                        /*--------------------right side--------------*/
                        /*--------------------left side--------------*/
                        if (+this.id%10!=0){
                        near.push(document.getElementById(+this.id-11))
                        near.push(document.getElementById(+this.id-1))
                        near.push(document.getElementById(+this.id+9))
                        near.push(document.getElementById(+this.id+19))
                        near.push(document.getElementById(+this.id+29))
                        near.push(document.getElementById(+this.id+39))
                        }
                        near.push(document.getElementById(+this.id+40))
                        
                            for(var i=0;i<near.length;i++){
                                if(near[i]){
                                near[i].nearShip=true;}
                            }hideImg();

                        console.log(near)

                    
                    this.className='square ship';
                    this.ship=true;
                    
                    second.className='square ship';
                    second.ship=true;
                    third.className='square ship';
                    third.ship=true;
                    fourth.className='square ship';
                    fourth.ship=true;
                    rankingCounter.fourCount++; 
                    hideImg();   
                   } 
                }
            }
        }
    }

    function ranking3(){//debugger
        var counter=0;
        var background='background-color:grey';
            square=document.getElementsByClassName('square');
            for (var i=0; i<square.length;i++){
                square[i].onmouseover= function(){
                   if (rankingCounter.threeCount<2){
                   var second=document.getElementById(+this.id+10);
                   var third=document.getElementById(+this.id+20);
                   
                       second.style.cssText= background;
                       third.style.cssText= background;
                    }
                }

                square[i].onmouseout= function(){
                   var second=document.getElementById(+this.id+10);
                   var third=document.getElementById(+this.id+20);
                   second.style.cssText= '';
                   third.style.cssText='';
                }
                square[i].onclick= function makeCounter(){
                    
                if (rankingCounter.threeCount<2){ 
                    var second=document.getElementById(+this.id+10);
                    var third=document.getElementById(+this.id+20);
                    var near=[];
                    if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&third.nearShip!==true){
                        
                         /*---------------------right side--------------*/
                        if (this.id!='9'&&this.id[1]!='9'&&this.id[2]!='9'){
                        near.push(document.getElementById(+this.id-9));
                        near.push(document.getElementById(+this.id+1));
                        near.push(document.getElementById(+this.id+11));
                        near.push(document.getElementById(+this.id+21));
                        near.push(document.getElementById(+this.id+31));
                        
                        }
                        /*--------------left side---------------------*/
                        if (+this.id%10!=0){
                        near.push(document.getElementById(+this.id-11));
                        near.push(document.getElementById(+this.id-1));
                        near.push(document.getElementById(+this.id+9));
                        near.push(document.getElementById(+this.id+19));
                        near.push(document.getElementById(+this.id+29));
                        }
                        near.push(document.getElementById(+this.id+30));
                        near.push(document.getElementById(+this.id-10));
                        
                        
                            for(var i=0;i<near.length;i++){
                                if(near[i]){
                                near[i].nearShip=true;}
                            }

                        this.className='square ship';
                        this.ship=true;
                        second.className='square ship';
                        second.ship=true;
                        third.className='square ship';
                        third.ship=true;
                        rankingCounter.threeCount++;    
                        hideImg();
                    }
                }
            }
        }
    }
    function ranking2(){//debugger
        var counter=0;
        var background='background-color:grey';
        
            square=document.getElementsByClassName('square');
            for (var i=0; i<square.length;i++){
                square[i].onmouseover= function(){
                    if (rankingCounter.twoCount<3){
                       var second=document.getElementById(+this.id+10);
                       second.style.cssText= background;
                    }
                }

                square[i].onmouseout= function(){
                   var second=document.getElementById(+this.id+10);
                   var third=document.getElementById(+this.id+20);
                  
                    second.style.cssText= '';
                   
                }
                square[i].onclick= function makeCounter(){
                   
                if (rankingCounter.twoCount<3){ 
                    var second=document.getElementById(+this.id+10);
                    var near=[];
                    if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&second.ship!==true){
                        /*---------------right side--------------------*/
                        if (this.id!='9'&&this.id[1]!='9'&&this.id[2]!='9'){
                        near.push(document.getElementById(+this.id-9));
                        near.push(document.getElementById(+this.id+1));
                        near.push(document.getElementById(+this.id+11));
                        near.push(document.getElementById(+this.id+21));
                        }
                        /*---------------left side--------------------*/
                        if (+this.id%10!=0){
                        near.push(document.getElementById(+this.id-11));
                        near.push(document.getElementById(+this.id-1));
                        near.push(document.getElementById(+this.id+9));
                        near.push(document.getElementById(+this.id+19));
                        }
                        near.push(document.getElementById(+this.id+20));
                        near.push(document.getElementById(+this.id-10));
                        
                                   
                        for(var i=0;i<near.length;i++){
                            if(near[i]){
                            near[i].nearShip=true;}
                        }
                        this.className='square ship';
                        this.ship=true;
                        second.className='square ship';
                        second.ship=true;
                        rankingCounter.twoCount++;    
                        hideImg();
                     }
                }
            }
        }
    }
    function ranking4g(){
        var counter=0;
        var background='background-color:grey';
            square=document.getElementsByClassName('square');
            for (var i=0; i<square.length;i++){
                square[i].onmouseover= function(){
                    if (rankingCounter.fourCount<1){
                       var second=document.getElementById(+this.id+1);
                       var third=document.getElementById(+this.id+2);
                       var fourth=document.getElementById(+this.id+3);
                       second.style.cssText= background;
                       third.style.cssText= background;
                       fourth.style.cssText= background;
                       if ((this.id=='7'||this.id[1]=='7')&&+this.id<100){
                            fourth.style.cssText='';
                       }
                       if (this.id[2]=='7'&&+this.id>100){
                            fourth.style.cssText='';
                       }


                       if ((this.id=='8'||this.id[1]=='8')&&+this.id<100){
                            third.style.cssText='';
                            fourth.style.cssText= '';
                       }
                       if (this.id[2]=='8'&&+this.id>100){
                            fourth.style.cssText='';
                            third.style.cssText='';
                       }
                       if ((this.id=='9'||this.id[1]=='9')&&+this.id<100){
                            second.style.cssText= '';
                            third.style.cssText= '';
                            fourth.style.cssText= '';
                       }
                       if (this.id[2]=='9'&&+this.id>100){
                            second.style.cssText= '';
                            third.style.cssText= '';
                            fourth.style.cssText= '';
                        }
                    }
                }

                square[i].onmouseout= function(){
                   var second=document.getElementById(+this.id+1);
                   var third=document.getElementById(+this.id+2);
                   var fourth=document.getElementById(+this.id+3);
                   second.style.cssText= '';
                   third.style.cssText='';
                   fourth.style.cssText='';

                }
                square[i].onclick= function makeCounter(){
                    
                if (rankingCounter.fourCount<1){ 
                    var second=document.getElementById(+this.id+1);
                    var third=document.getElementById(+this.id+2);
                    var fourth=document.getElementById(+this.id+3);
                    var near=[];
                    if ((fourth.id[0]==this.id[0]||third.id.length==1)&&+this.id<100){
                        if(this.nearShip!==true&&second.nearShip!==true&&third.nearShip!==true&&fourth.nearShip!==true){
                            if (this.id!='6'&&this.id[1]!='6'&&this.id[2]!='6'){
                              near.push(document.getElementById(+this.id+4))
                              near.push(document.getElementById(+this.id-6))
                              near.push(document.getElementById(+this.id+14))
                              } 
                            if (+this.id%10!=0){
                                near.push(document.getElementById(+this.id-11))
                                
                                near.push(document.getElementById(+this.id-1))
                                near.push(document.getElementById(+this.id+9))
                                }
                            near.push(document.getElementById(+this.id-9))
                            near.push(document.getElementById(+this.id-10))
                            near.push(document.getElementById(+this.id-8))
                            near.push(document.getElementById(+this.id-7))
                            
                            
                            near.push(document.getElementById(+this.id+10))
                            near.push(document.getElementById(+this.id+11))
                            near.push(document.getElementById(+this.id+12))
                            near.push(document.getElementById(+this.id+13))
                            
                                for(var i=0;i<near.length;i++){
                                    if(near[i]){
                                    near[i].nearShip=true;}
                                }

                            this.className='square ship';
                            this.ship=true;
                            second.className='square ship';
                            second.ship=true;
                            third.className='square ship';
                            third.ship=true;
                            fourth.className='square ship';
                            fourth.ship=true;
                            rankingCounter.fourCount++;    
                            hideImg();
                        }
                     }
                     if ((fourth.id[1]==this.id[1]||third.id.length==2)&&+this.id>100){
                        if(this.nearShip!==true&&second.nearShip!==true&&third.nearShip!==true&&fourth.nearShip!==true){
                            if (this.id!='6'&&this.id[1]!='6'&&this.id[2]!='6'){
                              near.push(document.getElementById(+this.id+4))
                              near.push(document.getElementById(+this.id-6))
                              near.push(document.getElementById(+this.id+14))
                              } 
                            if (+this.id%10!=0){
                                near.push(document.getElementById(+this.id-11))
                                
                                near.push(document.getElementById(+this.id-1))
                                near.push(document.getElementById(+this.id+9))
                                }
                            near.push(document.getElementById(+this.id-9))
                            near.push(document.getElementById(+this.id-10))
                            near.push(document.getElementById(+this.id-8))
                            near.push(document.getElementById(+this.id-7))
                            
                            
                            near.push(document.getElementById(+this.id+10))
                            near.push(document.getElementById(+this.id+11))
                            near.push(document.getElementById(+this.id+12))
                            near.push(document.getElementById(+this.id+13))
                            
                                for(var i=0;i<near.length;i++){
                                    if(near[i]){
                                    near[i].nearShip=true;}
                                }

                            this.className='square ship';
                            this.ship=true;
                            second.className='square ship';
                            second.ship=true;
                            third.className='square ship';
                            third.ship=true;
                            fourth.className='square ship';
                            fourth.ship=true;
                            rankingCounter.fourCount++;    
                            hideImg();
                        }
                     }
                }
            }
        }
    }

    function ranking3g(){//debugger
        var counter=0;
        var background='background-color:grey';
            square=document.getElementsByClassName('square');
            for (var i=0; i<square.length;i++){
                square[i].onmouseover= function(){
                   if (rankingCounter.threeCount<2){
                       var second=document.getElementById(+this.id+1);
                       var third=document.getElementById(+this.id+2);
                       second.style.cssText= background;
                       third.style.cssText= background;

                       if ((this.id=='8'||this.id[1]=='8')&&+this.id<100){
                            third.style.cssText='';
                            
                       }
                       if (this.id[2]=='8'&&+this.id>100){
                            third.style.cssText='';
                        }
                       if (this.id=='9'||this.id[1]=='9'&&+this.id<100){
                            second.style.cssText='';
                            second.style.cssText= '';
                            third.style.cssText= '';
                        }
                        if (this.id[2]=='9'&&+this.id>100){
                           second.style.cssText='';
                           second.style.cssText= '';
                           third.style.cssText= '';
                        }
                    }
                }
                square[i].onmouseout= function(){
                   var second=document.getElementById(+this.id+1);
                   var third=document.getElementById(+this.id+2);
                   second.style.cssText= '';
                   third.style.cssText='';
                }
                square[i].onclick= function makeCounter(){
                  
                if (rankingCounter.threeCount<2){ 
                    var second=document.getElementById(+this.id+1);
                    var third=document.getElementById(+this.id+2);
                    var near=[];
                        if ((third.id[0]==this.id[0]||third.id.length==1)&&+this.id<100){
                            if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&third.nearShip!==true){
                                if (this.id!='7'&&this.id[1]!='7'&&this.id[2]!='7'){
                                    near.push(document.getElementById(+this.id-7));
                                    near.push(document.getElementById(+this.id+3));
                                    near.push(document.getElementById(+this.id+13));
                                }
                                if (+this.id%10!=0){
                                    near.push(document.getElementById(+this.id-11));
                                    near.push(document.getElementById(+this.id-1));
                                    near.push(document.getElementById(+this.id+9));
                                }
                                    near.push(document.getElementById(+this.id-10));
                                    near.push(document.getElementById(+this.id-9));
                                    near.push(document.getElementById(+this.id-8));
                                
                                
                                
                                
                                near.push(document.getElementById(+this.id+10));
                                near.push(document.getElementById(+this.id+11));
                                near.push(document.getElementById(+this.id+12));
                                
                                
                                    for(var i=0;i<near.length;i++){
                                        if(near[i]){
                                        near[i].nearShip=true;}
                                    }
                                this.className='square ship';
                                this.ship=true;
                                second.className='square ship';
                                second.ship=true;
                                third.className='square ship';
                                third.ship=true;
                                rankingCounter.threeCount++;    
                                hideImg();
                        }
                    }
                    if ((third.id[1]==this.id[1]||third.id.length==2)&&+this.id>100){
                            if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&third.nearShip!==true){
                                if (this.id!='7'&&this.id[1]!='7'&&this.id[2]!='7'){
                                    near.push(document.getElementById(+this.id-7));
                                    near.push(document.getElementById(+this.id+3));
                                    near.push(document.getElementById(+this.id+13));
                                }
                                if (+this.id%10!=0){
                                    near.push(document.getElementById(+this.id-11));
                                    near.push(document.getElementById(+this.id-1));
                                    near.push(document.getElementById(+this.id+9));
                                }
                                    near.push(document.getElementById(+this.id-10));
                                    near.push(document.getElementById(+this.id-9));
                                    near.push(document.getElementById(+this.id-8));
                                
                                
                                
                                
                                near.push(document.getElementById(+this.id+10));
                                near.push(document.getElementById(+this.id+11));
                                near.push(document.getElementById(+this.id+12));
                                
                                
                                    for(var i=0;i<near.length;i++){
                                        if(near[i]){
                                        near[i].nearShip=true;}
                                    }
                                this.className='square ship';
                                this.ship=true;
                                second.className='square ship';
                                second.ship=true;
                                third.className='square ship';
                                third.ship=true;
                                rankingCounter.threeCount++;    
                                hideImg();
                        }
                    }
                }
            }
        }
    }
    function ranking2g(){//debugger
        var counter=0;
        var background='background-color:grey';
            square=document.getElementsByClassName('square');
            for (var i=0; i<square.length;i++){
                square[i].onmouseover= function(){
                   if (rankingCounter.twoCount<3){
                       var second=document.getElementById(+this.id+1);
                         second.style.cssText= background;
                         if ((this.id=='9'||this.id[1]=='9')&&+this.id<100){
                            second.style.cssText='';
                         }
                         if (this.id[2]=='9'&&+this.id>100){
                           second.style.cssText='';
                         }
                    }
                }
                square[i].onmouseout= function(){
                   var second=document.getElementById(+this.id+1);
                   
                   second.style.cssText= '';
                }
                square[i].onclick= function makeCounter(){
                    
                if (rankingCounter.twoCount<3){ 
                    var second=document.getElementById(+this.id+1);
                    var near=[];
                    if ((second.id[0]==this.id[0]||second.id.length==1)&&+this.id<100){
                        if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&second.ship!==true){
                            if (this.id!='8'&&this.id[1]!='8'&&this.id[2]!='8'){
                                near.push(document.getElementById(+this.id-8));
                                near.push(document.getElementById(+this.id+2));
                                near.push(document.getElementById(+this.id+12));
                            }
                            if (+this.id%10!=0){
                                near.push(document.getElementById(+this.id-11));
                                near.push(document.getElementById(+this.id-1));
                                near.push(document.getElementById(+this.id+9));
                            }
                            near.push(document.getElementById(+this.id-10));
                            near.push(document.getElementById(+this.id-9));
                            near.push(document.getElementById(+this.id+10));
                            near.push(document.getElementById(+this.id+11));
                            
                                       
                            for(var i=0;i<near.length;i++){
                                if(near[i]){
                                near[i].nearShip=true;}
                            }
                           
                            this.className='square ship';
                            this.ship=true;
                            second.className='square ship';
                            second.ship=true;
                            rankingCounter.twoCount++;    
                            hideImg();
                        }
                    }
                     if ((second.id[1]==this.id[1]||second.id.length==2)&&+this.id>100){
                        if(this.nearShip!==true&&this.ship!==true&&second.nearShip!==true&&second.ship!==true){
                            if (this.id!='8'&&this.id[1]!='8'&&this.id[2]!='8'){
                                near.push(document.getElementById(+this.id-8));
                                near.push(document.getElementById(+this.id+2));
                                near.push(document.getElementById(+this.id+12));
                            }
                            if (+this.id%10!=0){
                                near.push(document.getElementById(+this.id-11));
                                near.push(document.getElementById(+this.id-1));
                                near.push(document.getElementById(+this.id+9));
                            }
                            near.push(document.getElementById(+this.id-10));
                            near.push(document.getElementById(+this.id-9));
                            near.push(document.getElementById(+this.id+10));
                            near.push(document.getElementById(+this.id+11));
                            
                                       
                            for(var i=0;i<near.length;i++){
                                if(near[i]){
                                near[i].nearShip=true;}
                            }
                            this.className='square ship';
                            this.ship=true;
                            second.className='square ship';
                            second.ship=true;
                            rankingCounter.twoCount++;    
                            hideImg();
                        }
                    }
                }
            }
        }
    }
    function ranking1g(){//debugger
        var counter=0;
            
            square=document.getElementsByClassName('square');
            for (var i=0; i<square.length;i++){
                square[i].onmouseover=null;
                square[i].onclick= function makeCounter(){
                    
                    
                if (rankingCounter.oneCount<4){ 
                    var near=[];
                    if(this.nearShip!==true&&this.ship!==true){
                        if (this.id[1]!='9'&&this.id!='9'&&this.id[2]!='9'){
                            near.push(document.getElementById(+this.id-9));
                            near.push(document.getElementById(+this.id+1));
                            near.push(document.getElementById(+this.id+11));
                        }
                        if (this.id>100&&(this.id[2]!='9'&&this.id[1]=='9')){
                            near.push(document.getElementById(+this.id-9));
                            near.push(document.getElementById(+this.id+1));
                            near.push(document.getElementById(+this.id+11));
                        }
                        if (+this.id%10!=0){
                           near.push(document.getElementById(+this.id-1)); 
                           near.push(document.getElementById(+this.id-11));
                           near.push(document.getElementById(+this.id+9));
                        }
                        near.push(document.getElementById(+this.id-10));
                        near.push(document.getElementById(+this.id+10));
                        for(var i=0;i<near.length;i++){
                            if(near[i]){
                            near[i].nearShip=true;}
                        }
                        this.className='square ship';
                        this.ship=true;
                        rankingCounter.oneCount++;  
                        hideImg();   
                        console.log(counter)
                  }
                }
            }
        }
    }

      

    function Array2(){
        var arr=[], id=200;
        for (var i=0;i<10;i++){
            arr[i]=[];
            for(var j=0;j<10;j++){
                arr[i][j]=new Square();
                var square=document.createElement('div');
                square.className='square';
                square.id=id;
                id++
                var field2= document.getElementsByClassName('field2');
                field2[0].appendChild(square);
            }
        }
        return arr;
    }

    console.table(Array2())
    function hideImg(){
        if (rankingCounter.fourCount==1){
            fourg=document.getElementsByClassName('ranking4g');
            four=document.getElementsByClassName('ranking4');
            fourg[0].style.display='none';
            four[0].style.display='none';
        }
        if (rankingCounter.threeCount==2){
            threeg=document.getElementsByClassName('ranking3g');
            threeg[0].style.display='none';
            three=document.getElementsByClassName('ranking3');
            three[0].style.display='none';
        }
        if (rankingCounter.twoCount==3){
            twog=document.getElementsByClassName('ranking2g');
            twog[0].style.display='none';
            two=document.getElementsByClassName('ranking2');
            two[0].style.display='none';
        }
        if (rankingCounter.oneCount==4){
            oneg=document.getElementsByClassName('ranking1g');
            oneg[0].style.display='none';
       
        }
    }
    var nextPlayer=next();
    function next(){

        var counter=0;
      
        return function(){
            nextP=document.getElementsByClassName('nextPlayer');
            nextP[0].style.display='none';
            startG=document.getElementsByClassName('startGame');
            startG[0].style.visibility='visible';
            secField=document.getElementsByClassName('secondfield');
            secField[0].style.visibility='visible';
            
            if(counter<1){
                var square=document.getElementsByClassName('square');
                    for(var i=0;i<100;i++){
                        square[i].className='square'
                    }
                counter++;
                
                rankingCounter={
                fourCount:0,
                threeCount:0,
                twoCount:0,
                oneCount:0
                }

                fourg=document.getElementsByClassName('ranking4g');
                four=document.getElementsByClassName('ranking4');
                fourg[0].style.display='';
                four[0].style.display='';
                    
                threeg=document.getElementsByClassName('ranking3g');
                threeg[0].style.display='';
                three=document.getElementsByClassName('ranking3');
                three[0].style.display='';
                
                twog=document.getElementsByClassName('ranking2g');
                twog[0].style.display='';
                two=document.getElementsByClassName('ranking2');
                two[0].style.display='';
                
                oneg=document.getElementsByClassName('ranking1g');
                oneg[0].style.display='';
                
                return counter;
            }
        };
    }
    function startGame(){
        
        var start=document.getElementsByClassName('startGame');
        start[0].style.display='none';
        fire1();
        var nearShip1=[];
        function fire1(){
           
        for(var i=0;i<100;i++){
            if (square[i].ship===true){
            
                square[i].className='square ship';
            }
            if (square[i].getted===true){
                square[i].className='square ship getted';


            }
            if (square[i].miss===true){
                square[i].className='square miss';
            }
        }
         for(var i=100;i<200;i++){
            if (square[i].ship==true){
                square[i].className='square';
            }
            if (square[i].getted===true){
                square[i].className='square ship getted';
            }
            
            if (square[i].miss===true){
                square[i].className='square miss'
            }
        
            
            
            square[i].onclick=function fire(){

                    var count=0;
                    if (this.ship===true||this.getted===true){
                        this.getted=true;
                        this.ship=false;
                        alert('Got!');
                        this.className='square ship getted';
                        var near=[];
                        if (this.id[1]!='9'&&this.id!='9'&&this.id[2]!='9'){
                            near.push(document.getElementById(+this.id-9));
                            near.push(document.getElementById(+this.id+1));
                            near.push(document.getElementById(+this.id+11));
                        }
                        if (this.id>100&&(this.id[2]!='9'&&this.id[1]=='9')){
                            near.push(document.getElementById(+this.id-9));
                            near.push(document.getElementById(+this.id+1));
                            near.push(document.getElementById(+this.id+11));
                        }
                        if (+this.id%10!=0){
                           near.push(document.getElementById(+this.id-1)); 
                           near.push(document.getElementById(+this.id-11));
                           near.push(document.getElementById(+this.id+9));
                        }
                        near.push(document.getElementById(+this.id-10));
                        near.push(document.getElementById(+this.id+10));
                        for(var j=0;j<near.length;j++){
                            if (near[j]!=null){
                                if(near[j].nearShip===true||near[j].ship===true){
                                    nearShip2.push(near[j]);
                                }
                                if(near[j].ship===true){
                                    count=1;
                                }
                            }
                        }
                        for (var m=0;m<nearShip2.length;m++){
                            if (nearShip2[m].ship===true){
                                count=1;
                            }
                        }
                        if (count<1){
                            for(var l=0;l<nearShip2.length;l++){
                                if(nearShip2[l].getted!==true){
                                    nearShip2[l].className='square miss';
                                }
                                }
                            alert('Drowned!');
                            for(var i=100;i<200;i++){
                                if (square[i].ship===true){
                                    var c=1
                                }
                            }
                            if (c!==1){
                                alert (player1 + ' wins')
                            }
                            nearShip2=[];
                        }
                        
                    }else{
                        
                        alert ('Miss!');
                        this.miss=true;
                        this.className='square miss';
                        for(var i=0;i<100;i++){
                            if (square[i].ship===true){
                                square[i].className='square';
                            }
                            if (square[i].getted===true){
                                square[i].className='square ship getted';
                            }
                            
                            if (square[i].miss===true){
                                square[i].className='square miss'
                            }
                        }
                            alert(player2+' turn')
                            for(var i=100;i<200;i++){
                                square[i].onclick=''
                            }
                            
                            fire2();
                            

                    }
                }
            }
        }
    var nearShip2=[];
    function fire2(){
        
        for(var i=100;i<200;i++){
            if (square[i].ship===true){
            
                square[i].className='square ship';
            }
            if (square[i].getted===true){
                square[i].className='square ship getted';

            }
            if (square[i].miss===true){
                square[i].className='square miss';
            }
        }
         for(var i=0;i<100;i++){
            if (square[i].ship==true){
                square[i].className='square';
            }
            if (square[i].getted===true){
                square[i].className='square ship getted';
            }
            
            if (square[i].miss===true){
                square[i].className='square miss'
            }
            
            
            
            square[i].onclick=function fire(){
               
                     var count=0;
                    if (this.ship===true||this.getted===true){
                        this.getted=true;
                        this.ship=false;
                        alert('Got!');
                        this.className='square ship getted';
                        var near=[];
                        if (this.id[1]!='9'&&this.id!='9'&&this.id[2]!='9'){
                            near.push(document.getElementById(+this.id-9));
                            near.push(document.getElementById(+this.id+1));
                            near.push(document.getElementById(+this.id+11));
                        }
                        if (this.id>100&&(this.id[2]!='9'&&this.id[1]=='9')){
                            near.push(document.getElementById(+this.id-9));
                            near.push(document.getElementById(+this.id+1));
                            near.push(document.getElementById(+this.id+11));
                        }
                        if (+this.id%10!=0){
                           near.push(document.getElementById(+this.id-1)); 
                           near.push(document.getElementById(+this.id-11));
                           near.push(document.getElementById(+this.id+9));
                        }
                        near.push(document.getElementById(+this.id-10));
                        near.push(document.getElementById(+this.id+10));
                        for(var j=0;j<near.length;j++){
                            if (near[j]!=null){
                                if(near[j].nearShip===true||near[j].ship===true){
                                    nearShip1.push(near[j]);
                                }
                                if(near[j].ship===true){
                                    count=1;
                                }
                            }
                        }
                        for (var m=0;m<nearShip1.length;m++){
                            if (nearShip1[m].ship===true){
                                count=1;
                            }
                        }
                        if (count<1){
                            for(var l=0;l<nearShip1.length;l++){
                                if(nearShip1[l].getted!==true){
                                    nearShip1[l].className='square miss';
                                }
                                }
                            alert('Drowned!');
                            for(var i=0;i<100;i++){
                                if (square[i].ship===true){
                                    var c=1
                                }
                            }
                            if (c!==1){
                                alert (player2 + ' wins')
                            }
                            nearShip1=[];
                        }
                        
                    }else{
                        
                        alert ('Miss!');
                        this.miss=true;
                        this.className='square miss';
                        for(var i=0;i<100;i++){
                            if (square[i].ship===true){
                                square[i].className='square';
                            }
                            if (square[i].getted===true){
                                square[i].className='square ship getted';
                            }
                            
                            if (square[i].miss===true){
                                square[i].className='square miss'
                            }
                        }
                            alert(player1+' turn')
                            for(var i=0;i<100;i++){
                                square[i].onclick=''
                            }
                            
                    fire1();
                    
                    }
                }
            }
         }  
    }
   // }





