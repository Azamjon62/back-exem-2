import { randomUUID } from 'crypto'

import multer from 'multer'

export default multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, randomUUID() + `.${file.mimetype.split('/')[1]}`)
    }
})
