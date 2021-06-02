// 本地测试API
// const devBaseURL = "http://localhost:3000";
// const proBaseURL = "http://localhost:3000";
// 已经部署到服务器上的API
// http://123.57.176.198:3000
const devBaseURL = '/api';
const proBaseURL = 'https://vercel-cloudmusic.vercel.app';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 12000;
