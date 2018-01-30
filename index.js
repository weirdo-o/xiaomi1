/**
 * Created by ow on 2018/1/28.
 */
    window.onload=function () {
        let div=document.querySelector('.banner0')
        let pic=document.querySelectorAll('ul.banner li')
        let left=document.querySelector('.banner-jiantou.left1')
        let right=document.querySelector('.banner-jiantou.right2')
        let cirs=document.querySelectorAll('.yd li')
        let n=0
        function move() {
            n++;
            if(n>=pic.length){
                n=0
            }
            pic.forEach(function (val,ind) {
                val.classList.remove('banlist')
                cirs[ind].classList.remove('active')
            })
            pic[n].classList.add('banlist')
            cirs[n].classList.add('active')
        }
        let time=setInterval(move,2000);
        div.onmouseover=function () {
            clearInterval(time)
        }
        div.onmouseout=function () {
            time=setInterval(move,2000)
        }
        let flag=true
        right.onclick=function () {
            if(!flag){
                return
            }
            flag=false
            move()
        }
        left.onclick=function () {
            if(!flag){
                return
            }
            flag=false
            n--;
            if(n<0){
                n=pic.length-1
            }
            pic.forEach(function (val) {
                val.classList.remove('banlist')
            })
            pic[n].classList.add('banlist')
        }

        cirs.forEach(function (val,index) {
            val.onclick=function () {
                if(!flag){
                    return
                }
                flag=false
                pic.forEach(function (va,ind) {
                    va.classList.remove('banlist')
                    cirs[ind].classList.remove('active')
                })
                pic[index].classList.add('banlist')
                this.classList.add('active')
                n=index
            }
        })

        pic.forEach(function (dom) {
            dom.addEventListener('transitionend',function () {
                flag=true
            })
        })

// banner结束
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
// 选项卡结束
    function box1(box) {
        let now=0;
        let next=0;
        let pic1=box.querySelectorAll('.nrul li')
        let right1=box.querySelector('.right')
        let left1=box.querySelector('.left')
        let cirs1=box.querySelectorAll('.yuandian li')
        let width=parseInt(window.getComputedStyle(box,null).width)
        let flag=true
        function move1() {
            if(!flag){
                return
            }
            flag=false
            next=now+1
            if(next>=pic1.length){
                // next=0
                flag=true
            }
            pic1[next].style.left='100%'
            animate(pic1[now],{left:-width},400)
            animate(pic1[next],{left:0},400,function () {
                flag=true
            })
            cirs1[now].classList.remove('active')
            cirs1[next].classList.add('active')
            now=next
        }
        // let t=setInterval(move1,2000)
        // box.onmouseenter=function () {
        //     clearInterval(t)
        // }
        // box.onmouseleave=function () {
        //     t=setInterval(move1,2000)
        // }
        right1.onclick=function () {
            move1()
        }
        left1.onclick=function () {
            if(!flag){
                return
            }
            flag=false
            next=now-1
            if(next<0){
                // next=pic1.length-1
                flag=true
            }
            pic1[next].style.left='-100%'
            animate(pic1[now],{left:width},400)
            animate(pic1[next],{left:0},400,function () {
                flag=true
            })
            cirs1[now].classList.remove('active')
            cirs1[next].classList.add('active')
            now=next
        }
        cirs1.forEach(function (val,index) {
            val.onclick=function () {
                if(!flag){
                    return
                }
                flag=false
                next=index
                if(next>now){
                    pic1[next].style.left='100%'
                    animate(pic1[now],{left:-width},400)
                    animate(pic1[next],{left:0},400,function () {
                        flag=true
                    })
                    cirs1[now].classList.remove('active')
                    cirs1[next].classList.add('active')
                    now=next
                }else if(next<now){
                    pic1[next].style.left='-100%'
                    animate(pic1[now],{left:width},400)
                    animate(pic1[next],{left:0},400,function () {
                        flag=true
                    })
                    cirs1[now].classList.remove('active')
                    cirs1[next].classList.add('active')
                    now=next
                }else{
                    flag=true
                }
            }
        })
    }
        let box2=document.querySelectorAll('.nrbox')
        box2.forEach(function (val) {
            box1(val)
        })
// 底下的双下标轮播结束
        let dibu=document.querySelector('.h-dibubox')
        let hea=document.querySelectorAll('.h-dibubox .dibu')
        console.log(hea)
        let jtleft=document.querySelector('.jtleft')
        let jtright=document.querySelector('.jtright')
        let width=parseInt(window.getComputedStyle(dibu,null).width)
        let now=0;
        let next=0;
        function move1() {
            if(!flag){
                return
            }
            flag=false
            next=now+1
            if(next>=hea.length){
                next=0
                // flag=true
                hea[next].style.left='-100%'
                animate(hea[now],{left:width},400)
                animate(hea[next],{left:0},400,function () {
                    flag=true
                })
                jtright.classList.remove('active')
                jtleft.classList.add('active')
                now=next
            }
            hea[next].style.left='100%'
            animate(hea[now],{left:-width},400)
            animate(hea[next],{left:0},400,function () {
                flag=true
            })
            jtleft.classList.remove('active')
            jtright.classList.add('active')
            now=next
        }
        let t=setInterval(move1,2000)
        dibu.onmouseenter=function () {
            clearInterval(t)
        }
        dibu.onmouseleave=function () {
            t=setInterval(move1,2000)
        }
        jtright.onclick=function () {
            clearInterval(t)
            move1()
            jtleft.classList.remove('active')
            jtright.classList.add('active')
        }
        jtleft.onclick=function () {
            if(!flag){
                return
            }
            flag=false
            next=now-1
            if(next<0){
                // next=pic1.length-1
                flag=true
            }
            clearInterval(t)
            hea[next].style.left='-100%'
            animate(hea[now],{left:width},400)
            animate(hea[next],{left:0},400,function () {
                flag=true
            })
            jtright.classList.remove('active')
            jtleft.classList.add('active')
            now=next
        }
    }
