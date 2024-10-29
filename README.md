# 神奇网站 - AI工具与课程平台

## 项目简介
神奇网站是一个专注于提供AI相关工具和课程的现代化平台。采用Next.js 14框架开发，结合MongoDB数据库，提供流畅的用户体验和安全的身份验证系统。

## 技术栈
- Next.js 14.2.5
- MongoDB 6.0
- NextAuth.js
- Tailwind CSS
- Heroicons

## 功能特性
1. 用户认证系统
   - 用户注册
   - 用户登录
   - 密码加密存储
   - 会话管理

2. 首页展示
   - 现代化UI设计
   - 响应式布局
   - 用户状态展示
   - 导航系统

## 数据库设计
### 用户表(Users)
- _id: ObjectId
- email: String (唯一)
- password: String (加密存储)
- name: String
- createdAt: Date
- updatedAt: Date

### 课程表(Courses)
- _id: ObjectId
- user: String (关联用户邮箱)
- title: String
- content: String
- category: String
- tags: [String]
- createdAt: Date
- updatedAt: Date

## 开发日志

### 2024-10-29
1. 项目初始化
   - 创建Next.js项目
   - 配置Tailwind CSS
   - 设置MongoDB连接
   - 实现用户认证系统

2. 首页开发
   - 实现响应式导航栏
   - 设计首页布局
   - 添加登录/注册入口

### 2024-10-29
1. 用户认证页面
   - 完成登录页面
   - 完成注册页面
   - 实现表单验证
   - 添加错误提示

2. 课程相关页面
   - 实现课程中心页面
   - 开发我的课程页面
   - 添加课程卡片组件
   - 实现课程CRUD操作

3. 个人中心
   - 开发个人资料页面
   - 实现设置页面
   - 添加通知和隐私设置

4. AI工具页面
   - 设计工具展示页面
   - 添加工具卡片组件
   - 实现状态标签

5. UI优化
   - 统一页面风格
   - 添加渐变背景
   - 优化卡片样式
   - 改进按钮和表单样式
   - 添加过渡动画效果


## 使用说明
1. 安装依赖：`npm install`
2. 运行开发服务器：`npm run dev`
3. 构建生产版本：`npm run build`
4. 启动生产服务器：`npm start`

## 待办事项
1. [ ] 实现课程详情页面
2. [ ] 添加课程评论功能
3. [ ] 完善AI工具功能
4. [ ] 添加用户头像上传
5. [ ] 实现消息通知系统