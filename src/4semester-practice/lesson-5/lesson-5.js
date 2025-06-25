//!- Використання бібліотеки Lodash - var.2
// import { lodash } from 'lodash' //! Так не працює з ESM ("type": "module")

//!+ Використання бібліотеки Lodash - var.3
// import lodash from "lodash"; //? ESM ("type": "module")
// const sum3 = lodash.add(10, 5);
// console.log("sum3:", sum3); //! 15

//!+ Використання бібліотеки Lodash - var.4
// import { add, chunk } from "lodash-es"; //? ESM ("type": "module")
// const sum4 = add(10, 5);
// console.log("sum4:", sum4); //! 15
// console.log(chunk(["a", "b", "c", "d"], 2)); //! [['a', 'b'], ['c', 'd']]

// const lodash = require("lodash");

// const sum = lodash.add(10, 5);
// console.log(sum);


//! Використання бібліотеки nanoid
// import { nanoid } from 'nanoid' //? ESM ("type": "module",)

// console.log("nanoid():", nanoid()); //! yGwbWn-gZ5cfVSeyN_3ms
// console.log("nanoid(5):", nanoid(5)); //! S_8sZ
// console.log("nanoid(10):", nanoid(10)); //! qYpWPzVsVh

// const id = nanoid();
// console.log("id:", id); //! LwSYuYYuT74FtNmT5pfl8

import { alert, defaultModules } from "@pnotify/core/dist/PNotify.js";

// import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";

// defaultModules.set(PNotifyMobile, {});

alert({
  text: "Моя перша нотифікація!",
});