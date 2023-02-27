TypeScript ExtJS Difference Between 'define' and 'new' Demo
=================================================

使用`Ext.define`与`new Ext.xxx`在简单情况下行为相同，但是复杂时会不同：
1. `Ext.define`情况下，行为始终与javascript下的写法一致，推荐
2. `new Ext`下，某个view自己的listener的handler不会按预期去找controller下的方法，而是在自己身上找。只有子组件才会到controller下找。

由于这种行为上的差异将会导致不可预料的bug，所以我们推荐使用`Ext.define`的形式。虽然没有后者好看，但安全第一。

```
npm install
npm start
```

It will open page on browser automatically.
