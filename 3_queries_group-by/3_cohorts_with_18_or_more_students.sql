SELECT cohorts.name, COUNT(*) as student_count
FROM cohorts
JOIN students
ON cohorts.id = cohort_id
GROUP BY cohorts.name
HAVING COUNT(*) >= 18
ORDER BY student_count;