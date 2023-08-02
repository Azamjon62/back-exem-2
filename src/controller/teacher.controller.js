import { readFileCustom } from "../helpers/read-helper.js"
import { writeFileCustom } from "../helpers/write-helper.js"

export default {
    TEACHER_PAGE: (_, res) => {
        const allGroups = readFileCustom('group.json')
            .filter(e => !e.status);

        const allCourses = readFileCustom('course.json')
            .filter(e => !e.status);

        res.render('teacher.ejs', {
            groupData: allGroups,
            courseData: allCourses,
        })
    },
    ADD_HOMEWORK: (req, res) => {
        const { group, text } = req.body;

        const allHomeworks = readFileCustom('homework.json');

        allHomeworks.push({
            id: allHomeworks.at(-1)?.id + 1 || 1,
            group,
            text
        })

        writeFileCustom('homework.json', allHomeworks)

        res.redirect('/teacher')
    }
}