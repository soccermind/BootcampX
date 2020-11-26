const { Pool } = require('pg');

const queryString = `
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests
ON teachers.id = teacher_id
JOIN students
ON student_id = students.id
JOIN cohorts
ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`;

const cohortName = process.argv[2] || 'JUL02';
const values = [ `${cohortName}` ];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(queryString, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));
