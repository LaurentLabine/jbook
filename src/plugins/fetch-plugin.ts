import * as esbuild from 'esbuild-wasm'
import axios from 'axios'
import localForage from 'localforage'

const fileCache = localForage.createInstance({
  name: 'filecache'
});

export const fetchPlugin = (inputCode: string) => {
  return {
    name: 'fetch-plugin',
    setup(build: esbuild.PluginBuild) {
    build.onLoad({ filter: /.*/ }, async (args: any) => {
 
      if (args.path === 'index.js') {
        return {
          loader: 'jsx',
          contents: inputCode,
        }
      }
    
      // Check to see if we already fetched this file and if it is in the cache.
    
      const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path)
    
      //  If it is, return it immediately.
      if(cachedResult) return cachedResult
    
    
      const { data, request } = await axios.get(args.path)
      //Store response in cache
    
      const result: esbuild.OnLoadResult = {
        loader: 'jsx',
        contents: data,
        resolveDir: new URL('./', request.responseURL).pathname
      }
    
      // Otherwise, store in cache.
      await fileCache.setItem(args.path, result)
    
      return result
    })
    }
  }
}

