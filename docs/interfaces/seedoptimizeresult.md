[yyl-seed-base](../README.md) / [Exports](../modules.md) / SeedOptimizeResult

# Interface: SeedOptimizeResult

构建函数 - 返回

## Hierarchy

* **SeedOptimizeResult**

## Table of contents

### Properties

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

### handles

• **handles**: *string*[]

可操作句柄

Defined in: [types.ts:46](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L46)

___

### ignoreServer

• `Optional` **ignoreServer**: *undefined* \| *boolean*

通知父应用不运行本地 server

Defined in: [types.ts:28](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L28)

___

### response

• **response**: *default*

消息处理对象

Defined in: [types.ts:24](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L24)

___

### root

• **root**: *string*

项目根目录

Defined in: [types.ts:26](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L26)

## Methods

### all

▸ **all**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:42](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L42)

___

### getConfigSync

▸ **getConfigSync**(): YylConfig

获取 yylConfig 的运行配置

**Returns:** YylConfig

Defined in: [types.ts:22](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L22)

___

### on

▸ **on**<T\>(`eventName`: T, `fn`: *ResponseFn*<[[*SeedEventName*](seedeventname.md)[T], [*SeedEventName*](seedeventname.md)[T][*Args01*], [*SeedEventName*](seedeventname.md)[T][*Args02*], [*SeedEventName*](seedeventname.md)[T][*Args03*]]\>): [*SeedOptimizeResult*](seedoptimizeresult.md)

消息监听

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | *msg* \| *progress* | *msg* \| *progress* |

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | T |
`fn` | *ResponseFn*<[[*SeedEventName*](seedeventname.md)[T], [*SeedEventName*](seedeventname.md)[T][*Args01*], [*SeedEventName*](seedeventname.md)[T][*Args02*], [*SeedEventName*](seedeventname.md)[T][*Args03*]]\> |

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:30](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L30)

___

### watch

▸ **watch**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

监听并构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:44](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L44)
