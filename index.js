const AsarBundleRunner = require('asar-bundle-runner');
AsarBundleRunner.extract('asarbundle.asar').then(AsarBundleRunner.run).then(dat => {
	console.log(dat)
})