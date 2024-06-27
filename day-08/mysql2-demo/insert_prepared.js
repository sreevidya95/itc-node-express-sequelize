const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Saibaba123456@',
  database: 'northwind'
})

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack)
    return
  }
  console.log('Connected to the database')

  const sql = 'INSERT INTO territories VALUES (?, ?,?)'
  const values = [515001, 'Tollywood',1]
  connection.execute(sql, values, (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack)
      return
    }
    console.log('Insert results:', results)
  })

  connection.end()
})