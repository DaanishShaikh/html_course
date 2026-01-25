    let todolist=[];
    rendertodolist();
    function enterfunction(event){
      if(event.key==='Enter'){
        dostuff();
      }
    }
    function rendertodolist(){
      let todolistelements="";
      for(let i=0 ; i<todolist.length ; i++){
        let todo=todolist[i];
        let htmlstuff=`<div>${todo.name}</div><div>${todo.date}</div><button onclick="
        todolist.splice(${i},1);
        rendertodolist();
        " 
        class="loop-button">Delete</button>`;
        todolistelements+=htmlstuff;
      }
      
      document.querySelector('.todolistelements').innerHTML=todolistelements;
    }
    function dostuff(){
      const inputvalue=document.querySelector('.input-bar');
      const dateinputvalue=document.querySelector('.input-date');
      const name=inputvalue.value;
      const date=dateinputvalue.value;
      todolist.push(
        {
          // name:name,
          // date:date
          name,
          date
        }
      );
      inputvalue.value="";
      todolistelements="";
      rendertodolist();
    }
    