const form = document.querySelector("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    // console.log(height,weight)
    if(height === " "|| height < 0 || isNaN(height)){
        result.innerHTML="plz enter valid height";
    }
    else if(weight === " "|| weight < 0 || isNaN(weight)){
        result.innerHTML="plz enter valid height";
    }else{
        const ans = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`Your BMI is : ${ans}`;
    }
})