import * as esbuild from 'esbuild-wasm'
 
export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      // Handles Root entryu file of index.js
      build.onResolve({filter: /(^index\.js$)/ }, () => {
        return { path: 'index.js', namespace: 'a'}
      })

      // Handles relative paths in a module
      build.onResolve({filter: /^\.+\//}, (args: any) => {
        return {
        namespace: 'a',
        path: new URL(args.path, 'https://unpkg.com' + args.resolveDir +  '/').href,
        }
      })

      // Handles main file of a module
      build.onResolve({filter: /.*/ }, async (args: any) => {       
        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`
        }
      })
    },
  }
}