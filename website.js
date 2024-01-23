var inputr=document.getElementById('input')
function proces(){
        if(parseFloat(inputr.value)>0){
        var pr=(parseFloat(inputr.value*9/5)+32)
        document.getElementById('result').innerHTML=`${pr} F`;}
        else{
                document.getElementById('result').innerHTML="Sorry"
        }
}