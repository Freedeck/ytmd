const AsarBundleRunner = require('asar-bundle-runner');
const asar = require('@electron/asar');
/**
 * * Freedeck Developer Environment
 * Welcome!
 * - Edit the FDE_Settings object below to configure your environment.
 */

let name = 'ExamplePlugin'
let bundleName = name + '.Freedeck'
// let bundleName = 'ExamplePlugin.Freedeck'
const FDE_Settings = {
	UseScripts: true,
	BundlePrebuild: name,
	BundleName: bundleName,
	scripts: [],
	build: [buildPhase],
	extract: [extractPhase],
	run: [runPhase],
	_abr_extract: "",
	_abr_run_output: ""
}

function buildPhase() {
	return new Promise((resolve, reject) => {
		console.log('Building!')
		asar.createPackage(FDE_Settings.BundlePrebuild + ".src", FDE_Settings.BundleName).then(() => {
			console.log('Created bundle: ' + FDE_Settings.BundleName)
			extractPhase().then(() => {
			}).catch(console.error)
			resolve(true);
		}).catch(console.error)
	})
}

function extractPhase() {
	return new Promise((resolve, reject) => {
		AsarBundleRunner.extract(require('node:path').join(FDE_Settings.BundleName)).then(bundleName => {
			FDE_Settings._abr_extract = bundleName
			console.log('Extracted bundle: ' + bundleName + ' to ' + FDE_Settings._abr_extract)
			runPhase().then(() => {
				resolve(true);
			}).catch(console.error)
			resolve(true);
		}).catch(reject)
	})
}

function runPhase() {
	return new Promise((resolve, reject) => {
		AsarBundleRunner.run(FDE_Settings._abr_extract).then(output => {
			FDE_Settings._abr_run_output = output
			resolve(true)
		}).catch(reject)
	})
}

buildPhase()