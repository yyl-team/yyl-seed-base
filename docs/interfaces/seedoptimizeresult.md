[yyl-seed-base](../README.md) / [Exports](../modules.md) / SeedOptimizeResult

# Interface: SeedOptimizeResult

构建函数 - 返回

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

• `Optional` **appDidMount**: (`app`: *Express*) => *Promise*<any\>

express 使用中间件后回调 hooks

#### Type declaration

▸ (`app`: *Express*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | *Express* |

**Returns:** *Promise*<any\>

Defined in: [types.ts:19](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L19)

Defined in: [types.ts:19](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L19)

___

### appWillMount

• `Optional` **appWillMount**: (`app`: *Express*) => *Promise*<any\>

express 使用中间件前回调 hooks

#### Type declaration

▸ (`app`: *Express*): *Promise*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | *Express* |

**Returns:** *Promise*<any\>

Defined in: [types.ts:17](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L17)

Defined in: [types.ts:17](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L17)

___

### handles

• **handles**: *string*[]

可操作句柄

Defined in: [types.ts:30](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L30)

___

### ignoreServer

• `Optional` **ignoreServer**: *boolean*

通知父应用不运行本地 server

Defined in: [types.ts:15](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L15)

___

### response

• **response**: *default*

消息处理对象

Defined in: [types.ts:11](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L11)

___

### root

• **root**: *string*

项目根目录

Defined in: [types.ts:13](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L13)

## Methods

### all

▸ **all**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:26](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L26)

___

### getConfigSync

▸ **getConfigSync**(): YylConfig

获取 yylConfig 的运行配置

**Returns:** YylConfig

Defined in: [types.ts:9](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L9)

___

### on

▸ **on**<T\>(`eventName`: T, `fn`: *ResponseFn*<[LoggerType[T][``"Args01"``], LoggerType[T][``"Args02"``], LoggerType[T][``"Args03"``]]\>): [*SeedOptimizeResult*](seedoptimizeresult.md)

消息监听

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `T` | keyof LoggerType | keyof LoggerType |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | T |
| `fn` | *ResponseFn*<[LoggerType[T][``"Args01"``], LoggerType[T][``"Args02"``], LoggerType[T][``"Args03"``]]\> |

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:21](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L21)

___

### watch

▸ **watch**(): [*SeedOptimizeResult*](seedoptimizeresult.md)

监听并构建

**Returns:** [*SeedOptimizeResult*](seedoptimizeresult.md)

Defined in: [types.ts:28](https://github.com/yyl-team/yyl-seed-base/blob/39c10b4/src/types.ts#L28)
