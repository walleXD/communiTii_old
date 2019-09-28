/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const modules = []

const plugins = [
  [
    withTM,
    {
      transpileModules: modules
    }
  ],
  nextEnv({
    staticPrefix: 'COMMUNITII_STATIC_',
    publicPrefix: 'COMMUNITII_PUBLIC_'
  })
]

const nextConfiguration = {
  distDir: '../build'
}

module.exports = withPlugins(
  [...plugins],
  nextConfiguration
)
