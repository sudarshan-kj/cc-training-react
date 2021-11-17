function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.head.append(script);
}


loadScript("./testAdd.js")
const result = add(3,4);

console.log(result);