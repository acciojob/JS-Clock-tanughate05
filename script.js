//your code here
setInterval(() =>{
	date= new Date();
	htime= d.getHours();
	mtime = d.getMinutes();
	stime=d.getSeconds();
	//formula
	hrotation =30*htime + mtime/2;
	mrotation =6*mtime;
	srotation =6*stime;

	hand hour-hand.style.transform='rotate(${hrotation}deg)';
	hand min-hand.style.transform='rotate(${mrotation}deg)';
	hand second-hand.style.transform='rotate(${srotation}deg)';
},1000);