import { YylConfig, Env } from 'yyl-config-types'
import SeedResponse, { ResponseFn } from 'yyl-seed-response'
export type MsgType = 'error' | 'warn' | 'info' | 'add' | 'update' | 'success' | 'del' | 'cmd'
export type ProgressType = 'start' | 'finished' | number

export interface SeedEventName {
  msg: MsgType
  progress: ProgressType
}

/** 构建函数 - 返回 */
export interface SeedOptimizeResult {
  /** 获取 yylConfig 的运行配置 */
  getConfigSync(): YylConfig
  /** 消息处理对象  */
  response: SeedResponse
  /** 项目根目录 */
  root: string
  /** 通知父应用不运行本地 server */
  ignoreServer?: boolean
  /** 消息监听 */
  on<T extends keyof SeedEventName = keyof SeedEventName>(
    eventName: T,
    fn: ResponseFn<[SeedEventName[T], any[]]>
  ): SeedOptimizeResult
  /** 构建 */
  all(): SeedOptimizeResult
  /** 监听并构建 */
  watch(): SeedOptimizeResult
  /** 可操作句柄 */
  handles: string[]
}
/** 构建函数 - 配置 */
export interface SeedOptimizeOption {
  /** yylConfig */
  yylConfig: YylConfig
  /** 项目根目录 */
  root: string
  /** cli 传参 */
  env: Env
  /** 操作符 */
  ctx: string
}

/** 构建函数 */
export type SeedOptimize = (option: SeedOptimizeOption) => Promise<SeedOptimizeResult | undefined>

/** seed 入口 */
export interface SeedEntry {
  /** seed 名称 */
  name: string
  /** 版本 */
  version: string
  /** 所在地址 */
  path: string
  /** 构建处理 */
  optimize: SeedOptimize
  /** seed 包初始化用对象 */
  initPackage: {
    default: string[]
    yy: string[]
  }
}
