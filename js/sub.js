// TODO : 상단배너 닫기
const bannerbtn = document.querySelector('.top_banner .btn'),
      banner = document.querySelector('.top_banner');

      bannerbtn.addEventListener('click',function(){
        banner.style.display = 'none';
      });


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

// TODO : 리스트 열고 닫기
const top_list = document.querySelector('.top_sec .list');

top_list.addEventListener('click',function(){
    top_list.classList.toggle('on');
});

// TODO : 헤더영역
function scroll(){
    window.addEventListener('scroll',function(){
        
        const Y = Math.round(window.scrollY);

        const headBg = document.querySelector('.head_inner');
        const fix = document.querySelector('#header > .container');
        const logo = document.querySelector('.member > .logo');
        const hsub = document.querySelectorAll('.top_menu .sub');

        if(Y >= 80){
            headBg.classList.add('active');
            fix.classList.add('fixed');
            // logo.classList.add('active');

            hsub[0].style.top = '120px';
            hsub[1].style.top = '120px';
            hsub[4].style.top = '120px';

            hsub[2].style.top = '120px';
            hsub[3].style.top = '120px';
            hsub[5].style.top = '120px';
            
        }else{
            headBg.classList.remove('active');
            fix.classList.remove('fixed');
            // logo.classList.remove('active');

            hsub[0].style.top = '210px';
            hsub[1].style.top = '210px';
            hsub[4].style.top = '210px';
        
            hsub[2].style.top = '120px';
            hsub[3].style.top = '120px';
            hsub[5].style.top = '120px';
        }
    });
}

scroll();

//TODO : 헤더영역 메뉴
function header(){
    const headUl = document.querySelectorAll('.top_menu > ul > li'),
        logo = document.querySelector('.member > .logo'),
        head = document.querySelector('.head_inner');

    for(let i=0; i<headUl.length; i++){
        headUl[i].addEventListener('mouseover',function(){
            head.classList.add('active');
            // logo.classList.add('active');
        });
        
        headUl[i].addEventListener('mouseout',function(){
            head.classList.remove('active');
            // logo.classList.remove('active');
        });
    }

    function submenu(){
        const li = document.querySelectorAll('.top_menu > ul > li'),
            head = document.querySelector('.head_inner'),
            sub = document.querySelectorAll('.top_menu .sub');

        for(let i = 0; i<li.length; i++){
            li[i].addEventListener('mouseover',function(){
                if(i === 0){
                    head.classList.add('over');
                    sub[0].style.display = 'block';
                }else if(i === 1){
                    head.classList.add('over1');
                    sub[1].style.display = 'block';
                }else if(i === 2){
                    sub[2].style.display = 'block';
                }else if(i === 3){
                    sub[3].style.display = 'block';
                }else if(i === 4){
                    head.classList.add('over2');
                    sub[4].style.display = 'block';
                }else{
                    sub[5].style.display = 'block';
                }
            });

            li[i].addEventListener('mouseout',function(){
                if(i === 0){
                    head.classList.remove('over');
                    sub[0].style.display = 'none';
                }else if(i === 1){
                    head.classList.remove('over1');
                    sub[1].style.display = 'none';
                }else if(i === 2){
                    sub[2].style.display = 'none';
                }else if(i === 3){
                    sub[3].style.display = 'none';
                }else if(i === 4){
                    head.classList.remove('over2');
                    sub[4].style.display = 'none';
                }else{
                    sub[5].style.display = 'none';
                }
            });
        }
    }

    submenu();

    function eventsub(){
        const li = document.querySelectorAll('.sub .box ul li');
        const subli = document.querySelectorAll('.sub > .box > ul > li > ul');

        for(let i=0; i<li.length; i++){
            li[i].addEventListener('mouseover',function(){
                li[i].classList.add('on');
            });

            li[i].addEventListener('mouseout',function(){
                li[i].classList.remove('on');
            });
        }
    }

    eventsub();
}

header();

// TODO : 사이드메뉴
function side_slider(){
    function side(){
        const sub = document.querySelector('.sub'),
            cow = document.querySelector('.right_menu');

        cow.addEventListener('click',function(){
            sub.classList.toggle('active');
        });
    }

    side();

    const newlist = document.querySelector('.newlist_img ul'),
        ranklist = document.querySelector('.ranklist_img ul');

    function sidehtml(s,w){

        w.style.width = `${s.length*100+100}px`;

        for(let i=0; i<s.length; i++){
            w.innerHTML +=   `<li>
                                <img src="${s[i].img}" alt="">
                            </li>`
        }
    }

    sidehtml(newImg,newlist);
    sidehtml(rank,ranklist);

    const newitem = document.querySelectorAll('.newlist_img ul li'),
        newstatus = document.querySelector('.newlist_status > .status'),
        newfirst = newlist.firstElementChild.cloneNode(true);

    const rankitem = document.querySelectorAll('.ranklist_img ul li'),
        rankstatus = document.querySelector('.ranklist_status > .status'),
        rankfirst = ranklist.firstElementChild.cloneNode(true);

        newlist.appendChild(newfirst);
        ranklist.appendChild(rankfirst);

    // sideSlide();

    function side_move(p,s){
        var index = 0;
        var width = 120 / p.length;

        s.style.width = `${width}px`;

        setInterval(function(){
            const minus = 100 * (index+1);

            for(let i=0; i<p.length; i++){
                p[i].style.transition = "0.3s";
                p[i].style.transform = `translateX(-${minus}%)`;
                s.style.transform = `translateX(${minus}%)`;
            }

            index++;

            if(index === p.length){
                setTimeout(function(){

                    for(let j=0; j<p.length; j++){
                        p[j].style.transition = "0s";
                        p[j].style.transform = `translateX(0%)`;
                        s.style.transform = `translateX(0%)`;
                    }

                },000);

                index = 0;
            }
        },3000);
    }

    side_move(newitem,newstatus);
    side_move(rankitem,rankstatus);
}

side_slider();

//TODO : 업다운 스크롤
function updown(){
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

        if(Y >= 1300){
            up_down.classList.add('down');
            up_down.classList.remove('up');
        }else{
            up_down.classList.add('up');
            up_down.classList.remove('down');
        }
    });
}

updown();

// TODO : 사이드 메뉴 아코디언
$('.side_con ul li').on('click',function(){

    if( $(this).hasClass('active') ){
        $(this).removeClass('on');
        $(this).find('.sub_arrow').css({"background":"url(../img/icon_arrowdown.png) no-repeat 98% center"});
        $('.side_con ul li').removeClass('active').find('.innerul').stop().slideUp(); 		
        return;
    }

    $('.side_con ul li').removeClass('on');
    $('.side_con ul li').find('.sub_arrow').css({"background":"url(../img/icon_arrowdown.png) no-repeat 98% center"});
    $('.side_con ul li').removeClass('active').find('.innerul').stop().slideUp(); 	

    $(this).addClass('on');
    $(this).addClass('active').find('.innerul').stop().slideDown();
    $(this).find('.sub_arrow').css({"background":"url(../img/icon_arrowup.png) no-repeat 98% center"}); 
    
});


// TODO : 상품 리스트 뿌리기
function conhtml(){
    const boxul = document.querySelector('.side_right .box ul');
    

    for(let i=0; i<subImg.length; i++){

        var top = subImg[i].price;
        var low = subImg[i].origin;
    
        top = top.slice(0, -1);
        low = low.slice(0, -1);    
        top = top.split(',').join("");
        low = low.split(',').join("");
        

        if(!subImg[i].origin == ''){

            boxul.innerHTML += `
                                <li>
                                    <div class="box_inner">
                                        <div class="img_sec">
                                            <img src="${subImg[i].img}" alt="">
                                            <span></span>
                                        </div>

                                        <div class="tit_sec">
                                            <span>${subImg[i].title}</span>
                                            <div class="sub_sec">
                                                    <span class="hash">${subImg[i].hash}</span>
                                                    <strong class="discount">${subImg[i].price}</strong>
                                                    <span class="origin_price">${subImg[i].origin}</span>
                                                    <span class="per">${Math.round(100-((top/low)*100))}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>`
        }else{
            boxul.innerHTML += `
                                <li>
                                    <div class="box_inner">
                                        <div class="img_sec">
                                            <img src="${subImg[i].img}" alt="">
                                            <span></span>
                                        </div>

                                        <div class="tit_sec">
                                            <span>${subImg[i].title}</span>
                                            <div class="sub_sec">
                                                    <span class="hash">${subImg[i].hash}</span>
                                                    <strong class="discount">${subImg[i].price}</strong>
                                                    <span class="origin_price">${subImg[i].origin}</span>
                                                    <span class="per"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>`
        }
    }
}

conhtml();

// TODO : 필터열기 닫기
$('.filter > a').on('click',function(){

    if($(this).hasClass('off')){
        $(this).removeClass('off');
        $(this).html('필터열기');
        $('.filter_option').stop().slideUp();
        // $('.filter_select').removeClass('on');
    }
    else{
        $(this).addClass('off');
        $(this).html('필터닫기');
        $('.filter_option').stop().slideDown();
    }
});

const option = document.querySelectorAll('.filter_option ul li'),
      chekbox = document.querySelectorAll('.filter_option ul li input'),
      chekbox_txt = document.querySelectorAll('.filter_option ul li a'),  //dataset.code가 들어있음
      sel_box = document.querySelector('.filter_select'),
      sel_reset = document.querySelector('.filter_select button'),
      sel_option = document.querySelector('.select_list');

var arr = [];
var arr2 = [];
var index = 0;

for(let i=0; i<option.length; i++){

    option[i].addEventListener('click',function(){

        var text = chekbox_txt[i].innerHTML 
        var code = chekbox_txt[i].dataset.code

        option[i].classList.toggle('on');
        sel_box.classList.add('on');

        console.log(sel_option.childElementCount -1);

        if(option[i].classList.contains('on')){ //만약 선택하면
            arr.push(text); //arr배열에 txt 넣기
            arr2.push(code); //arr2배열에 code넣기
            make();
        }else{

            const sel_option_text = document.querySelectorAll('.select_list > li > a'),
                  sel_option_btn = document.querySelectorAll('.select_del'),
                  sel_option_list = document.querySelectorAll('.select_list > li');

            for(let k=0; k<arr.length; k++){

                const innerText = sel_option_text[k].innerHTML;

                if(arr[k] === text && arr[k] === innerText){
                    arr.splice(k,1);
                    arr2.splice(k,1);
                    index--;

                    sel_option_list[k].remove();  
                }
            }
        }

        // console.log(arr);

        del();

        if(sel_option.childElementCount == 0){
            sel_box.classList.remove('on');
        }

        const set = new Set(arr);
        const uniqueArr = [...set];

        localStorage.setItem('flter',JSON.stringify(uniqueArr)); //로컬스토리지에 넣기
    })
}

function make(){ //arr배열값을 넣기
    var li = document.createElement('li');
    var btn = document.createElement('button');
    var text = document.createElement('a');

    sel_option.appendChild(li);
    li.appendChild(text);
    li.appendChild(btn);

    btn.classList.add('select_del');
    
    text.innerHTML = arr[index]; //arr배열의 1,2,3,4~을 text의 값에 넣어줌
    index++;
}

function reset(){ //초기화
    sel_reset.addEventListener('click',function(){
        for(let i=0; i<option.length; i++){
            option[i].classList.remove('on');

            sel_option.innerHTML = '';
            arr = []; 
            arr2= [];
        }

        index = 0;
        localStorage.clear();

        if(sel_option.childElementCount == 0){
            sel_box.classList.remove('on');
        }
    });
}

reset();

function del(){

    const sel_option_text = document.querySelectorAll('.select_list > li > a'),
            sel_option_btn = document.querySelectorAll('.select_del'),
            sel_option_list = document.querySelectorAll('.select_list > li');

    for(let i=0; i<arr2.length; i++){
        sel_option_btn[i].onclick = function(e){
            e.preventDefault();
           
            // sel_option_list[i].remove(); //클릭한 arr i번째 지우고 

            // console.log(option[arr2[i]]);

            console.log(i);
            console.log(arr2[i])
            console.log(chekbox_txt[arr2[i]].dataset.code)


            for(let k=0; k<arr2.length; k++){

                const innerText = sel_option_text[i].innerHTML;

                if(arr2[k] === chekbox_txt[arr2[i]].dataset.code && arr[k] === innerText){

                    sel_option_list[k].remove();  
                    option[arr2[i]].classList.remove('on');
    
                    arr.splice(k,1);
                    arr2.splice(k,1);

                    localStorage.flter = arr;
                    index--;
                }
            }
            del();

            if(sel_option.childElementCount == 0){
                sel_box.classList.remove('on');
            }

            console.log(arr2);
            console.log(arr);
            console.log(sel_option_btn.length);
        };
    }
}

function mainSub(){ //메인페이지 선택영역에서 넘어온 친구들 
    if(!localStorage.mainindex == ""){
        const filter = document.querySelector('.filter > a'),
            select = document.querySelector('.filter_select'),
            option = document.querySelector('.filter_option'),
            sel_option = document.querySelector('.select_list'),
            optionLi = document.querySelectorAll('.filter_option ul li');

        filter.classList.add('off');
        filter.innerHTML = '필터닫기';
        select.classList.add('on');
        option.style.display = 'block';

        const data = JSON.parse(localStorage.getItem('main'));
        const index = JSON.parse(localStorage.getItem('mainindex'));

        // li넣기
        for(let i=0; i<data.length; i++){
            var li = document.createElement('li');
            var btn = document.createElement('button');
            var text = document.createElement('a');

            sel_option.appendChild(li);
            li.appendChild(text);
            li.appendChild(btn);

            btn.classList.add('select_del');
    
            text.innerHTML = data[i]; //arr배열의 1,2,3,4~을 text의 값에 넣어줌
        }

        // checkbox 불키기
        for(let j=0; j<index.length; j++){

            optionLi[index[j]].classList.add('on');
        }
    }
}

mainSub();

// TODO : 페이지 넘기기
function page(){
    const page = document.querySelectorAll('.page ul li');
    const li = document.querySelectorAll('.side_right > .box > ul > li');
    const pageli = document.querySelectorAll('.page ul li');

    for(let i=0; i<page.length; i++){
        page[i].addEventListener('click',function(){


        for(let j=0; j<page.length; j++){
            pageli[j].classList.remove('active');
        }

        pageli[i].classList.add('active');

        for(let p=0; p<li.length; p++){
            li[p].style.display = 'none';
        }

            if(i===0){
                for(let n=0; n<12; n++){
                    li[n].style.display = 'block';
                }
            }else if(i===1){
                for(let n=0; n<12; n++){
                    li[12+n].style.display = 'block';
                }
            }else if(i===2){
                for(let n=0; n<12; n++){
                    li[24+n].style.display = 'block';
                }
            }else if(i===3){
                for(let n=0; n<12; n++){
                    li[36+n].style.display = 'block';
                }
            }else if(i===4){
                for(let n=0; n<12; n++){
                    li[48+n].style.display = 'block';
                }
            }

        });
    }
}

page();

// TODO : 리스트 필터 적용
function html(x){
    const boxul = document.querySelector('.side_right .box ul');
    
    boxul.innerHTML = '';

    for(let i=0; i<x.length; i++){

        var top = x[i].price;
        var low = x[i].origin;
    
        top = top.slice(0, -1);
        low = low.slice(0, -1);    
        top = top.split(',').join("");
        low = low.split(',').join("");
        

        if(!x[i].origin == ''){

            boxul.innerHTML += `
                                <li>
                                    <div class="box_inner">
                                        <div class="img_sec">
                                            <img src="${x[i].img}" alt="">
                                            <span></span>
                                        </div>

                                        <div class="tit_sec">
                                            <span>${x[i].title}</span>
                                            <div class="sub_sec">
                                                    <span class="hash">${x[i].hash}</span>
                                                    <strong class="discount">${x[i].price}</strong>
                                                    <span class="origin_price">${x[i].origin}</span>
                                                    <span class="per">${Math.round(100-((top/low)*100))}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>`
        }else{
            boxul.innerHTML += `
                                <li>
                                    <div class="box_inner">
                                        <div class="img_sec">
                                            <img src="${x[i].img}" alt="">
                                            <span></span>
                                        </div>

                                        <div class="tit_sec">
                                            <span>${x[i].title}</span>
                                            <div class="sub_sec">
                                                    <span class="hash">${x[i].hash}</span>
                                                    <strong class="discount">${x[i].price}</strong>
                                                    <span class="origin_price">${x[i].origin}</span>
                                                    <span class="per"></span>
                                            </div>
                                        </div>
                                    </div>
                                </li>`
        }
    }
}

function listfillter(){
    const li = document.querySelectorAll('.side_right > .top_sec > .list > ul > li'),
          ul = document.querySelector('.side_right > .top_sec > .list > ul');

    function number(){
        var count = [];
        var result;

        for(let j=0; j<subImg.length; j++){
            count.push(subImg[j]); 
        }

        result = count.sort(function(a,b){
            return a.count - b.count;
        });

        html(result);
    }

    function favor(){
        var count = [];
        var result;

        for(let j=0; j<subImg.length; j++){
            count.push(subImg[j]); 
        }

        result = count.sort(function(a,b){
            return a.favor - b.favor;
        });

        html(result);
    }

    function low(){
        var count = [];
        var result;

        for(let j=0; j<subImg.length; j++){
            count.push(subImg[j]); 
        }

        result = count.sort(function(a,b){
            return a.price.slice(0,-1).split(',').join("") - b.price.slice(0,-1).split(',').join("");
        });

        html(result);
    }

    function high(){
        var count = [];
        var result;

        for(let j=0; j<subImg.length; j++){
            count.push(subImg[j]); 
        }

        result = count.sort(function(a,b){
            return b.price.slice(0,-1).split(',').join("") - a.price.slice(0,-1).split(',').join("");
        });

        html(result);
    }

    function string(){
        var count = [];
        var result;

        for(let j=0; j<subImg.length; j++){
            count.push(subImg[j]); 
        }

        result = count.sort(function(a,b){
            if(a.title.substr(0,1) === "[" || b.title.substr(0,1) === "["){
                a.title.substring(5) < b.title.substring(5) ? -1 : a.title.substring(5) > b.title.substring(5) ? 1 : 0;
            }else{
                return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
            }            
        });

        html(result);
    }
    
    function year(){
        var count = [];
        var result;

        for(let j=0; j<subImg.length; j++){
            count.push(subImg[j]); 
        }

        result = count.sort(function(a,b){
            return a.new>b.new ? -1 : a.new<b.new ? 1 : 0;           
        });

        html(result);
    }

    for(let i=0; i<li.length; i++){
        li[i].addEventListener('click',function(){

            ul.insertBefore(li[i],ul.firstChild);

            if(i === 0){
                year();
            }else if(i === 1){
                string();
            }else if(i === 2){
                low();
            }else if(i === 3){
                high();
            }else if(i === 4){
                favor();
            }else{
                number();
            }

            page();
        });
    }
}

// prev.insertBefore(next.firstChild, prev.firstChild);

listfillter();

