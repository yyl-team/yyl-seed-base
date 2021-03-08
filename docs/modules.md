[yyl-seed-base](README.md) / Exports

# yyl-seed-base

## Table of contents

### Interfaces

- [SeedEntry](interfaces/seedentry.md)
- [SeedEventName](interfaces/seedeventname.md)
- [SeedOptimizeOption](interfaces/seedoptimizeoption.md)
- [SeedOptimizeResult](interfaces/seedoptimizeresult.md)

### Type aliases

- [MsgType](modules.md#msgtype)
- [ProgressType](modules.md#progresstype)
- [SeedOptimize](modules.md#seedoptimize)

## Type aliases

### MsgType

Ƭ **MsgType**: *error* \| *warn* \| *info* \| *add* \| *update* \| *success* \| *del* \| *cmd*

Defined in: [types.ts:3](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L3)

___

### ProgressType

Ƭ **ProgressType**: *start* \| *finished* \| *number*

Defined in: [types.ts:4](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L4)

___

### SeedOptimize

Ƭ **SeedOptimize**: (`option`: [*SeedOptimizeOption*](interfaces/seedoptimizeoption.md)) => *Promise*<[*SeedOptimizeResult*](interfaces/seedoptimizeresult.md) \| *undefined*\>

构建函数

Defined in: [types.ts:61](https://github.com/jackness1208/yyl-seed-base/blob/c2ccaa7/src/types.ts#L61)
