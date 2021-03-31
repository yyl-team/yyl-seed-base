[yyl-seed-base](../README.md) / [Exports](../modules.md) / SeedOptimizeResult

# Interface: SeedOptimizeResult

构建函数 - 返回

## Hierarchy

* **SeedOptimizeResult**

## Table of contents

### Properties

- [appDidMount](seedoptimizeresult.md#appdidmount)
- [appWillMount](seedoptimizeresult.md#appwillmount)
- [handles](seedoptimizeresult.md#handles)
- [ignoreServer](seedoptimizeresult.md#ignoreserver)
- [response](seedoptimizeresult.md#response)
- [root](seedoptimizeresult.md#root)

### Methods

- [all](seedoptimizeresult.md#all)
- [getConfigSync](seedoptimizeresult.md#getconfigsync)
- [on](seedoptimizeresult.md#on)
- [watch](seedoptimizeresult.md#watch)

## Properties

### appDidMount

• `Optional` **appDidMount**: *undefined* \| (`app`: *Express*) => *Promise*<*any*\>

express 使用中间件后回调 hooks

Defined in: [types.ts:41](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L41)

___

### appWillMount

• `Optional` **appWillMount**: *undefined* \| (`app`: *Express*) => *Promise*<*any*\>

express 使用中间件前回调 hooks

Defined in: [types.ts:39](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L39)

___

### handles

• **handles**: *string*[]

可操作句柄

Defined in: [types.ts:54](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L54)

___

### ignoreServer

• `Optional` **ignoreServer**: *undefined* \| *boolean*

通知父应用不运行本地 server

Defined in: [types.ts:37](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L37)

___

### response

• **response**: *default*

消息处理对象

Defined in: [types.ts:33](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L33)

___

### root

• **root**: *string*

项目根目录

Defined in: [types.ts:35](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L35)

## Methods

### all

▸ **all**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:50](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L50)

___

### getConfigSync

▸ **getConfigSync**(): YylConfig

获取 yylConfig 的运行配置

**Returns:** YylConfig

Defined in: [types.ts:31](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L31)

___

### on

▸ **on**<T\>(`eventName`: T, `fn`: *ResponseFn*<[[*SeedEventName*](seedeventname.md)[T][*Args01*], [*SeedEventName*](seedeventname.md)[T][*Args02*], [*SeedEventName*](seedeventname.md)[T][*Args03*]]\>): [*SeedOptimizeResult*](seedoptimizeresult.md)

消息监听

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | *msg* \| *progress* | *msg* \| *progress* |

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | T |
`fn` | *ResponseFn*<[[*SeedEventName*](seedeventname.md)[T][*Args01*], [*SeedEventName*](seedeventname.md)[T][*Args02*], [*SeedEventName*](seedeventname.md)[T][*Args03*]]\> |

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:43](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L43)

___

### watch

▸ **watch**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

监听并构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:52](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L52)
