## s11-ts-webpack
这一节介绍怎么结合webpack和typescript，为什么要用typescript...真的很简单，这一节其实就是介绍了使用ts-loader。我顺路在这一节简单地引入了webpack-merge，权当练练手。


## s15-node-express

```typescript
// app.ts
const express = require('express');

const app = express();

app.listen(3000);

```
上面的这段代码，express是通过 require引入的， 竟然会导致app的类型为any,导致智能提示失效 这是为什么呢?

下面这一段代码 app的类型会被推断为Express，能获得正确的智能提示
```typescript
// app.ts
import express from 'express';

const app = express();

app.listen(3000);

```

这一节学到了什么？
结合node和typscript，最好使用ESM而不是CJS，如果第三方库没有d.ts则需要手动安装npm i @types/node -D 第三方库也是一样比如express 则需要 npm i @types/express -D
以及 rootDir outDir设置
`rootDir`指定源代码所在目录
`outDir`指定输出代码目录

以及部分express 类型定义
Response、Request、NextFunction、RequestHandler


