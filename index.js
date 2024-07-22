function value(key,isCorrect){
    if(isCorrect){
        key.classList.toggle("correct");
    }
    else {
        key.classList.toggle("wrong");
    }
  
}