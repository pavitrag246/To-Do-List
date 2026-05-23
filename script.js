let items = document.querySelectorAll("#tasklist li");

items.forEach(function(li){
    li.onclick = function () {
        li.remove();
    };
});
    function addTask(){
         let input = document.getElementById('inputtask').value;
         let list = document.getElementById('tasklist');
         let li = document.createElement('li');

         li.innerText = input;

    li.onclick = function () {
        li.remove();
    };

         list.appendChild(li);
       document.getElementById('inputtask').value = "";
        
    }
   