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

Defined in: types.ts:20

___

### ignoreServer

• `Optional` **ignoreServer**: *undefined* \| *boolean*

通知父应用不运行本地 server

Defined in: types.ts:12

___

### response

• **response**: *default*

消息处理对象

Defined in: types.ts:8

___

### root

• **root**: *string*

项目根目录

Defined in: types.ts:10

## Methods

### all

▸ **all**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: types.ts:16

___

### getConfigSync

▸ **getConfigSync**(): YylConfig

获取 yylConfig 的运行配置

**Returns:** YylConfig

Defined in: types.ts:6

___

### on

▸ **on**<A\>(`eventName`: *string*, `fn`: *ResponseFn*<*any*[]\>): [*SeedOptimizeResult*](seedoptimizeresult.md)

消息监听

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`A` | *any*[] | *any*[] |

#### Parameters:

Name | Type |
------ | ------ |
`eventName` | *string* |
`fn` | *ResponseFn*<*any*[]\> |

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: types.ts:14

___

### watch

▸ **watch**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

监听并构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: types.ts:18
