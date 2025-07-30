import"./modulepreload-polyfill-3cfb730f.js";const n=new Date("2030"),a=new Date("2030-03"),o=new Date("2030-03-16"),D=new Date("03/16/2030"),s=new Date("2030/03/16"),c=new Date("2030/3/16"),u=new Date("March 16, 2030"),r=new Date("16 March 2030"),w=new Date("March 16, 2030 14:25:00"),l=new Date("2030-03-16 14:25:00"),e=new Date("2030-03-16T14:25:00"),f=new Date("Sat Mar 16 2030 14:25:00 GMT+0200");console.log(`
`,n,`
`,a,`
`,o,`
`,D,`
`,s,`
`,c,`
`,u,`
`,r,`
`,w,`
`,l,`
`,e,`
`,`
`,f);console.log(typeof e);const t=Date.parse("2030-03-16T14:25:00.000+02:00");console.log("timestampDateParse",t);console.log("timestampDateParse typeof",typeof t);//! 1 січня 1970 UTC+0 Unix час
//!  1 січня 1970 року - це дата,
//!  яка має особливе значення в
//!  інформаційних технологіях,
//!  оскільки це час початку епохи
//!  Unix (Unix epoch). В системах,
//!  що використовують Unix-час,
//!  цей момент вважається початком відліку часу,
//!  вимірюваного в секундах. Крім того,
//!  на деяких пристроях Apple,
//!  установка дати в 1 січня 1970 року
//!  в налаштуваннях може призвести
//!  до зависання пристрою,
//!  особливо на моделях з 64-бітними процесорами.
const p=new Date(0);console.log("dateUnix: ",p);const g=new Date(1e4);console.log("dateUnix10000: ",g);console.log("date: ",Date.parse(new Date));//! const timestampDateParse = Date.parse("2030-03-16T14:25:00.000+02:00");
console.log("New date:",new Date(18998943e5));
