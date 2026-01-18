    let array=[];
    function swapfunc(){
      array.push(document.querySelector('.something').value);
      [array[0],array[array.length-1]]=[array[array.length-1],array[0]];
      document.querySelector('.something').value = '';
      let divcontent='';
      for(let i =0 ; i<array.length;i++){
      divcontent+=`<p>${array[i]}</p>`;
      }
      divcontent+=`<p>the last element in the array is ${array[array.length-1]}</p>`;
      document.querySelector('.somediv').innerHTML = divcontent;
      [array[0],array[array.length-1]]=[array[array.length-1],array[0]];
    }
    function enterkeyevent(event){
      if(event.key==='Enter'){
        swapfunc();
      }
    }