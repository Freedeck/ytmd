// Here in this file, you can do anything you want with Companion.
// This is the file that will be loaded by Companion when the plugin gets enabled.

/*

Keep in mind, this will run on every page.
This is an example so you don't do that.

*/

if (document.title != 'Freedeck v6 - Home') {};
// This locks us to the home page.

const header = document.createElement('h1');
header.innerText = "Hello from JS Hooks!";

document.body.prepend(header);

universal.listenFor('button', (btnDat) => {
	btnDat = btnDat[0]
	if (btnDat.type == 'fd.example.jshook') {
		console.log(btnDat.type + ' | Hello from JS Hooks!')
		universal.sendToast('Hello from JS Hooks!')
	}
})


// This will add a H1 to the page, indicating success of the hook.