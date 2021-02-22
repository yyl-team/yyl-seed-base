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
- [SeedOptimize](modules.md#seedoptimize)

## Type aliases

### MsgType

Ƭ **MsgType**: *error* \| *warn* \| *info* \| *create* \| *update* \| *success* \| *del*

Defined in: [types.ts:3](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L3)

___

### SeedOptimize

Ƭ **SeedOptimize**: (`option`: [*SeedOptimizeOption*](interfaces/seedoptimizeoption.md)) => *Promise*<[*SeedOptimizeResult*](interfaces/seedoptimizeresult.md) \| *undefined*\>

构建函数

Defined in: [types.ts:47](https://github.com/jackness1208/yyl-seed-base/blob/a413c63/src/types.ts#L47)
