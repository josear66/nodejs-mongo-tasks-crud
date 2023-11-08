import {Schema, model} from 'mongoose'

const newTask = new Schema ({
  title : {type : String, unique : true, required : true},
  description : {type : String, required : true},
  done : {type : Boolean, default : false}
},{
  versionKey : false,
  timestamps : true
})

export default model ('tasks', newTask)