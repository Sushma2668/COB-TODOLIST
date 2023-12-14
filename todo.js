var todo = [];
        const input = document.getElementById("input-todo");
        const task = document.getElementById("task")

        function add(){
            if(input.value==""){
                alert("please enter your task");
            }
            else{
                    let ele = document.createElement("li");
                    ele.innerHTML = input.value
                    task.appendChild(ele);


                    let icon = document.createElement("i");
                    icon.innerHTML = `<i class="fa fa-trash"></i>`;
                    ele.appendChild(icon);

                    ele.querySelector("i").addEventListener("click",remove);
                    function remove(){
                        ele.remove();
                    }

                    let done = document.createElement("span");
                    done.innerHTML= "\u2713";
                    ele.appendChild(done);

                    ele.querySelector("span").addEventListener("click",dash);
                    function dash(){
                        ele.style.textDecoration = 'line-through'; 
                        ele.style.textDecorationColor = 'blue';
                    }

                }
                input.value="";
            }