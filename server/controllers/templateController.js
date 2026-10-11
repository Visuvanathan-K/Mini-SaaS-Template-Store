import mongoose from 'mongoose';
import Template from '../models/Template.js';
export async function listTemplates(req,res,next){try{res.json(await Template.find().sort({name:1}));}catch(e){next(e);}}
export async function getTemplate(req,res,next){try{if(!mongoose.isValidObjectId(req.params.id))return res.status(400).json({message:'Invalid template ID'});const item=await Template.findById(req.params.id);if(!item)return res.status(404).json({message:'Template not found'});res.json(item);}catch(e){next(e);}}
