import express from 'express';
import {loginUser, signupUser} from '../controller/usercontroller.js';
import { uploadImage, getImage } from '../controller/image-controller.js';
import { newComment, getComments , deleteComment} from '../controller/comment-controller.js';
import {createPost,getAllPosts,getPost, updatePost, deletePost} from '../controller/post-controller.js';
import { createEvent, getAllEvents, searchEvents } from '../controller/event-controller.js';
import upload from '../utils/upload.js';
import { authenticateToken } from '../controller/jwt-controller.js';
//import Posts from '../../client/src/components/home/post/Posts.js';
const router = express.Router();

router.post('/signup',signupUser);
router.post('/login',loginUser);
router.post('/file/upload', upload.single('file'), uploadImage);
//router.get('/file/:filename',getImage);
router.post('/create', authenticateToken, createPost);
router.get('/posts',authenticateToken,getAllPosts);
router.get('/post/:id', authenticateToken,getPost);
router.put('/update/:id', authenticateToken,updatePost);
router.delete('/delete/:id', authenticateToken,deletePost);
router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken,getComments);
router.delete('/comment/delete/:id', authenticateToken,deleteComment);
router.post('/createEvent', authenticateToken, createEvent);
router.get('/events',authenticateToken,getAllEvents);
//router.get('/events/:location',authenticateToken ,searchEvents);
export default router;

