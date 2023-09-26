import { copyProductionFiles } from './copy-production-files'
import { zipDist }             from './zip-dist'

const postBuild = async () => {
  await copyProductionFiles()
  await zipDist()
}

postBuild()
