perlin-simplex
==============

Simplex Perlin noise

This is RdStudio's TS Port of Sean McCullough's JS Port of Sefan Gustavson's Java implementation

## Installation ##

    npm install ts-perlin-simplex

## Usage ##

```js
import * as Noise from 'ts-perlin-simplex';
var simplex = new Noise.SimplexNoise()
simplex.noise(x, y)
simplex.noise3d(x, y,z)
```

## Example ##

    node example/index.js

![](http://i.imgur.com/glsoFnH.png)
