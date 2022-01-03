module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.js$': 'babel-jest'
	},
	moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
	testMatch: [
		'<rootDir>/packages/**/*.test.(ts|js|tsx)',
		'<rootDir>/packages/**/__tests__/*.(ts|js|tsx)'
	],
	setupFiles: ['./test/raf-polyfill.js', './test/jestsetup.js'],
	modulePaths: [
		'./packages/vue-styleguidist/src/client',
		'./packages/vue-styleguidist/node_modules/react-styleguidist/lib/client'
	],
	moduleNameMapper: {
		'^.+\\.css$': '<rootDir>/test/empty.js'
	},
	collectCoverageFrom: [
		'packages/*/src/**/*{!.d,}.{js,ts,tsx}',
		'!**/*.d.ts',
		'!packages/docgen-tests/**/*.*',
		'!packages/vue-cli-plugin-styleguidist/**/*.*'
	],
	testPathIgnorePatterns: ['<rootDir>/packages/*/lib/', '<rootDir>/packages/*/dist/'],
	snapshotSerializers: ['deabsdeep/serializer', 'jest-serializer-html']
}
