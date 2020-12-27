var fp = prompt("Player One Enter your Name");
var sp = prompt("Player Two Enter your Name");
var vs=$(".a1")
var i=5,j=5,k=5,l=5,m=5,n=5,o=5,game=1;
if (game==1)
$("h3").text(fp+'\'s Turn');
else
$("h3").text(sp+'\'s Turn');

    $(".a1").click(function(){
        if(i >= 0){
            if(game ==1){
                $(".a1").eq(i).addClass("blue");
                $("h3").text(sp+'\'s Turn');
                game=0;
            }
            else if(game==0){
                $(".a1").eq(i).addClass("red");
                game=1;
            }
            i-=1;
            checker()
        }
    })
    $(".b1").click(function(){
        if(j >= 0){
            if(game ==1){
                $(".b1").eq(j).addClass("blue");
                $('h3').text(sp+'\'s Turn');
                game=0;
            }
            else if(game==0){
                $(".b1").eq(j).addClass("red");
                $('h3').text(fp+'\'s Turn');
                game=1;
            }
            j-=1;
            checker()
        }
    })
    $(".c1").click(function(){
        if(k >= 0){
            if(game ==1){
                $(".c1").eq(k).addClass("blue");
                $('h3').text(sp+'\'s Turn');
                game=0;
            }
            else if(game==0){
                $(".c1").eq(k).addClass("red");
                $('h3').text(fp+'\'s Turn');
                game=1;
            }
            k-=1;
            checker()
        }
    })
    $(".d1").click(function(){
        if(l >= 0){
            if(game ==1){
                $(".d1").eq(l).addClass("blue");
                $('h3').text(sp+'\'s Turn');
                game=0;
            }
            else if(game==0){
                $(".d1").eq(l).addClass("red");
                $('h3').text(fp+'\'s Turn');
                game=1;
            }
            l-=1;
            checker()
        }
    })
    $(".e1").click(function(){
        if(m >= 0){
            if(game ==1){
                $(".e1").eq(m).addClass("blue");
                $('h3').text(sp+'\'s Turn');
                game=0;
            }
            else if(game==0){
                $(".e1").eq(m).addClass("red");
                $('h3').text(fp+'\'s Turn');
                game=1;
            }
            m-=1;
            checker()
        }
    })
    $(".f1").click(function(){
        if(n >= 0){
            if(game ==1){
                $(".f1").eq(n).addClass("blue");
                $('h3').text(sp+'\'s Turn');
                game=0;
            }
            else if(game==0){
                $(".f1").eq(n).addClass("red");
                $('h3').text(fp+'\'s Turn');
                game=1;
            }
            n-=1;
            checker()
        }
    })
    $(".g1").click(function(){
        if(o >= 0){
            if(game ==1){
                $(".g1").eq(o).addClass("blue");
                $('h3').text(sp+'\'s Turn');
                game=0;
            }
            else if(game==0){
                $(".g1").eq(o).addClass("red");
                $('h3').text(fp+'\'s Turn');
                game=1;
            }
            o-=1;
            checker()
        }
    })
    function checker()
    {
        for(var p=5;p>=0;p--)
        {
            if($(".a1").eq(p).hasClass("blue") && $(".b1").eq(p).hasClass("blue") &&$(".c1").eq(p).hasClass("blue") &&$(".d1").eq(p).hasClass("blue")||
            $(".b1").eq(p).hasClass("blue") && $(".c1").eq(p).hasClass("blue") &&$(".d1").eq(p).hasClass("blue") &&$(".e1").eq(p).hasClass("blue") ||$(".c1").eq(p).hasClass("blue") && $(".d1").eq(p).hasClass("blue") &&$(".e1").eq(p).hasClass("blue") &&$(".f1").eq(p).hasClass("blue")||$(".d1").eq(p).hasClass("blue") && $(".e1").eq(p).hasClass("blue") &&$(".f1").eq(p).hasClass("blue") &&$(".g1").eq(p).hasClass("blue") )
            {   
                i=-2,j=-2,k=-2,l=-2,m=-2,n=-2,o=-2;
                $('h3').text(fp+' Won\n Please Reload the Website to Start the game')
            }
            if($(".a1").eq(p).hasClass("red") && $(".b1").eq(p).hasClass("red") &&$(".c1").eq(p).hasClass("red") &&$(".d1").eq(p).hasClass("red")||
            $(".b1").eq(p).hasClass("red") && $(".c1").eq(p).hasClass("red") &&$(".d1").eq(p).hasClass("red") &&$(".e1").eq(p).hasClass("red") ||$(".c1").eq(p).hasClass("red") && $(".d1").eq(p).hasClass("red") &&$(".e1").eq(p).hasClass("red") &&$(".f1").eq(p).hasClass("red")||
            $(".d1").eq(p).hasClass("red") && $(".e1").eq(p).hasClass("red") &&$(".f1").eq(p).hasClass("red") &&$(".g1").eq(p).hasClass("red") )
            {   
                i=-2,j=-2,k=-2,l=-2,m=-2,n=-2,o=-2;
                $('h3').text(sp+' Won\n Please Reload the Website to Start the game')
            }
        }
        if(i==-1 && j==-1 && k==-1 && l==-1 && m==-1 && n==-1 && o==-1)
        {
            $('h3').text('Game tied.\nPlease Reload the page to playe again')
        }
    }
