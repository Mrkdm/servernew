import multer from 'multer'



    
function uploadFile(){
    const storage = multer.memoryStorage({
        destination: './public/files',
        filename: function(req, file, cb){
            var extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
            cb(null, Date.now() + extension);
        }
    })
    
    const upload = multer({storage: storage}).array('files', 20);
    
    return upload;
}

export default uploadFile
