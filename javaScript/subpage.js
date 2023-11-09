function plus(){
    if(Number(document.getElementById('vd1').textContent) >= 1){
        document.getElementById('vd1').innerHTML++;
    }
}

function minus(){
    if(Number(document.getElementById('vd1').textContent) > 1){
        document.getElementById('vd1').innerHTML--;
    }
}
