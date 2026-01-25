    let array=[];
    function swapfunc(){
      array.push(document.querySelector('.something').value);
      document.querySelector('.something').value = '';
      let divcontent='';
      for(let i =0 ; i<array.length;i++){
      divcontent+=`<p>${2*array[i]}</p>`;
      }
      document.querySelector('.somediv').innerHTML = divcontent;
    }
    function enterkeyevent(event){
      if(event.key==='Enter'){
        swapfunc();
      }
    }