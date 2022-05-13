


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