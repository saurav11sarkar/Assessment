document.getElementById('underline').addEventListener('click',function(){
    textAdd('underline')
})

document.getElementById('marker').addEventListener('click',function(){
    textAdd('bg-red-500')
})

function textAdd(className){

    const p =  document.querySelector('#p');

    p.removeEventListener('mouseup',selectTextHendele);
    p.addEventListener('mouseup',selectTextHendele);

    function selectTextHendele(){
        const selectText = window.getSelection().toString();

        if(selectText){
            const rang = window.getSelection().getRangeAt(0);
            const span = document.createElement('span');
            span.className = className;
            rang.surroundContents(span);
        }

        window.getSelection().removeAllRanges();
        p.removeEventListener('mouseup', selectTextHendele);

    }

}


