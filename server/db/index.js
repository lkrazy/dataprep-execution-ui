import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({
  recipes: [],
  jobs: []
}).write()

// db.get('recipes')
//   .push(
//       {
//         key: '1',
//         recipe: '1223445',
//         startTime: new Date().toDateString(),
//         endTime: new Date().toDateString(),
//         progress: 'active',
//       },
//       {
//         key: '2',
//         recipe: '1223445',
//         startTime: new Date().toDateString(),
//         endTime: new Date().toDateString(),
//         progress: 'exception',
//       },
//       {
//         key: '3',
//         recipe: '1223445',
//         startTime: new Date().toDateString(),
//         endTime: new Date().toDateString(),
//         progress: 'success',
//       }
//   )
//   .write()


export default db
