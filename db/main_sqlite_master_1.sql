INSERT INTO sqlite_master (type, name, tbl_name, rootpage, sql) VALUES ('table', 'parent', 'parent', 3, 'CREATE TABLE parent(
parent_id INTEGER PRIMARY KEY,
parent_name TEXT,
parent_surname TEXT
)');
INSERT INTO sqlite_master (type, name, tbl_name, rootpage, sql) VALUES ('table', 'subject', 'subject', 4, 'CREATE TABLE subject(
   subject_name TEXT,
   subject_level TEXT,
   subject_section TEXT,
   subject_id INTEGER PRIMARY KEY
)');
INSERT INTO sqlite_master (type, name, tbl_name, rootpage, sql) VALUES ('table', 'students', 'students', 5, 'CREATE TABLE students (
  students_id INTEGER PRIMARY KEY,
  students_name TEXT,
  students_surname TEXT,
  grade_id INTEGER,
  school_id INTEGER,
  FOREIGN KEY (grade_id) REFERENCES grade(grade_id) ON DELETE CASCADE,
  FOREIGN KEY (school_id) REFERENCES school(school_id) ON DELETE CASCADE
)');
INSERT INTO sqlite_master (type, name, tbl_name, rootpage, sql) VALUES ('table', 'teacher', 'teacher', 6, 'CREATE TABLE teacher(
teacher_id INTEGER PRIMARY KEY,
teacher_name TEXT,
teacher_surname TEXT,
subject_id INTEGER,
grade_id INTEGER,
school_id INTEGER,
FOREIGN KEY (subject_id) REFERENCES subject(subject_id) ON DELETE CASCADE,
FOREIGN KEY(school_id) REFERENCES school(school_id) ON DELETE CASCADE,
FOREIGN KEY (grade_id) REFERENCES grade(grade_id) ON DELETE CASCADE
)');
INSERT INTO sqlite_master (type, name, tbl_name, rootpage, sql) VALUES ('table', 'timetable', 'timetable', 7, 'CREATE TABLE timetable (
  timetable_id INTEGER PRIMARY KEY,
  day_week TEXT,
  time TEXT,
  subject_id INTEGER,
  teacher_id INTEGER,
  FOREIGN KEY (subject_id) REFERENCES subject(subject_id) ON DELETE CASCADE,
  FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id) ON DELETE CASCADE
)');
INSERT INTO sqlite_master (type, name, tbl_name, rootpage, sql) VALUES ('table', 'grade', 'grade', 8, 'CREATE TABLE grade(
   grade_id INTEGER PRIMARY KEY,
   parallel INTEGER,
   grades_name INTEGER,
   school_id INTEGER,
   teacher_id INTEGER,
   FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id) ON DELETE CASCADE,
   FOREIGN KEY (school_id) REFERENCES school(school_id) ON DELETE CASCADE
)');
INSERT INTO sqlite_master (type, name, tbl_name, rootpage, sql) VALUES ('table', 'mark', 'mark', 9, 'CREATE TABLE mark(
   SAU INTEGER,
   SAT INTEGER,
   FG INTEGER,
   feedback TEXT,
   final_mark INTEGER,
   mark_id INTEGER PRIMARY KEY,
   students_id INTEGER,
   parent_id INTEGER,
   subject_id INTEGER,
   FOREIGN KEY (students_id) REFERENCES students(students_id) ON DELETE CASCADE,
   FOREIGN KEY (subject_id) REFERENCES subject(subject_id) ON DELETE CASCADE,
   FOREIGN KEY (parent_id) REFERENCES parent(parent_id) ON DELETE CASCADE

   )');
INSERT INTO sqlite_master (type, name, tbl_name, rootpage, sql) VALUES ('table', 'school', 'school', 2, 'CREATE TABLE school(
school_id INTEGER PRIMARY KEY,
school_name TEXT
)');