import fs from 'fs'
import path from 'path'

const ignoreFiles = ['response.js']
const basename = path.basename(module.filename);
ignoreFiles.push(basename)

export default (app) => {

  fs
    .readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && !ignoreFiles.includes(file) && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const controller = require(path.join(__dirname, file))
      controller(app)
    })
}
