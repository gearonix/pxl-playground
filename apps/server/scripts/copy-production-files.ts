import fs from 'node:fs'
import { resolve } from 'node:path'

const moduleRoot = resolve(__dirname, '..')

const productionEnv = resolve(moduleRoot, '..', '..', '.env.prod')
const dist = resolve(moduleRoot, 'dist')

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true })
}

fs.copyFile(productionEnv, resolve(dist, '.env.prod'), console.log)

fs.copyFile(
  resolve(moduleRoot, 'package.json'),
  resolve(dist, 'package.json'),
  console.log
)

const prismaDir = resolve(dist, 'prisma')

fs.mkdirSync(prismaDir, { recursive: true })

fs.copyFile(
  resolve(moduleRoot, 'prisma', 'schema.prisma'),
  resolve(prismaDir, 'schema.prisma'),
  console.log
)

const tmpDir = resolve(dist, 'tmp')

fs.mkdirSync(tmpDir, { recursive: true })

fs.writeFile(resolve(tmpDir, 'restart.txt'), '', console.log)

console.log('Production files transferred successfully.')
