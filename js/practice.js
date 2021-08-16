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

// 필터열기 닫기
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
      chekbox = document.querySelectorAll('.filter_option ul li input'),
      chekbox_txt = document.querySelectorAll('.filter_option ul li a'),
      sel_box = document.querySelector('.filter_select'),
      sel_reset = document.querySelector('.filter_select button'),
      sel_option = document.querySelector('.select_list');

var arr = [];
var index = 0;

for(let i=0; i<option.length; i++){

    option[i].addEventListener('click',function(){

        var text = chekbox_txt[i].innerHTML 

        option[i].classList.toggle('on');
        sel_box.classList.add('on');

        if(option[i].classList.contains('on')){ //만약 선택하면
            arr.push(text); //arr배열에 txt 넣기
            make();
        }else{

            const sel_option_text = document.querySelectorAll('.select_list > li > a'),
                  sel_option_btn = document.querySelectorAll('.select_del'),
                  sel_option_list = document.querySelectorAll('.select_list > li');

            for(let k=0; k<arr.length; k++){

                const innerText = sel_option_text[k].innerHTML;

                if(arr[k] === text && arr[k] === innerText){
                    arr.splice(k,1);
                    index--;

                    sel_option_list[k].remove();  
                }
            }
        }

        del();

        console.log(arr);

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
        }

        index = 0;
        localStorage.clear();
    });
}

reset();

function del(){

const sel_option_text = document.querySelectorAll('.select_list > li > a'),
      sel_option_btn = document.querySelectorAll('.select_del'),
      sel_option_list = document.querySelectorAll('.select_list > li');

    for(let i=0; i<arr.length; i++){

        var text = chekbox_txt[i].innerHTML 

        sel_option_btn[i].addEventListener('click',function(){
            sel_option_list[i].remove();
            console.log(chekbox_txt[i].dataset.code)

            for(let k=0; k<arr.length; k++){
                const big = chekbox_txt[i].dataset.code;
                // const small = arr[k].dataset.code;

                console.log(arr[k]);

                // console.log(innerText);

                // if(big === small){
                //     arr.splice(k,1);
                //     option[i].classList.remove('on');

                //     // console.log(arr[k])
                //     // index--;
                // }
            }
        });
    }
}

