import multer from 'multer'
let option = {
    dest: '',
    limit: {}
}
let upload = multer(option).any()

export default upload