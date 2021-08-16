//TODO : 헤더영역
window.addEventListener('scroll',function(){
    
    const Y = Math.round(window.scrollY);

    const headBg = document.querySelector('.head_inner');
    const fix = document.querySelector('#header > .container');
    const logo = document.querySelector('.member > .logo');

    if(Y >= 80){
        headBg.classList.add('active');
        fix.classList.add('fixed');
        logo.classList.add('active');
        
    }else{
        headBg.classList.remove('active');
        fix.classList.remove('fixed');
        logo.classList.remove('active');
    }
});

// TODO : 사이드메뉴
function side(){
    const sub = document.querySelector('.sub'),
          cow = document.querySelector('.right_menu');

    cow.addEventListener('click',function(){
        sub.classList.toggle('active');
    });
}

side();

// TODO : 왼쪽 플로팅 메뉴
function float(){
    const close = document.querySelector('.float_banner .close'),
          big = document.querySelector('.float_banner .big'),
          small = document.querySelector('.float_banner .small');

    close.addEventListener('click',function(){
        big.classList.add('active');
        small.classList.add('active');
    });

    small.addEventListener('click',function(){
        big.classList.remove('active');
        small.classList.remove('active');
    })
}

float();

// TODO : 레이어 팝업 + 쿠키 설정
const today = document.querySelector('.main_popup a'),
      bg = document.querySelector('.popup'),
      img = document.querySelector('.main_popup');

// 기록된 쿠기가 있다면 팝업창 노출 안함
// 기록된 쿠기가 없다면 팝업창 노출

closepopup.onclick = function(){ setCookie(bg,img,today) };

today.addEventListener('click',function(){
    today.classList.toggle('checked');
    console.log(today.classList.contains('checked'))
})

function setCookie(ele,img,chk){
    if( chk.classList.contains('checked') ){
        let date = new Date();
        date.setDate(date.getDate() + 1);
        document.cookie = 'lypopup=test;expires='+date.toUTCString();
    }
    ele.style.display='none';
    img.style.display = 'none';
}

function getCookie(){
    if( document.cookie.match('test') ){
        img.style.display='none';
        bg.style.display = 'none';
    }
}
getCookie();

//TODO : 헤더영역 메뉴
const headUl = document.querySelectorAll('.top_menu > ul > li'),
      logo = document.querySelector('.member > .logo'),
      head = document.querySelector('.head_inner');

for(let i=0; i<headUl.length; i++){
    headUl[i].addEventListener('mouseover',function(){
        head.classList.add('active');
        logo.classList.add('active');
    });
    
    headUl[i].addEventListener('mouseleave',function(){
        head.classList.remove('active');
        logo.classList.remove('active');

    });
}

// FIXME : 스크롤 이벤트
window.addEventListener('scroll',function(){

    const Y = Math.round(window.scrollY);

    const tit = document.querySelectorAll('.no_visible');

    // console.log(tit.length); //7

    if(Y >= 500 && Y <= 1500){
        tit[0].classList.add('fadeInDown'); //지금특가
    }else if(Y >= 2200 && Y <= 3200){
        tit[1].classList.add('fadeInDown'); //지금신상
    }else if(Y >= 3800 && Y <= 4800){
        tit[2].classList.add('fadeInDown'); //아이스크림 1
    }else if(Y >= 4000 && Y <= 5000){
        tit[3].classList.add('fadeInDown'); //아이스크림 1
    }else if(Y >= 4600 && Y < 5600){
        tit[4].classList.add('fadeInDown'); //선택영역
    }else if(Y >= 4700 && Y < 5700){
        tit[5].classList.add('fadeInDown');
    }else if(Y >= 4900 && Y < 5900){
        tit[6].classList.add('fadeInDown');
    }else if(Y >= 5700 && Y <= 6700){
        tit[7].classList.add('fadeInDown'); //Tv영역
    }else if(Y >= 6800 && Y < 7800){
        tit[8].classList.add('fadeInDown'); //아이스크림 2
    }else if(Y >= 6900 && Y < 7900){
        tit[9].classList.add('fadeInDown'); 
    }else if(Y >= 7600 && Y <= 8600){
        tit[10].classList.add('fadeInDown'); 
    }else if(Y >= 8600 && Y < 9600){
        tit[11].classList.add('fadeInDown'); //레시피영역
    }else if(Y >= 9400 && Y < 10400){
        tit[12].classList.add('fadeInDown'); //스페셜 영역
    }else if(Y >= 10000){
        tit[13].classList.add('fadeInDown'); //인스타 영역
    }
    else{
        // for(let i=0; i<tit.length +1; i++){
        //     tit[i].classList.remove('fadeInDown');
        // }
    }
});

//TODO : 업다운 스크롤
window.addEventListener('scroll',function(){

    const Y = Math.round(window.scrollY);

    const up = document.querySelector('.up_down .up'),
          down = document.querySelector('.up_down .down'),
          up_down = document.querySelector('.up_down');

    up.addEventListener('click',function(){

        up_down.classList.remove('down');
        up_down.classList.add('up');

        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        });
    });

    down.addEventListener('click',function(){

        up_down.classList.remove('up');
        up_down.classList.add('down');

        window.scrollTo({
            top:document.body.scrollHeight,
            left:0,
            behavior:"smooth"
        });
    });

    if(Y >= 11290){
        up_down.classList.add('down');
        up_down.classList.remove('up');
    }else{
        up_down.classList.add('up');
        up_down.classList.remove('down');
    }
});

//TODO : 선택영역 탭
const tabBtn = document.querySelectorAll('.tab_btn > ul li'),
      tabCon = document.querySelectorAll('.tab_con > ul > li');

      console.log(tabBtn.length);

    for(let i=0; i<tabBtn.length; i++){
        tabBtn[i].addEventListener('click',function(){
            for(let j=0; j<tabBtn.length; j++){
                tabBtn[j].classList.remove('on');
                tabCon[j].classList.remove('active');
            }
            tabBtn[i].classList.add('on');
            tabCon[i].classList.add('active');
        });
    }

//TODO : 지금 신상 슬라이드영역
function newhtml(){
    const main = document.querySelector('#new .main_item');

    for(let i =0; i<newImg.length; i++){

        var item = document.createElement('div');
    
        item.classList.add('item');
    
        main.appendChild(item);
        
        item.innerHTML = `
                            <div class="over">
                                <img src="${newImg[i].img}" alt="">
                            </div>

                            <div class="Bg">
                                <div class="overBg_text">
                                    <span class="name">${newImg[i].title}</span>
                                    <span class="price">${newImg[i].price}</span>
                                </div>
                                <img src="${newImg[i].img}" alt="">
                            </div>
                        `
    }
}

newhtml();

function newSlide(){

    const item = document.querySelectorAll('#new .main_item .item'),
          status = document.querySelector('#new .new_scroll');
    var idx = 0;
    var num = 1;

    setInterval(function(){
        let width = -245 * idx;

        for(let j=0; j<item.length; j++){
            item[j].style.transform = `translateX(${width}px)`;
        }
        idx++;

        if(idx == 2 || idx == 4 || idx == 6 || idx == 8 ){
            status.style.transform = `translateX(${100*num}%)`;

            // console.log(num);        
            
            num++
        }

        if(idx > item.length - 4){
            for(let j=0; j<item.length; j++){
                item[j].style.transform = `translateX(${-245 * (item.length - 4)}px)`;
            }
        }
        
        if(idx >= li.length){
            setTimeout(() => {
                status.style.transform = `translateX(${0*num}%)`;
                num = 1;
            }, 3000);
            idx = 0;
        }

    },3000);
}

// TODO : 지금 특가 영역
function lowprice(){
    const ul = document.querySelector('.now ul');

    for(let i=0; i<lowImg.length; i++){

        var li = document.createElement('li');
        var box = document.createElement('div');
        var img_sec = document.createElement('div');
        var tit_sec = document.createElement('div');
        var span = document.createElement('span');
        var sub_sec = document.createElement('div');
        var hash = document.createElement('span');
        var discount = document.createElement('strong');
        var origin = document.createElement('span');
        var per = document.createElement('span');

        box.classList.add('box');
        img_sec.classList.add('img_sec');
        tit_sec.classList.add('tit_sec');
        sub_sec.classList.add('sub_sec');
        hash.classList.add('hash');
        discount.classList.add('discount');
        origin.classList.add('origin_price');
        per.classList.add('per');

        ul.appendChild(li);
        li.appendChild(box);
        box.appendChild(img_sec);
        box.appendChild(tit_sec);
        tit_sec.appendChild(span);
        tit_sec.appendChild(sub_sec);
        sub_sec.appendChild(hash);
        sub_sec.appendChild(discount);
        sub_sec.appendChild(origin);
        sub_sec.appendChild(per);

        img_sec.innerHTML = `<div class="img_sec">
                                <img src="${lowImg[i].img}" alt="">
                                <span>TIME <br> DEAL</span>
                                <span></span>
                            </div>`

        span.innerHTML = lowImg[i].title;
        hash.innerHTML = lowImg[i].hash;
        discount.innerHTML = lowImg[i].price;
        origin.innerHTML = lowImg[i].origin;


        if(!lowImg[i].origin == ''){
            var top = lowImg[i].price;
            var low = lowImg[i].origin;
        
            top = top.slice(0, -1);
            low = low.slice(0, -1);    
            top = top.split(',').join("");
            low = low.split(',').join("");
            

            // console.log(Math.round(100-((top/low)*100)));
        
            per.innerHTML = `${Math.round(100-((top/low)*100))}%`;
        }
    }
}

lowprice();

// TODO : 지금 순위 영역
function now_rank(){
    const ul = document.querySelector('.rank ul');

    for(let i=0; i<lowImg.length; i++){

        var li = document.createElement('li');
        var box = document.createElement('div');
        var img_sec = document.createElement('div');
        var tit_sec = document.createElement('div');
        var span = document.createElement('span');
        var sub_sec = document.createElement('div');
        var hash = document.createElement('span');
        var discount = document.createElement('strong');
        var origin = document.createElement('span');
        var per = document.createElement('span');

        box.classList.add('box');
        img_sec.classList.add('img_sec');
        tit_sec.classList.add('tit_sec');
        sub_sec.classList.add('sub_sec');
        hash.classList.add('hash');
        discount.classList.add('discount');
        origin.classList.add('origin_price');
        per.classList.add('per');

        ul.appendChild(li);
        li.appendChild(box);
        box.appendChild(img_sec);
        box.appendChild(tit_sec);
        tit_sec.appendChild(span);
        tit_sec.appendChild(sub_sec);
        sub_sec.appendChild(hash);
        sub_sec.appendChild(discount);
        sub_sec.appendChild(origin);
        sub_sec.appendChild(per);

        img_sec.innerHTML = `<div class="img_sec">
                                <img src="${rank[i].img}" alt="">
                                <span>Best <br> 0${i}</span>
                                <span></span>
                            </div>`

        span.innerHTML = rank[i].title;
        hash.innerHTML = rank[i].hash;
        discount.innerHTML = rank[i].price;
        origin.innerHTML = rank[i].origin;

        if(!rank[i].origin == ''){
            var top = rank[i].price;
            var low = rank[i].origin;
        
            top = top.slice(0, -1);
            low = low.slice(0, -1);    
            top = top.split(',').join("");
            low = low.split(',').join("");

            // console.log(Math.round(100-((top/low)*100)));
        
            per.innerHTML = `${Math.round(100-((top/low)*100))}%`;
        }
    }
}

now_rank();

// TODO : 아이스크림1
const item1 = document.querySelector('.item1 ul');
const item2 = document.querySelector('.item2 ul');

function ice(p,a){

    for(let i=0; i < a.length; i++){

        var li = document.createElement('li');
        var box = document.createElement('div');
        var img_sec = document.createElement('div');
        var img = document.createElement('img');
        var span = document.createElement('span');

        box.classList.add('box');
        img_sec.classList.add('img_sec');

        p.appendChild(li);
        li.appendChild(box);
        box.appendChild(img_sec);
        img_sec.appendChild(img);
        img_sec.appendChild(span);

        img.setAttribute('src', a[i].img);
        span.innerHTML = a[i].title;
    }
}

ice(item1,iceImg);
ice(item2,iceImg2);

// TODO : 스페셜 영역
function special(){
    const good = document.querySelector('.goods .con ul');

    for(let i=0; i<specialImg.length; i++){
        var li = document.createElement('li');
        var img = document.createElement('div');
        var text = document.createElement('div');

        img.classList.add('img');
        text.classList.add('text');

        good.appendChild(li);
        li.appendChild(img);
        li.appendChild(text);

        img.innerHTML = `<img src="${specialImg[i].img}" alt="">`;
        text.innerHTML = `<p>${specialImg[i].title}</p>
                          <span>${specialImg[i].sub}</span>`;
    }
}

special();

//TODO : TV영역
function tvhtml(){

    const tv = document.querySelector('.tv .con ul'),
          txt = document.querySelector('.tv .slide ul');

    for(let i=0; i<tvImg.length; i++){
        var li = document.createElement('li');
        var txtli = document.createElement('li');

        txt.appendChild(txtli);
        tv.appendChild(li);

        li.innerHTML = `<img src="${tvImg[i].img}" alt="">
                        <span class="btn">
                            <img src="img/video_btn.png" alt="">
                        </span>`;

        txtli.innerHTML = `<p>
                                ${tvImg[i].title}
                           </p>
                           <span>${tvImg[i].sub}</span>
                           <button>유투브 보러가기</button>`
    }
}

tvhtml();

// TODO : 레시피 영역
function recipehtml(){

    const recipe = document.querySelector('.recipe .con .slider_inner'),
          txt = document.querySelector('.recipe .slide ul');


    for(let i=0; i<recipeImg.length; i++){
        var li = document.createElement('li');
        var txtli = document.createElement('li');

        txt.appendChild(txtli);
        recipe.appendChild(li);
        li.classList.add('slider_item');

        li.innerHTML = `<img src="${recipeImg[i].img}" alt="">`

        txtli.innerHTML = `<p>
                                    ${recipeImg[i].title}
                           </p>
                           <span>${recipeImg[i].sub}</span>
                           <button>유투브 보러가기</button>`
    }
}

recipehtml();

//TODO : 레시피 슬라이드영역

    function recipe(){
        const img = document.querySelectorAll('.slider_item'),
              statusBtn = document.querySelectorAll('.recipe .con .status img'),
              bg = document.querySelector('.recipe > .container');
              textrecipe = document.querySelectorAll('.recipe .slide ul li');

              var bg_style = document.createElement('style');
              bg.appendChild(bg_style);

        // console.log(statusBtn.length); //8
        // console.log(img.length); //8

        //클릭시
        for(let i=0; i<statusBtn.length; i++){
            statusBtn[i].addEventListener('click',function(){
                let width = -575 * i;

                for(let j=0; j<statusBtn.length; j++){
                    img[j].style.transform = `translateX(${width}px)`;
                    img[j].classList.remove('active');
                }
                img[i].classList.add('active');

                // 텍스트 슬라이드
                if(img[i].classList.contains('active')){
                    textrecipe[i].classList.add('active');
                }else{
                    for(let p=0; p<statusBtn.length; p++){
                        textrecipe[i].classList.remove('active');
                    }
                }
            
                //상태 버튼
                for(let j=0; j<statusBtn.length; j++){
                    statusBtn[j].classList.remove('active');
                }
                statusBtn[i].classList.add('active');
            });
        }

        // 자동
        function autoSlide(){
            var idx = 0;

            setInterval(function(){
                let width = -575 * idx;

                for(let j=0; j<statusBtn.length; j++){
                    img[j].style.transform = `translateX(${width}px)`;
                    img[j].classList.remove('active');
                }

                img[idx].classList.add('active');

                // 텍스트 슬라이드
                if(img[idx].classList.contains('active')){

                    for(let p=0; p<statusBtn.length; p++){
                        textrecipe[p].classList.remove('active');
                    }

                    textrecipe[idx].classList.add('active');
                }

                for(let j=0; j<statusBtn.length; j++){
                    statusBtn[j].classList.remove('active');
                }
                statusBtn[idx].classList.add('active');

                if(idx == 0){
                    bg_style.innerHTML = ".container::after {right:-55% !important}";
                }else if(idx == 1){
                    bg_style.innerHTML = ".container::after {right:-35% !important}";
                }else if(idx == 2){
                    bg_style.innerHTML = ".container::after {right:-15% !important}";
                }else if(idx >= 3){
                    bg_style.innerHTML = ".container::after {right:0% !important}";
                }
                
                idx++;

                if(idx >= img.length){
                    idx = 0;
                }
            },5000);
        }

        autoSlide();
    }

    // window.addEventListener('click',function(){
    //     const textrecipe = document.querySelector('.recipe .slide');

    //     textrecipe.classList.toggle('active');
    // })



//TODO : TV 슬라이드영역

    function tv(){

    const img = document.querySelectorAll('.tv .con ul li'),
          statusBtn = document.querySelectorAll('.tv .con .status img'),
          bg = document.querySelector('.tv > .container');
          texttv = document.querySelectorAll('.tv .slide ul li');

          var bg_style = document.createElement('style');
          bg.appendChild(bg_style);

    // console.log(statusBtn.length); //8
    // console.log(img.length); //8

        //클릭시
        for(let i=0; i<statusBtn.length; i++){
                statusBtn[i].addEventListener('click',function(){
                let width = -960 * i;
                for(let j=0; j<statusBtn.length; j++){
                    img[j].style.transform = `translateX(${width}px)`;
                    img[j].classList.remove('active');
                }
                
            img[i].classList.add('active');

            // 텍스트 슬라이드
            if(img[i].classList.contains('active')){
                texttv[i].classList.add('active');
            }else{
                for(let p=0; p<statusBtn.length; p++){
                    texttv[i].classList.remove('active');
                }
            }

            //상태 버튼
                for(let j=0; j<statusBtn.length; j++){
                        statusBtn[j].classList.remove('active');
                }
                statusBtn[i].classList.add('active');
            });
        }

        // 자동
        function autoSlide(){

            var idx = 0;

            setInterval(function(){
                let width = -960 * idx;

                for(let j=0; j<statusBtn.length; j++){
                    img[j].style.transform = `translateX(${width}px)`;
                    img[j].classList.remove('active');
                }

                img[idx].classList.add('active');

                // 텍스트 슬라이드
                if(img[idx].classList.contains('active')){

                    for(let p=0; p<statusBtn.length; p++){
                        texttv[p].classList.remove('active');
                    }

                    texttv[idx].classList.add('active');
                }

                for(let j=0; j<statusBtn.length; j++){
                    statusBtn[j].classList.remove('active');
                }
                statusBtn[idx].classList.add('active');

                if(idx == 0){
                    bg_style.innerHTML = ".container::before {left:-55% !important}";
                }else if(idx == 1){
                    bg_style.innerHTML = ".container::before {left:-35% !important}";
                }else if(idx == 2){
                    bg_style.innerHTML = ".container::before {left:-15% !important}";
                }else if(idx >= 3){
                    bg_style.innerHTML = ".container::before {left:0% !important}";
                }
            
                idx++;

                if(idx >= img.length){
                    idx = 0;
                }

            },3000);
        }

        autoSlide();
    }

//TODO : 캐릭터 슬라이드영역
var ul = document.querySelector('.goods .con ul'),
    li = document.querySelectorAll('.goods .con ul li'),
    text = document.querySelectorAll('.goods .con ul li .text'),
    speScroll = document.querySelector('.goods .scroll_bar_status');

    // console.log(li.length);

function move(){
    var index = 0;
    var num = 1;

    setInterval(function(){
        const width = -440 * (index);
        const stawidth = 100 * (index);

        for(let j=0; j<li.length; j++){
            li[j].classList.remove('active');
            text[j].classList.remove('fadeInDown');
            li[j].style.transform = `translateX(${width}px)`;
        }

        li[index].classList.add('active');
        text[index].classList.add('fadeInDown');

        // console.log(index);

        index++;

        if(index == 4 || index == 8 || index == 12){
            speScroll.style.transform = `translateX(${100*num}%)`;

            // console.log(num);        
            
            num++
        }
            
        if(index >= li.length){
            setTimeout(() => {
                speScroll.style.transform = `translateX(${0*num}%)`;
                num = 1;
            }, 3000);
            index = 0;
        }

    },3000);
}

// TODO : 메인 슬라이드 영역
// console.log(mainImg[1]);

function main_slider(){
    const inner = document.querySelector('.slide_inner > ul');

    for(let i=0; i < mainImg.length; i++){

        var li = document.createElement('li');
        var img = document.createElement('img');
        var h4 = document.createElement('h4');
        
        inner.appendChild(li);
        li.appendChild(img);
        li.appendChild(h4);

        li.classList.add('slider_count');

        img.setAttribute('src',mainImg[i].img);
        h4.innerHTML = mainImg[i].title;
    }
}

main_slider();

// TODO : 메인 슬라이더 배경 변경

var colors = [];
var currentIndex = 0;

for(let q = 0; q<mainImg.length; q++){
    // console.log(mainImg[q].color);
    colors.push(mainImg[q].color);
}

$(".slide_inner ul").on("beforeChange", function (){
    $("main").css("background-color", colors[currentIndex]);
    currentIndex++;
});

// currentIndex++%colors.length

$('.slide_inner ul').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    autoplay: true,
    arrows: true,
    dots: true,
});

//TODO : 미들 배너 슬라이드

$('.banner_img').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrow: false
});

// TODO : 스페셜영역 슬라이드
$(function() {  
    $('#scroller1').simplyScroll({
    });
});

$(function() {  
    $('#scroller2').simplyScroll({
    });
});

$(function() {  
    $('#scroller3').simplyScroll({
    });
});

$(function() {  
    $('#scroller4').simplyScroll({
    });
});

$('.brandslider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',

  });





















//TODO : 메인 슬라이드 영역
// transform: translateX(-100%);
// const rightBtn = document.querySelector('.arrow_right'),
//       leftBtn = document.querySelector('.arrow_left'),
//       mainImg = document.querySelectorAll('.main .slide_box ul li'),
//       mainStatus = document.querySelectorAll('.main .status img');

    //   console.log(mainImg.length); //12

//     var right = 0;
//     var left = 0;

// mainStatus[0].classList.add('active');
// mainImg[0].classList.add('active');

// rightBtn.addEventListener('click',function(){
//     console.log('right');
//     right++;

//     const plus = -100 * right;
//     // console.log(plus);

//     for(let i=0; i<mainStatus.length; i++){
//         mainStatus[i].classList.remove('active');
//         // mainImg[i].classList.remove('active');
//     };

//     mainStatus[right].classList.add('active');
//     mainImg[right].classList.add('active');
    
//     for(let k=0; k<mainImg.length; k++){
//         mainImg[k].style.transform = `translateX(${plus}%)`;
//     }
// });

// leftBtn.addEventListener('click',function(){
//     // console.log('left');
//     right--;

//     console.log(right);

//     const minus = -100 * right;
//     // console.log(minus);

//     for(let i=0; i<mainStatus.length; i++){
//         mainStatus[i].classList.remove('active');
//         mainImg[i].classList.remove('active');
//     };

//     mainStatus[right].classList.add('active');
//     mainImg[right].classList.add('active');
    
//     for(let k=0; k<mainImg.length; k++){
//             mainImg[k].style.transform = `translateX(${minus}%)`;
//     }
// });

// function main(){
//     const ul = document.querySelector('.slide_box > ul'),
//           li = document.querySelectorAll('.slide_box > ul > li'),
//           first = ul.firstElementChild.cloneNode(true);
//           // h4 = document.querySelectorAll('.slide_wrap li h4');

//         ul.appendChild(first);

//     function move_main(){
//         var index = 0;

//         setInterval(function(){
//             const minus = -100 * (index+1);

//             for(let i=0; i<li.length; i++){
//                 li[i].style.transition = "0.2s";
//                 li[i].style.transform = `translateX(${minus}%)`;
//             }

//             index++;

//             if(index === 5){
//                 setTimeout(function(){

//                     for(let j=0; j<li.length; j++){
//                         li[j].style.transition = "0s";
//                         li[j].style.transform = `translateX(0%)`;
//                     }

//                 },201);

//                 index = 0;
//             }
//         },3000);
//     }

//     move_main();
// }
    

document.addEventListener("DOMContentLoaded",function(){
    move();
    newSlide();
    recipe();
    tv();
});




