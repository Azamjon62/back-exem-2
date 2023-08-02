import { readFileCustom } from "../helpers/read-helper.js"
import { writeFileCustom } from "../helpers/write-helper.js"

export default {
    ADMIN_PAGE: (_, res) => {
        const allUsers = readFileCustom('users.json')
            .filter(e => e.role == 'admin')

        const allTeachers = readFileCustom('users.json')
            .filter((e) => e.role === 'teacher');

        const allCourses = readFileCustom('course.json')
            .filter(e => !e.status);

        const allStudents = readFileCustom('users.json')
            .filter((e) => e.role === 'student');

        const allGroups = readFileCustom('group.json')
            .filter(e => !e.status);        
            
            
    
        res.render('admin.ejs', { 
            user: allUsers,
            teacherData: allTeachers,
            courseData: allCourses, 
            studentData: allStudents,
            groupData: allGroups 
        });
        
    },
    ADD_TEACHER: (req, res) => {
        const { username, password, course, groups } = req.body;
        const allTeachers = readFileCustom('users.json')
    
        allTeachers.push({
            id: allTeachers.at(-1)?.id + 1 || 1,
            username,
            password,
            course,
            groups,
            role: "teacher"
        });
    
        writeFileCustom("users.json", allTeachers);

        res.redirect('/admin')
    },
    ADD_STUDENT: (req, res) => {
        const { username, password, phonenumber, groups } = req.body;
        const allStudents = readFileCustom('users.json')

        allStudents.push({
            id: allStudents.at(-1)?.id + 1 || 1,
            username,
            password,
            phonenumber,
            groups,
            role: "student"
        })

        writeFileCustom("users.json", allStudents);

        res.redirect('/admin')
    },
    ADD_GROUP: (req, res) => {
        const { groupname, course, teacher } = req.body;
        const allGroups = readFileCustom('group.json')

        allGroups.push({
            id: allGroups.at(-1)?.id + 1 || 1,
            groupname,
            course,
            teacher
        })

        writeFileCustom("group.json", allGroups);

        res.redirect('/admin')
    },
    ADD_COURSE: (req, res) => {
        const { name, description, price } = req.body;
        const allCourses = readFileCustom('course.json')

        allCourses.push({
            id: allCourses.at(-1)?.id + 1 || 1,
            name,
            description,
            price
        })

        writeFileCustom("course.json", allCourses);

        res.redirect('/admin')
    }
}
