    let array=[];
    function addnum(){
      array.push(Number(document.querySelector('.something').value));
      document.querySelector('.something').value = '';
      let divcontent='';
      let num= Number(document.querySelector('.add-something').value);
      for(let i =0 ; i<array.length;i++){
      divcontent+=`<p>${num+array[i]}</p>`;
      }
      document.querySelector('.somediv').innerHTML = divcontent;
    }
    function enterkeyevent(event){
      if(event.key==='Enter'){
        addnum();
      }
    }
