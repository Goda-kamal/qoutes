var qoutes=[
    {
        qoute:"Be yourself; everyone else is already taken.",
        author:"― Oscar Wilde",
    },
    {
        qoute:"“So many books, so little time.”",
        author:"― Frank Zappa",
        
    },
    {
        qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:"― Albert Einstein",
        
    },
    {
        qoute:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero",
        
    },
    {
        qoute:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West",
        
    }
]


var randomNumber
var num
function getRandom(){
    
    
    do{
     randomNumber=Math.floor(Math.random()*qoutes.length)
    }while (randomNumber==num){
    num=randomNumber
        console.log(randomNumber);
        // console.log(qoutes[randomNumber]);
        document.getElementById("quote").innerHTML=qoutes[randomNumber].qoute
        document.getElementById("author").innerHTML=qoutes[randomNumber].author
        
    }
}
