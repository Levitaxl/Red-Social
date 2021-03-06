const express = require('express');
const router = express.Router();
const storage = require('./middlewares/multer')
const multer = require('multer')
const upload = multer(storage)


//Auth Controller
const {register}=require('./controllers/auth/RegisterController')
const {login}=require('./controllers/auth/LoginController')
const {logout}=require('./controllers/auth/LogoutController')
const {checkAuthentication}=require('./controllers/auth/AuthenticationController.js')

//Controllers
const userController = require('./controllers/UserController');
const postController = require('./controllers/PostController');
const likeController = require('./controllers/LikeController');
const commentController= require('./controllers/CommentController');
const friedController=require('./controllers/FollowController')
//Middlewares
const { ensureAuthenticated, forwardAuthenticated } = require('./middlewares/auth');

//Auths' Routes
router.post('/register',forwardAuthenticated,register);//Listo
router.post('/login',forwardAuthenticated,login);//Listo
router.post('/logout',logout);//Listo
router.post('/check/auth',checkAuthentication);//Listo

//Middlewares
router.get('/ensureAuthenticated',checkAuthentication)
router.get('/forwardAuthenticated',forwardAuthenticated)

//Rutas del perfil
router.get('/profile',userController.profile);//listo
router.put('/profile/edit',upload.single('image'), userController.update);//listo


//Rutas del post
router.post('/post/create',upload.single('image'), postController.store)//Listo
router.get('/post/show/:id',postController.show)//Listo
router.get('/post/ensurePostOwner/:id',postController.ensurePostOwner)
router.put('/post/edit/:id',upload.single('image'),postController.update)//Listo
router.get('/post/all',ensureAuthenticated,postController.getAllPosts)//Listo
router.delete('/post/destroy/:id',postController.destroy)//Listo

//Ruta de los usuarios

router.get('/user/show/:id',userController.show)
router.get('/user/list/:name',userController.searchProfiles)
router.get('/user/all',userController.getAll)


//Ruta de los likes

router.post('/like/add/:id',likeController.create)
router.get('/like/didYouLeaveTheLike/:id',likeController.didYouLeaveTheLike)
router.delete('/like/destroy/:id',likeController.destroy)
router.get('/like/get/from/post/:id',likeController.getFromPost)


//Rutas de los comentarios
router.post('/comment/add/:id',commentController.create)
router.get('/comment/show/:id',commentController.getAlldCommentsFromAPost)
router.get('/comment/from/user/:id',commentController.getCommentsFromUser)
router.get('/comment/show2/:id',commentController.getCommentWithOwnerPermission)
router.put('/comment/update/:id',commentController.update)
router.delete('/comment/destroy/:id',commentController.destroy)


//Ruta de los seguidores
router.get('/friend/doIFollowYou/:id',friedController.doIFollowYou)
router.post('/friend/create/:id',friedController.create)
router.delete('/friend/destroy/:id',friedController.destroy)
router.get('/friend/get/all/following/:id',friedController.getAllFollowing)
router.get('/friend/get/all/followers/:id',friedController.getAllFollowers)



module.exports = router;