/**
 * Created by ow on 2018/1/28.
 */
    window.onload=function () {
        let div=document.querySelector('.banner0')
        let pic=document.querySelectorAll('ul.banner li')
        let left=document.querySelector('.banner-jiantou.left1')
        let right=document.querySelector('.banner-jiantou.right2')
        console.log(left)
        let n=0
        function move() {
            n++;
            if(n>=pic.length){
                n=0
            }
            pic.forEach(function (val) {
                val.classList.remove('banlist')
            })
            pic[n].classList.add('banlist')
        }
        let time=setInterval(move,2000);
        div.onmouseover=function () {
            clearInterval(time)
        }
        div.onmouseout=function () {
            time=setInterval(move,2000)
        }
        right.onclick=function () {
            move()
        }
        left.onclick=function () {
            n--;
            if(n<0){
                n=pic.length-1
            }
            pic.forEach(function (val) {
                val.classList.remove('banlist')
            })
            pic[n].classList.add('banlist')
        }




        function xxka(a,b) {
           let nav=document.querySelectorAll(a);
           let list=document.querySelectorAll(b)
           nav.forEach(function (val,index) {
               val.onmouseover=function () {
                   nav.forEach(function (va,ind) {
                       va.classList.remove('active1')
                       list[ind].classList.remove('active1')
                   })
                   this.classList.add('active1')
                   list[index].classList.add('active1')
               }
           })
        }
        xxka('#jjdd .header_right a','#jjdd .dibu1 .dibu-right')
        xxka('#zhineng .header_right a','#zhineng .dibu1 .dibu-right')
        xxka('#dapei .header_right a','#dapei .dibu1 .dibu-right')
        xxka('#peijian .header_right a','#peijian .dibu1 .dibu-right')
        xxka('#zhoubian .header_right a','#zhoubian .dibu1 .dibu-right')


    }