let array=[];
    function lastelement(){
      array.push(document.querySelector('.something').value);
      document.querySelector('.something').value = '';
      let divcontent='';
      for(let i =0 ; i<array.length;i++){
      divcontent+=`<p>${array[i]}</p>`;
      }
      divcontent+=`<p>the last element in the array is ${array[array.length-1]}</p>`;
      document.querySelector('.somediv').innerHTML = divcontent;
      
    }
    function enterkeyevent(event){
      if(event.key==='Enter'){
        lastelement();
      }
    }