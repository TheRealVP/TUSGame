var t;

function timedPanelSwitch(prev, next)
{
	clearTimeout(t);
	document.getElementById(next).classList.toggle('hidden');
      document.getElementById(prev).classList.toggle('hidden');
	  startTime(10, next);
}

function panelSwitch(prev, next)
{
	clearTimeout(t);
	document.getElementById(next).classList.toggle('hidden');
      document.getElementById(prev).classList.toggle('hidden');
}

function defeat(prev)
{
	clearTimeout(t);
	document.getElementById("defeat").classList.toggle('hidden');
      document.getElementById(prev).classList.toggle('hidden');
}
function timeout(panel)
{
	//alert('Calling Intro!');
	if(panel==='intro')
	{
		document.getElementById("darkstreet").classList.toggle('hidden');
      document.getElementById("intro").classList.toggle('hidden');
	}
}

function startTime( time, panel) {
	if(time===0)
		timeout(panel);
	time = time - 1;
  document.getElementById('timer').innerHTML = time;
  t = window.setTimeout(startTime, 1000, time, panel);
}
