


// btn.addEventListener('click', msg)

function calcular() {

    let list = document.getElementById("myList");
    
    
    let task = document.querySelector('input.task')
    let taskV = (task.value)
    const desc = document.querySelector('.desc')
    // desc.innerHTML = taskV 
    const tarefas = [taskV]
    task.value = ''

    // setTimeout(() => {
    //     window.alert(tarefas)    ;
    //   }, "1000");


    if (taskV === ''){
        task.style.borderColor = "red"
    }else{
        tarefas.forEach((item)=>{
            task.style.borderColor = "black"
            let li = document.createElement("li");
            li.innerHTML = item;
            list.appendChild(li);
          })
    
    }


    
}


