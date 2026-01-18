let todolist=[];
    function enterfunction(event){
      if(event.key==='Enter'){
        dostuff();
      }
    }
    function dostuff(){
      const inputvalue=document.querySelector('.input-bar');
      let todolistelements="";
      todolist.push(inputvalue.value);
      inputvalue.value="";
      todolistelements="";
      for(let i=0 ; i<todolist.length ; i++){
        todolistelements+=`<p>${todolist[i]}</p>`;
      }
      document.querySelector('.todolistelements').innerHTML=todolistelements;
    }