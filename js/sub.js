//TODO : 헤더영역
window.addEventListener('scroll',function(){
    
    const Y = Math.round(window.scrollY);

    const headBg = document.querySelector('.head_inner');
    const fix = document.querySelector('#header > .container');
    const logo = document.querySelector('.member > .logo');
    const line = document.querySelector('.main #header .container');

    if(Y >= 80){
        headBg.classList.add('active');
        fix.classList.add('fixed');
        logo.classList.add('active');
        document.querySelector("#header > .container").style.border = "none";
        
    }else{
        headBg.classList.remove('active');
        fix.classList.remove('fixed');
        logo.classList.remove('active');
        document.querySelector("#header > .container").style.border = "1px solid #d8d8d8";
    }
});

// TODO : 사이드 메뉴 아코디언
$('.side_con ul li').on('click',function(){

    if( $(this).hasClass('active') ){
        $(this).removeClass('on');
        $(this).find('.sub_arrow').css({"background":"url(../img/icon_arrowdown.png) no-repeat 98% center"});
        $('.side_con ul li').removeClass('active').find('.innerul').stop().slideUp(); 		
        return;
    }else{
        $(this).addClass('on');
        $(this).addClass('active').find('.innerul').stop().slideDown();
        $(this).find('.sub_arrow').css({"background":"url(../img/icon_arrowup.png) no-repeat 98% center"}); 
    }
});

// TODO : 컨텐츠 html
function conhtml(){
    const boxul = document.querySelector('.box ul');
    

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

// TODO : 리스트 열고 닫기
const top_list = document.querySelector('.top_sec .list');

top_list.addEventListener('click',function(){
    top_list.classList.toggle('on');
});

// TODO : 필터열기 닫기
$('.filter > a').on('click',function(){

    if($(this).hasClass('off')){
        $(this).removeClass('off');
        $(this).html('필터열기');
        $('.filter_option').stop().slideUp();
    }
    else{
        $(this).addClass('off');
        $(this).html('필터닫기')
        $('.filter_option').stop().slideDown();
    }
});

const option = document.querySelectorAll('.filter_option ul li'),
      input = document.querySelectorAll('.filter_option ul li input'),
      a = document.querySelectorAll('.filter_option ul li a'),
      select = document.querySelector('.filter_select'),
      listul = document.querySelector('.select_list');

var arr = [];
var idx = 0;

for(let i=0; i<option.length; i++){
    option[i].addEventListener('click',function(){
        option[i].classList.toggle('on');
        select.classList.add('on');

        const text = a[i].innerHTML;

    // console.log(text); 
    console.log(i)
    // console.log(uniqueArr);

        if(option[i].classList.contains('on')){
            arr.push(text);
            make();

        }else{
            const list = document.querySelectorAll('.select_list > li');
            const lista = document.querySelectorAll('.select_list > li > a');

            for(let k=0; k<arr.length; k++){

                const selectText = lista[k].innerHTML;

                if(arr[k] === text && arr[k] === selectText){
                    arr.splice(k,1);
                    list[k].remove();
                    i--;
                    idx--;
                }
            }
        }

        console.log(idx);

        function make(){

            var li = document.createElement('li');
            var btn = document.createElement('button');
            var litext = document.createElement('a');
        
            listul.appendChild(li);
            li.appendChild(litext);
            li.appendChild(btn);
        
            btn.classList.add('select_del');
    
            litext.innerHTML = arr[idx];

            idx++
        }

        const set = new Set(arr);
        const uniqueArr = [...set];

        localStorage.setItem('filter', JSON.stringify(uniqueArr));
        
        // innerhtml();

        // del();
    });
    
}

function innerhtml(){
    var select_o = localStorage.getItem('filter'); 
    var output = JSON.parse(select_o);

    console.log(output.length);

    // console.log(output.length);

    for(let i=0; i<output.length; i++){
        var li = document.createElement('li');
        var btn = document.createElement('button');
        var litext = document.createElement('a');
    
        listul.appendChild(li);
        li.appendChild(litext);
        li.appendChild(btn);
    
        btn.classList.add('select_del');

        litext.innerHTML = output[i];
    }
}

//TODO : 로컬스토리지 전체 삭제
reset.addEventListener('click',function(){
    for(let a=0; a<option.length; a++){
        option[a].classList.remove('on');

        listul.innerHTML = '';
        arr = []
    }

    idx = 0;
    localStorage.clear(); 
});

function del(){
    const del_btn = document.querySelectorAll('.select_del'),
          del_li = document.querySelectorAll('.select_list li');

        //   console.log(del_btn.length)

    for(let i=0; i<option.length; i++){
        
        const text = a[i].innerHTML;

        del_btn[i].addEventListener('click',function(){

            const list = document.querySelectorAll('.select_list > li');
            const lista = document.querySelectorAll('.filter_option ul li a');

            console.log(lista[i]);

            // console.log(lista[a]);

            del_li[i].remove();

            for(let k=0; k<arr.length; k++){

                const selectText = lista[k].innerHTML;

                if(arr[k] === text && arr[k] === selectText){
                    arr.splice(k,1);
                    option[i].classList.remove('on');
                    i--;
                    idx--;
                }
            }
        });
    }
}











