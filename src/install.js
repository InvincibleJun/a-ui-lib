import Button from "./components/button/index";
import Progress from "./components/progress/index";
import LoadingBar from "./components/loading-bar/index";
import Collapse from "./components/collapse/index";
import CollapseItem from "./components/collapse-item/index";
import Tooltip from "./components/tooltip/index";
import Loading from "./components/loading/index";
import Colorpicker from "./components/colorpicker/index";

let _Vue;

export default function install(Vue) {
  if (_Vue) return;

  _Vue = Vue;

  Vue.component(Button.name, Button);

  Vue.component(Progress.name, Progress);

  Vue.component(Collapse.name, Collapse);

  Vue.component(CollapseItem.name, CollapseItem);

  Vue.component(Tooltip.name, Tooltip);
  
  Vue.component(Loading.name, Loading);
  Vue.component(Colorpicker.name, Colorpicker);

  Vue.prototype.$LoadingBar = LoadingBar;
}
