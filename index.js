//================================This Project using Ajax Method=========================

let btn = document.getElementById('btn');
let jokes = document.getElementById('jokes');
let Url='518271ea5b7a18b178c9d9f18443'
let MyKey = `https:hindi-jokes-api.onrender.com/jokes?api_key=${Url}`;
// console.log(MyKey);


btn.addEventListener('click',()=>{
    // console.log('hello');
    const Container =new XMLHttpRequest()
    // console.log(Container);
    Container.open('GET',MyKey);
    // console.log('Hello');
    Container.onreadystatechange= function(){
        // console.log(Container.readyState);
        if (Container.readyState ===4) {
            // console.log(this.responseText);
            let MyData = JSON.parse(this.responseText)
            // console.log(MyData);
            jokes.innerText= MyData.jokeContent;
        }   
    }
    // console.log(Container.readyState); 0 se 1 tak jata hai {State Change karni hai tab 'OnreadyStateChnage wala lagana hai '}
    Container.send()
})
