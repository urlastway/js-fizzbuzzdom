const list = document.querySelector(".list")


for (let i=1; i < 101; i++)
    {
    
    const item = document.createElement("li");
    item.classList.add("item");

    if ((i%3==0) && (i%5==0)){
    console.log("FizzBuzz");
    item.innerText = "FizzBuzz";
    }

    else if (i%5==0){

    console.log("Buzz");
    item.innerText = "Buzz";

    }

    else if (i%3==0){

    console.log("Fizz");
    item.innerText = "Fizz";
        
    }

    else {

    console.log(i)
    item.innerText = i;
    }

    list.append(item);
};
