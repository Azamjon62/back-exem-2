import { readFileCustom } from "../helpers/read-helper.js"

export default {
    
    STUDENT_PAGE: (_, res) => {

            const allCourses = readFileCustom('course.json')
                .filter(e => e.name)

            const allGroups = readFileCustom('group.json')
                .filter(e => e.course == allCourses.map(e => e.name))

            const allUsers = readFileCustom('users.json')
                .filter(e => e.groups == allGroups.map(e => e.groupname) || e.role == 'teacher')

            const allStudent = readFileCustom('users.json')
                .filter(e => e.group == allGroups.map(e => e.groupname) || e.role == 'student')

            const allHomeworks = readFileCustom('homework.json')
                .filter(e => e.group == allStudent.map(e => e.group))

            const newUserId = allUsers.at(-1)?.id + 1 || 1;                    

            const newUser = {
                id: newUserId,
                course: allCourses.map(e => e.name),
                groups: allGroups.map(e => e.groupname),
                user: allGroups.map(e => e.teacher),
            };

            allUsers.push(newUser);

            res.render('student.ejs', {
                homeworkData: allHomeworks,
                courseData: allCourses,
                groupData: allGroups,
                userData: allUsers
            })

    }
}
