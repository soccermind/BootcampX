SELECT cohorts.name as cohort, COUNT(*) as total_submissions
FROM  cohorts
JOIN students 
ON cohorts.id = students.cohort_id
JOIN assignment_submissions
ON student_id = students.id
GROUP BY cohort
ORDER BY total_submissions DESC;