(function(){
    const calc=()=>{
        const oEle=document.documentElement
        const iWidth=oEle.clientWidth>750?750:oEle.clientWidth;
        oEle.style.fontSize=(iWidth/375)*20+'px';
    }
    calc()
    window.addEventListener('resize',calc)
})()