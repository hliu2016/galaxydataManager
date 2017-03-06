import multer from 'multer'
let option = {
    dest: '',
    limit: {}
}
let upload = multer(option).array('genefile', 10)

export default upload