import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '请输入用户名'],
    minLength: [2, '用户名至少2个字符'],
    maxLength: [20, '用户名最多20个字符']
  },
  email: {
    type: String,
    required: [true, '请输入邮箱'],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, '请输入有效的邮箱地址']
  },
  password: {
    type: String,
    required: [true, '请输入密码'],
    minLength: [6, '密码至少6个字符']
  }
}, {
  timestamps: true
})

export default mongoose.models.User || mongoose.model('User', UserSchema) 