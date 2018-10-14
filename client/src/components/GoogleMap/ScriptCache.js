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

    Cache._scriptTag = (key, src) => {
        if (!scriptMap.has(key)) {
          let tag = document.createElement('script');
          let promise = new Promise((resolve, reject) => {
            let resolved = false,
                errored = false,
                body = document.getElementsByTagName('body')[0];
  
            tag.type = 'text/javascript';
            tag.async = false; // Load in order
  
            const cbName = `loaderCB${counter++}${Date.now()}`;
            let cb;
  
            let handleResult = (state) => {
              return (evt) => {
                let stored = scriptMap.get(key);
                if (state === 'loaded') {
                  stored.resolved = true;
                  resolve(src);
                  // stored.handlers.forEach(h => h.call(null, stored))
                  // stored.handlers = []
                } else if (state === 'error') {
                  stored.errored = true;
                  // stored.handlers.forEach(h => h.call(null, stored))
                  // stored.handlers = [];
                  reject(evt)
                }
  
                cleanup();
              }
            }