window.addEventListener("load",(e)=>{

    const name_form = document.querySelector("#name-form")
    const name_input = document.querySelector("#name_input");


    name_form.addEventListener("submit",(e) =>{
        const nameValue = name_input.value.toLowerCase();
        let acceptInput = /^[A-Za-z]+$/;
        if(!nameValue){
            alert("Please Enter Your Name")
            e.preventDefault();
            return false;
        }
        else if(!(nameValue.match(acceptInput))){
            alert("Please Enter Only Alphabeths with no Space")
            e.preventDefault();
            return false;
        }
        else if(nameValue.length < 3){
            alert("Name must be 3 letters long")
            e.preventDefault();
            return false;
        }
        else{
            console.log("Welcome")

            // Add to Storage if not exist
            var name = `${nameValue.toLowerCase()}TaskStore`;
            var checkStore = localStorage.getItem(name)
            
            if (checkStore == null) {
                localStorage.setItem(name, new Array());
            }

        }
    })
    
})