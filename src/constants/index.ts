/**
 * 本地后端地址（开发环境）
 */
export const BACKEND_HOST_LOCAL = '';

/**
 * 线上后端地址（生产环境 - 使用相对路径）
 */
export const BACKEND_HOST_PROD = '';

/**
 * 验证码地址
 */
export const BACKEND_HOST_CODE = '/api';

/**
 * WebSocket 地址（动态获取）
 */
export const BACKEND_HOST_WS = 
  (typeof window !== 'undefined' 
    ? ((window.location.protocol === 'https:' ? 'wss://' : 'ws://') + window.location.host + '/ws/?token=')
    : 'ws://localhost:8090?token=');


export const SYSTEM_LOGO =
  'https://oss.cqbo.com/moyu/moyu.png';

/**
 * 谁是卧底房间状态常量
 */
export const UNDERCOVER_ROOM_STATUS = {
  WAITING: 'WAITING',  // 等待中
  PLAYING: 'PLAYING',  // 游戏中
  ENDED: 'ENDED'       // 已结束
};

/**
 * 谁是卧底小红点通知状态
 */
export const UNDERCOVER_NOTIFICATION = {
  NONE: 'NONE',        // 无通知
  NEW_ROOM: 'NEW_ROOM' // 新房间通知
};
