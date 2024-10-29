import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://root:dcrlhdfb@shenqi-mongo-mongodb.ns-pw6dku8n.svc:27017'

if (!MONGODB_URI) {
  throw new Error('请定义 MONGODB_URI 环境变量')
}

async function dbConnect() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return mongoose.connection
    }

    const conn = await mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })

    console.log('MongoDB 连接成功')
    return conn
  } catch (error) {
    console.error('MongoDB 连接错误:', error)
    throw error
  }
}

export default dbConnect 