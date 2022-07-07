const path = require('path')
const fs = require('fs')

function getVuePackageVersion() {
	try {
		const pkg = require('vue/package.json')
		return pkg.version
	} catch (error) {
		return 'unknown'
	}
}

function updateIndexForVue2(){
  // commonjs
	const indexPath = path.join(__dirname, './index.cjs.js')
	const indexContent = `
  const Vue = require('vue')

  module.exports.h = () => {}
  module.exports.createApp = () => {}
  module.exports.resolveComponent = name => name
  module.exports.isVue3 = false
  module.exports.Vue2 = Vue
  `
	fs.writeFile(indexPath, indexContent, err => {
		if (err) {
			console.error(err)
		}
	})
  
  // esm
	const indexPathESM = path.join(__dirname, './index.esm.js')
	const indexContentESM = `
  import Vue from 'vue'

  export const h = () => {}
  export const createApp = () => {}
  export const resolveComponent = name => name
  export const isVue3 = false
  export { Vue as Vue2 }
  `

	fs.writeFile(indexPathESM, indexContentESM, err => {
		if (err) {
			console.error(err)
		}
	})
}

const version = getVuePackageVersion()

if (version.startsWith('2.')) {
	updateIndexForVue2()
}
