import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { builder: 'mkdist', format: 'cjs', ext: 'cjs', input: './src/' },
    { builder: 'mkdist', input: './src/' },
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
