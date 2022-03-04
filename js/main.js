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
            handleView(index);
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

function handleView(index){
    input[index].addEventListener('input',(e)=>{
        if(e.data!=''){
            placeholder[index].style.opacity='0'
        }
    })
}
function handleTab(index){
    if(index<5){
        input[index+1].addEventListener('input',(e)=>{
            if(e.data!=''){
                placeholder[index+1].style.opacity='0'
            }
        })
    }
}
function outsideClick(e){
    for (let i = 0; i< inputWrapper.length; i++) {
        if(e.target!=input[i] && input[i].value==''){
            placeholder[i].style.opacity='1'
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