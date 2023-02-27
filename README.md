TypeScript ExtJS View with Controller Issue Demo
=================================================

当我们定义一个view并且使用controller的时候，发现ExtJs有一个bug:

1. 如果我们直接基于Ext.panel.Panel创建一个实例，则其上的listener中定义的event的handler，会在当前对象而非 'controller'
   中寻找method，行为不对
2. 如果先define一个自己的类，再创建，则handler会在controller中找。行为正确

这个行为与是否使用`new`还是`Ext.create`无关，关键是要必须要定义一个自己的类

```
npm install
npm start
```

It will open page on browser automatically.
