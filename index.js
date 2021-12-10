var b_list=document.getElementsByTagName("button");
for (let i=0;i<b_list.length;i=i+1)
{
	b_list[i].addEventListener("click",play_sound);
}
//b_list[0].addEventListener("click",play_sound);
function play_sound()
{
	var clicked_event=this.innerHTML;
	button_press(clicked_event);
	button_animation(clicked_event);
}
document.addEventListener("keypress",function(event)
{
	var buttonn=event.key;
	button_press(buttonn);
	button_animation(buttonn);
})
function button_animation(button)
{
	btn="."+button;
	console.log(btn);
	document.querySelector(btn).classList.add("pressed");
	setTimeout(function()
		{
			document.querySelector(btn).classList.remove("pressed");
		},100)
}
function button_press(event)
{

	switch (event)
	{
		case "w":
			var tom1=new Audio("sounds/tom-1.mp3")
			tom1.play();
			break;
		case "a":
			var tom2=new Audio("sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
			var tom3=new Audio("sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
			var tom4=new Audio("sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var crash=new Audio("sounds/crash.mp3");
			crash.play();
			break;
		case "k":
			var kick_bass=new Audio("sounds/kick-bass.mp3");
			kick_bass.play();
			break;
		case "l":
			var snare=new Audio("sounds/snare.mp3");
			snare.play();
			break;
		default:
			alert(clicked_event);
			break;
	}
}

// var audio=new Audio("sounds/tom-1.mp3");
	// audio.play();