import fs          from 'node:fs'
import { resolve } from 'node:path'
import zip         from 'zip-folder'

export const zipDist = () => {
  const serverRoot = resolve(__dirname, '..')

  zip(resolve(serverRoot, 'dist'), resolve(serverRoot, 'dist.zip'), (err) => {
    if (err) {
      return console.log(err)
    }

    console.log('archive created.')

    fs.rmdirSync(resolve(serverRoot, 'dist'), {
      recursive: true
    })
  })
}
