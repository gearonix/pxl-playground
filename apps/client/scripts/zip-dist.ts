import fs          from 'node:fs'
import { resolve } from 'node:path'
import zip         from 'zip-folder'

export const zipDist = () => {
  const clientRoot = resolve(__dirname, '..')

  zip(resolve(clientRoot, 'dist'), resolve(clientRoot, 'dist.zip'), (err) => {
    if (err) {
      return console.log(err)
    }

    console.log('archive created.')

    fs.rmdirSync(resolve(clientRoot, 'dist'), {
      recursive: true
    })
  })
}

zipDist()
