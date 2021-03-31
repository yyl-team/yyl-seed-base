[yyl-seed-base](README.md) / Exports

# yyl-seed-base

## Table of contents

### Interfaces

- [SeedEntry](interfaces/seedentry.md)
- [SeedEventName](interfaces/seedeventname.md)
- [SeedOptimizeOption](interfaces/seedoptimizeoption.md)
- [SeedOptimizeResult](interfaces/seedoptimizeresult.md)

### Type aliases

- [Logger](modules.md#logger)
- [MsgType](modules.md#msgtype)
- [ProgressType](modules.md#progresstype)
- [SeedOptimize](modules.md#seedoptimize)

## Type aliases

### Logger

Ƭ **Logger**<T\>: (`type`: T, `args01`: [*SeedEventName*](interfaces/seedeventname.md)[T][*Args01*], `args02?`: [*SeedEventName*](interfaces/seedeventname.md)[T][*Args02*], `args03?`: [*SeedEventName*](interfaces/seedeventname.md)[T][*Args03*]) => *void*

日志logger

#### Type parameters:

Name | Type | Default |
------ | ------ | ------ |
`T` | keyof [*SeedEventName*](interfaces/seedeventname.md) | keyof [*SeedEventName*](interfaces/seedeventname.md) |

Defined in: [types.ts:21](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L21)

___

### MsgType

Ƭ **MsgType**: *error* \| *warn* \| *info* \| *add* \| *update* \| *success* \| *del* \| *cmd*

Defined in: [types.ts:4](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L4)

___

### ProgressType

Ƭ **ProgressType**: *start* \| *finished* \| *number*

Defined in: [types.ts:5](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L5)

___

### SeedOptimize

Ƭ **SeedOptimize**: (`option`: [*SeedOptimizeOption*](interfaces/seedoptimizeoption.md)) => *Promise*<[*SeedOptimizeResult*](interfaces/seedoptimizeresult.md) \| *undefined*\>

构建函数

Defined in: [types.ts:69](https://github.com/jackness1208/yyl-seed-base/blob/b865035/src/types.ts#L69)
