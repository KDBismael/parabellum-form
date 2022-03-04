//get DOM element

const wrapper=document.querySelector('.wrapper');
const modal=document.querySelector('.modal');
const svgfirst=document.querySelector('.firstSvg');
const svgsecond=document.querySelector('.secondSvg');
const Svgthird=document.querySelector('.thirdSvg');

let isvalid;
let id=setInterval(() => {
    isvalid=forms.checkValidity()
    if(isvalid){
        Rocket()
        clearInterval(id) 
    }
}, 200);
submit.addEventListener('click',(e)=>{
    let _isvalid=forms.checkValidity()
    if(_isvalid){
        e.preventDefault()
        document.body.style.overflowY='hidden'
        svgsecond.style.display='none'
        thirdRocket()
    }
})


function Rocket(){
    let firstRocket = bodymovin.loadAnimation({
        container:svgfirst, 
        path: 'https://assets3.lottiefiles.com/packages/lf20_exdbeha7.json', 
        renderer: 'svg', 
        loop: false,
        autoplay: true,
        name: "first",
    })
    firstRocket.addEventListener('complete',secondRocket)
    // ()=>{firstRocket.playSegments([0,20],true)}  
}
function secondRocket(){
    svgfirst.style.display='none'
    let secondRocket = bodymovin.loadAnimation({
        container:svgsecond, 
        path: 'https://assets5.lottiefiles.com/packages/lf20_oxwk4bgi.json', 
        renderer: 'svg', 
        loop: true,
        autoplay: true,
        name: "second",
    })
}
function thirdRocket(){
    svgfirst.style.display='none'
    let thirdRocket = bodymovin.loadAnimation({
        container:Svgthird, 
        path: 'https://assets8.lottiefiles.com/packages/lf20_70c5dvtn.json', 
        renderer: 'svg', 
        loop:false,
        autoplay: true,
        rendererSettings: {
            // progressiveLoad:false,
            preserveAspectRatio: 'none' ,
            viewBoxSize: "0 0 1440 800"
        },
        name: "third",
    })
    thirdRocket.addEventListener('complete',()=>{
        Svgthird.style.opacity="0";
        wrapper.style.opacity="0";
        setTimeout(() => {
            modal.style.opacity="1";
            modal.style.display='block'
        }, 310);
    })
}