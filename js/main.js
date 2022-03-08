//get dom element
const inputWrapper=document.querySelectorAll('.inputwrapper');
const placeholder=document.querySelectorAll('.placeholder');
const input=document.querySelectorAll('.input');
const selectwrapper=document.querySelectorAll('.selectwrapper');
const select=document.querySelectorAll('.select');
const placeholderS=document.querySelectorAll('.placeholderS');
const info=document.querySelectorAll('.info');
const forms=document.querySelector('#forms');
const submit=document.querySelector('#submit');
const wrapper=document.querySelector('.wrapper');
const modal=document.querySelector('.modal');


//handle input placeholder
inputWrapper.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        handleView(index);
    })
    item.addEventListener('keydown',(e)=>
    {
      var code = e.keyCode || e.which;
      if (code === 9) {
        handleTab(index)
      }
    });
    submit.addEventListener('click',(e)=>{
        let _isvalid=forms.checkValidity()
        if(!_isvalid){
            item.addEventListener('input',()=>{
                handleView(index);
            })
        }
    })
})
window.addEventListener('click',(e)=>{
    outsideClick(e)
})
//handle select placeholder
selectwrapper.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        handleSelect(index);
    })
})
//handle thanks message
submit.addEventListener('click',(e)=>{
    handleSub(e)
})

function handleView(index){
    const _transform ="translate3d(0px,-38px, 0) ";
    placeholder[index].style.transform = _transform;
    placeholder[index].style.webkitTransform = _transform;
    placeholder[index].style.msTransform = _transform;
    placeholder[index].style.fontSize="15px";
}
function handleTab(index){
    if(index<5){
        input[index+1].addEventListener('input',(e)=>{
            if(e.data!=''){
                handleView(index+1)
            }
        })
    }
}
function outsideClick(e){
    for (let i = 0; i< inputWrapper.length; i++) {
        if(e.target!=input[i] && input[i].value==''){
            // placeholder[i].style.opacity='1'
            const _transform ="translate3d(0px,0px, 0) ";
            placeholder[i].style.transform = _transform;
            placeholder[i].style.webkitTransform = _transform;
            placeholder[i].style.msTransform = _transform;
            placeholder[i].style.fontSize="25px";
        }
    }
}
function handleSelect(index){
    const _val=select[index].options[select[index].selectedIndex].value
    if(_val!==''){
        placeholderS[index].style.opacity='0'
    }
    else{
        placeholderS[index].style.opacity='1'
    }
}
function handleSub(e){
    let _isvalid=forms.checkValidity()
    if(_isvalid){
        e.preventDefault()
        document.body.style.overflowY='hidden'
        wrapper.style.opacity="0";
        setTimeout(() => {
            modal.style.display='block'
            setTimeout(() => {
                modal.style.opacity="1";
            }, 30);
        }, 810);
    }
}
function checkRefresh() {
    if (document.location.hash === '#visited') {
        return true;
    } else {
        document.location.hash = 'visited';
        return false;
    }
}
if(checkRefresh){
    forms.reset();
}