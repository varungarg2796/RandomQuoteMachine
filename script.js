//Some javascript will come here

var arr= ["The ones who are crazy enough to think they can change the world are the ones that do.",
		  "Good, better, best. Never let it rest. Until your good is better and your better is best.",
		  "You don't have to have it all figured out to move forward.",
		  "Step through new doors. The majority of the time there's something fantastic on the other side.",
		  "Doing what you like is freedom. Liking what you do is happiness.",
		  "Your life is your message to the world. Make sure it's inspiring.",
		  "Even if you're on the right track, you'll get run over if you just sit there.",
		  "Don't let a hard lesson harden your heart.",
		  "Surround yourself with positive people who will support you when it rains, not just when it shines.",
		  "You'll be surprised to know how far you can go from the point where you thought it was the end.",
		  "A happy person is not a person in a certain set of circumstances, but rather a person with a certain set of attitudes."];
var myArray = [0,1,2,3,4,5,6,7,8,9,10];
var rand;

function tweetIt()
{
	window.open('http://twitter.com/intent/tweet?text=' + $('#quoteDiv').text());
}

function changeQuote () 
{
	shuffle();
	if(myArray.length!=0)
	{
		$("#quoteDiv").text(arr[rand]);
	}
}
 function shuffle()
 {
 	if(myArray.length==0)
 	{
 		$("#quoteDiv").text("That is all the motivation you will get today");
 	}
 	rand = myArray[Math.floor(Math.random() * myArray.length)];
 	var index = myArray.indexOf(rand);
 	myArray.splice(index,1);
 }
