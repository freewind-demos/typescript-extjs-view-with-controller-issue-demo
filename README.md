TypeScript ExtJS Custom Controller ViewModel Demo
=================================================

View中的listeners中的events对应的handler，需要注意：
1. 如果是View中自己的listeners，会找View上定义的method
2. 如果是View中嵌入的View的listeners，会找View中controller中定义的method，再找View上定义的method

```
npm install
npm start
```

It will open page on browser automatically.
