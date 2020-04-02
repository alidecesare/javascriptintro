var trumpArray = ["we have the coronavirus under control", "china is buying masks from us", "we are at war with the coronavirus", "i am a wartime president", "we will win this war", "the china virus", "we have business with many companies, many big companies, who are making masks for us, we have so many masks that i am not even worried for my safety"];

var randomIndex = Math.floor( Math.random() * trumpArray.length );
console.log(randomIndex);

alert("What will Trump say in his next coronavirus briefing: " + trumpArray[randomIndex]);
