import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, '请提供用户信息'],
  },
  title: {
    type: String,
    required: [true, '请输入课程标题'],
    trim: true,
    maxlength: [100, '标题不能超过100个字符']
  },
  content: {
    type: String,
    required: [true, '请输入课程内容'],
  },
  category: {
    type: String,
    required: [true, '请选择课程分类'],
    enum: ['AI基础', '机器学习', '深度学习']
  },
  tags: {
    type: [String],
    default: [],
    validate: {
      validator: function(v: string[]) {
        return v.every(tag => ['入门', '进阶', '高级', '实战', '理论'].includes(tag))
      },
      message: '无效的标签'
    }
  }
}, {
  timestamps: true
})

export default mongoose.models.Course || mongoose.model('Course', CourseSchema) 