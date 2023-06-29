// uploadImages.js

// import multer from "multer";
// import path from "path";

// const uploadStopsMiddleware = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "./public/uploads/stops"); // Define o diretório de destino para salvar as imagens
//     },
//     filename: (req, file, cb) => {
//       cb(
//         null,
//         Date.now().toString() +
//           "-" +
//           Math.round(Math.random() * 1e9) +
//           path.extname(file.originalname)
//       ); // Define o nome do arquivo
//     },
//     fileFilter: (req, file, cb) => {
//       const extensaoImg = ["image/jpeg", "image/jpg", "image/png"].find(
//         (formatoAceito) => formatoAceito === file.mimetype
//       );
//       if (extensaoImg) {
//         return cb(null, true);
//       } else {
//         return cb(null, false);
//       }
//     },
//   }),
// });

// export { uploadStopsMiddleware as uploadStops };

import multer from "multer";
import path from "path";

const uploadStopsMiddleware = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './public/uploads/stops')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname)  
        }
    }),
    fileFilter: (req, file, cb) => {
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype);

        if(extensaoImg){
            return cb(null, true);
        }

        return cb(null, false);
    }
}));

export { uploadStopsMiddleware as uploadStops };

// Este arquivo é responsável por configurar o multer para receber as imagens enviadas pelo formulário de cadastro de paradas.