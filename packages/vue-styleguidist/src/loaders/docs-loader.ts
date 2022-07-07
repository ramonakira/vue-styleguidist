// https://vue-loader.vuejs.org/guide/custom-blocks.html#example
import { loader } from 'webpack'
import { RawSourceMap } from 'source-map'

export default function (this: loader.LoaderContext, source: string | Buffer, map?: RawSourceMap) {
	const cb = this.async()
	if (cb) {
		cb(
			null,
			`export default function (Component) {
        Component.options = Component.options || {}
<<<<<<< renovate/major-vue-monorepo
		    Component.options.__docs = ${JSON.stringify(source)}
	    }`,
=======
        Component.options.__docs = ${JSON.stringify(source)}
      }`,
>>>>>>> dev
			String(map)
		)
	}
}
