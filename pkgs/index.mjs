import axios from "axios";

import { map, from, of, forkJoin, catchError } from "rxjs";

// forkJoin({
//   sourceOne: of('Hello'),
//   sourceTwo: of('World').pipe(delay(1000)),
//   sourceThree: throwError('This will error')
// }).pipe(
//   catchError(error => of(error))
// )

const x = [
  { key: "first", url: "http://localhost:9000/first/" },
  { key: "second", url: "http://localhost:9000/second/" },
  // { key: "error", url: "http://localhost:7000/second/" },
];

const y = forkJoin(
  x.reduce((acc, cur) => {
    acc[cur.key] = axios.get(cur.url);
    return acc;
  }, {})
);

const z = from(Object.entries(y)).pipe(
  map((response) => {
    console.log("map");
    return response;
  }),
  catchError((_error) => of("error"))
);

z.subscribe((v) => {
  console.log("---------------");
  console.log(v);
});
