    let todolist=JSON.parse(localStorage.getItem('todolist')) || [];
    rendertodolist();
    function enterfunction(event){
      if(event.key==='Enter'){
        dostuff();
      }
    }
    function rendertodolist(){
      let todolistelements="";
      
        let todo=todolist[i];
        todolist.forEach(function(element,i) {
          let htmlstuff=`<div>${element.name}</div><div>${element.date}</div><button onclick="
        todolist.splice(${i},1);
        rendertodolist();
        " 
        class="loop-button">Delete</button>`;
        todolistelements+=htmlstuff;
        });
      
      localStorage.setItem('todolist',JSON.stringify(todolist));
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
      )
      localStorage.setItem('todolist',JSON.stringify(todolist));
      inputvalue.value="";
      todolistelements="";
      rendertodolist();
    }
    