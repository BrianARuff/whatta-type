# whatta-type
---

## **How to import package**
```
const type = require("whatta-type");

import { whattaType as type } from "whatta-type"
```

---

### **How to use package**
Here are some examples cases of how to use the package
```
console.log(type.isArray(["1", "2", "3"])); // true

console.log(type.isArray("I am a string")); // false
```
---

#### **TODO**
1. Add testing with Jest framework.
---

#### **Notes:**
This package is the equivalent of the text information gathered [here](https://webbjocke.com/javascript-check-data-types/). I did not create the code in this package rather I found that this was the most accurate source for verifying types at runtime that I could find and put it in package format so that other's could use it in their programs if they wanted w/o having to look-it-up everytime. The code is still open source with an ISC license for everyone!

---