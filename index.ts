import {Readable} from "stream";

export function streamifyArray(array: unknown[]) {
   const readable = new Readable({objectMode: true});
   readable._read = function (size: number) {
      for (let i = 0; i < size; i++) {
         readable.push(array.shift() ?? null);
      }
   };
   return readable;
}
