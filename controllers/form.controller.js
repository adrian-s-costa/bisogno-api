import { db } from '../db/mongo.js';

export async function formPost(req, res){
  
  const formData = req.body;
  
  await db.collection('form_data').insertOne({
    formData
  });

  res.sendStatus(200);
}

export async function formGet(req, res){
  const formDataCollection = await db.collection('form_data').findOne({}, { sort: { _id: -1 } });

  res.json(formDataCollection);
}