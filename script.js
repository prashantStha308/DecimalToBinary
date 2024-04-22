let binary=function(n){

    if(!Number.isInteger(n)|| typeof(n) == "string"){
        console.log("invalid");
    }

    let i=0;
    let count=[];
        while(n!=0){
            if(n%2==0){
                n=n/2;
                count[i]=0;
            }
            else{
                n=(n-1)/2;
                count[i]=1;
            }
            i++;
        }
    count=count.reverse();
    return count;
    
}

outputElement = $("#binary");

$("#convert-btn").click(function(){
    let decimal = parseInt($("#decimal").val());
    console.log(decimal);

    if(!Number.isInteger(decimal)|| typeof(decimal) == "string"){
        outputElement.text("Invalid number. Number cannot be float or string");
        return;
    }

    let res = binary(decimal);
    let result = res.join('');
    console.log("result: " + result);
    outputElement.text(result);
})

$("#decimal").keypress(function(event){
    if(event.which === 13){
        let decimal = parseInt($("#decimal").val());
        console.log(decimal);

        if(!Number.isInteger(decimal)|| typeof(decimal) == "string"){
            outputElement.text("Invalid number. Number cannot be float or string");
            return;
        }

        let res = binary(decimal);
        let result = res.join('')
        console.log("result: " + result);
        outputElement.text(result);
    }
})
