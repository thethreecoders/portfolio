console.log('hello!');
function hideshow(){
    let x=document.getElementsByClassName('navbar');
    
    if(x[0].style.display!='none')
        {
            x[0].style.display='none'
            //x[0].className='rp'; 
        }
        else
        {
            x[0].style.display='inline';
        }
}    
