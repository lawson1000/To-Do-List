window.addEventListener("load",(e)=>{

    const name_form = document.querySelector("#name-form")
    const name_input = document.querySelector("#name_input");


    name_form.addEventListener("submit",(e) =>{
        const nameValue = name_input.value;
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
        }
    })
})