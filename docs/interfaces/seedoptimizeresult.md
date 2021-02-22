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

Defined in: [types.ts:32](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L32)

___

### ignoreServer

• `Optional` **ignoreServer**: *undefined* \| *boolean*

通知父应用不运行本地 server

Defined in: [types.ts:21](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L21)

___

### response

• **response**: *default*

消息处理对象

Defined in: [types.ts:17](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L17)

___

### root

• **root**: *string*

项目根目录

Defined in: [types.ts:19](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L19)

## Methods

### all

▸ **all**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:28](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L28)

___

### getConfigSync

▸ **getConfigSync**(): YylConfig

获取 yylConfig 的运行配置

**Returns:** YylConfig

Defined in: [types.ts:15](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L15)

___

### on

▸ **on**<T\>(`eventName`: T, `fn`: *ResponseFn*<[*SeedEventName*](seedeventname.md)[T]\>): [*SeedOptimizeResult*](seedoptimizeresult.md)

消息监听

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | *start* \| *msg* \| *loading* \| *finished* | *start* \| *msg* \| *loading* \| *finished* |

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | T |
`fn` | *ResponseFn*<[*SeedEventName*](seedeventname.md)[T]\> |

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:23](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L23)

___

### watch

▸ **watch**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

监听并构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:30](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L30)
