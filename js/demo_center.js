window.onload = function(){
	function move_loop(id){
        var part = document.getElementById(id);
        var ul = part.getElementsByTagName('ul')[0];
        var lis = ul.getElementsByTagName('li');

        var loop = part.getElementsByTagName('div')[0];
        var ul_width = 2 * (lis[0].offsetWidth + 5) * lis.length;
        ul.style.width = ul_width + 'px';
        loop.style.height = lis[0].offsetHeight + 'px';
        ul.innerHTML += ul.innerHTML;
        var ul_left = 0;
        var timer_demo = setInterval(move_son,10);
        function move_son(){
            ul_left--;
            if(ul_left <=  -ul_width / 2){
                ul_left = 0;
            }
            ul.style.left = ul_left + 'px';
        }
        loop.onmouseover = function(){
            clearInterval(timer_demo);
        }
        loop.onmouseout = function(){
            timer_demo = setInterval(move_son,10);
        }
    }
    move_loop('part1');
    move_loop('part2');
    move_loop('part3');
    move_loop('part4');

    // ================================弹框========================
    var newWind = document.getElementById('ball_wind');
    function tangW(id){
        var part = document.getElementById(id);
        var ul = part.getElementsByTagName('ul')[0];
        var lis = ul.getElementsByTagName('li');
        for(var i = 0; i < lis.length; i++){
            // lis[i].idx = i;
            lis[i].onclick = function(){
                this.parentNode.parentNode.parentNode.appendChild(newWind.cloneNode(true));
                var tank = document.getElementById('ball_wind');
                var list = tank.getElementsByTagName('div')[1];
                var imgs = list.getElementsByTagName('img');
                if(id == 'part1'){
                    for(var j = 0; j < imgs.length; j++){
                        imgs[j].src = 'images/demo_img/1[1].gif';
                    }
                }else if(id == 'part2'){
                    for(var j = 0; j < imgs.length; j++){
                        imgs[j].src = 'images/demo_img/1[1].gif';
                    }
                }

                tank.style.display = 'block';
                var close = document.getElementById('close');
                close.onclick = function(){
                    part.removeChild(tank);
                }
                /*list.onmouseover = function(){
                    window.addEventLister(function(){
                        alert(12);
                    });
                    // window.onscroll = function(){
                    //     alert(12);
                    // }
                }
                list.onmouseout = function(){
                }*/
            }
        }
    }
    tangW('part1');
    tangW('part2');
    tangW('part3');






}