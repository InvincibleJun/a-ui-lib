import Button from "./components/button/index";
import Progress from "./components/progress/index";

let _Vue;

export default function install(Vue) {
  if (_Vue) return;

  _Vue = Vue;

  Vue.component(Button.name, Button);

  Vue.component(Progress.name, Progress);
}
