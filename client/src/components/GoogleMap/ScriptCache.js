let counter = 0;
let scriptMap = new Map();

export const ScriptCache = (function(global) {
  return function ScriptCache (scripts) {
    const Cache = {}

    Cache._onLoad = function (key) {
      return (cb) => {
        let stored = scriptMap.get(key);
        if (stored) {
          stored.promise.then(() => {
            stored.error ? cb(stored.error) : cb(null, stored)
          })
        } else {
          // TODO:
        }
      }
    }