import mongoose from 'mongoose';
import Template from '../models/Template.js';
import User from '../models/User.js';
export async function listFavorites(req,res,next){try{const user=await User.findById(req.user.id).populate('favorites');res.json(user.favorites);}catch(e){next(e);}}
export async function addFavorite(req,res,next){try{const id=req.params.templateId;if(!mongoose.isValidObjectId(id))return res.status(400).json({message:'Invalid template ID'});if(!await Template.exists({_id:id}))return res.status(404).json({message:'Template not found'});await User.updateOne({_id:req.user.id},{$addToSet:{favorites:id}});res.status(200).json({message:'Added to favorites'});}catch(e){next(e);}}
export async function removeFavorite(req,res,next){try{const id=req.params.templateId;if(!mongoose.isValidObjectId(id))return res.status(400).json({message:'Invalid template ID'});await User.updateOne({_id:req.user.id},{$pull:{favorites:id}});res.json({message:'Removed from favorites'});}catch(e){next(e);}}
