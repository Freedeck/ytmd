setInterval(() => {
	document.querySelectorAll('.button').forEach((button) => {
		if (button.getAttribute('data-interaction')) {
		  let dat = button.getAttribute('data-interaction');
		  dat = JSON.parse(dat);
		  if (dat.type == 'clock.time') {
			button.innerText = new Date(Date.now()).toLocaleTimeString();
		  } else if (dat.type == 'clock.date') {
			button.innerText = new Date(Date.now()).toLocaleDateString();
		  }
		}
	  });
	  
},1000)