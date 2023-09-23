import { Schema, model } from 'mongoose'

const documentSchema = new Schema({
  name: {
    type: String
  },
  reference: { type: String }
})
const schema = new Schema({
  firstName: {
    type: String,
    required: true,
    max: 100
  },
  lastName: {
    type: String,
    required: true,
    max: 100
  },
  email: {
    type: String,
    required: true,
    max: 100,
    unique: true
  },
  password: {
    type: String,
    required: true,
    max: 100
  },
  age: { type: Number },
  role: {
    type: String,
    required: true,
    default: 'user'
  },
  cart: {
    type: Schema.Types.ObjectId,
    unique: true,
    ref: 'carts'
  },
  documents: { type: [documentSchema], default: [] },
  last_connection: { type: String, required: true, default: '' }
})

export const userModel = model('users', schema)
