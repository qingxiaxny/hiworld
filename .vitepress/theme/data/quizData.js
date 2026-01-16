// 测验分类配置
// 题目数据存储在 quiz/*.json 中，方便独立维护

import html from './quiz/html.json'
import css from './quiz/css.json'
import javascript from './quiz/javascript.json'
import typescript from './quiz/typescript.json'
import vue from './quiz/vue.json'
import react from './quiz/react.json'
import nodejs from './quiz/nodejs.json'
import python from './quiz/python.json'
import java from './quiz/java.json'
import go from './quiz/go.json'
import sql from './quiz/sql.json'
import mysql from './quiz/mysql.json'
import mongodb from './quiz/mongodb.json'
import redis from './quiz/redis.json'
import git from './quiz/git.json'
import linux from './quiz/linux.json'
import docker from './quiz/docker.json'
import kubernetes from './quiz/kubernetes.json'
import nginx from './quiz/nginx.json'
import webpack from './quiz/webpack.json'
import network from './quiz/network.json'
import algorithm from './quiz/algorithm.json'
import designPattern from './quiz/design-pattern.json'
import security from './quiz/security.json'

export const quizCategories = [
  { id: 'html', name: 'HTML', questions: html },
  { id: 'css', name: 'CSS', questions: css },
  { id: 'javascript', name: 'JavaScript', questions: javascript },
  { id: 'typescript', name: 'TypeScript', questions: typescript },
  { id: 'vue', name: 'Vue', questions: vue },
  { id: 'react', name: 'React', questions: react },
  { id: 'nodejs', name: 'Node.js', questions: nodejs },
  { id: 'python', name: 'Python', questions: python },
  { id: 'java', name: 'Java', questions: java },
  { id: 'go', name: 'Go', questions: go },
  { id: 'sql', name: 'SQL', questions: sql },
  { id: 'mysql', name: 'MySQL', questions: mysql },
  { id: 'mongodb', name: 'MongoDB', questions: mongodb },
  { id: 'redis', name: 'Redis', questions: redis },
  { id: 'git', name: 'Git', questions: git },
  { id: 'linux', name: 'Linux', questions: linux },
  { id: 'docker', name: 'Docker', questions: docker },
  { id: 'kubernetes', name: 'Kubernetes', questions: kubernetes },
  { id: 'nginx', name: 'Nginx', questions: nginx },
  { id: 'webpack', name: 'Webpack', questions: webpack },
  { id: 'network', name: '计算机网络', questions: network },
  { id: 'algorithm', name: '算法', questions: algorithm },
  { id: 'design-pattern', name: '设计模式', questions: designPattern },
  { id: 'security', name: '安全', questions: security },
]
