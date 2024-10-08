const { Router } = require('express');
const router = Router();
const authorization = require("../middlewares/authorization");
const { getBanners, addBanner, updateBanner, deleteBanner, getBannerById } = require('../controllers/bannerController');
const { upload } = require('../middlewares/multer');

router.get('/', getBanners);
router.get('/:id', getBannerById);
router.post('/', upload.single('image'), addBanner);
router.patch('/', upload.single('image'), updateBanner);
router.delete('/:id', deleteBanner);  

module.exports = router;
