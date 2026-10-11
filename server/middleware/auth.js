import jwt from 'jsonwebtoken';
import User from '../models/User.js';
export async function auth(req,res,next){try{const header=req.headers.authorization||'';if(!header.startsWith('Bearer '))return res.status(401).json({message:'Authentication required'});const decoded=jwt.verify(header.slice(7),process.env.JWT_SECRET);const user=await User.findById(decoded.id);if(!user)return res.status(401).json({message:'User not found'});req.user=user;next();}catch{return res.status(401).json({message:'Invalid or expired token'});}}
