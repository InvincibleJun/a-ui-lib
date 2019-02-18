import Button from './components/button/index';
import Progress from './components/progress/index';
import LoadingBar from './components/loading-bar/index';
import Collapse from './components/collapse/index';
import CollapseItem from './components/collapse-item/index';
import Tooltip from './components/tooltip/index';
import Loading from './components/loading/index';
import Colorpicker from './components/colorpicker/index';
import Dropdown from './components/dropdown/index';
import DropdownItem from './components/dropdown-item/index';
import Datepicker from './components/datepicker/index';
import Tabs from './components/tabs/index';
import TabsItem from './components/tabs-item/index';
import Upload from './components/upload/index';
import Col from './components/col/index';
import Row from './components/row/index';
import Page from './components/page/index';
import Input from './components/input/index';
import Notification from './components/notification/index';
import Form from './components/form/index';
import FormItem from './components/form-item/index';

// eslint-disable-next-line no-underscore-dangle
let _Vue;

export default function install(Vue) {
  if (_Vue) return;

  _Vue = Vue;

  Vue.component(Button.name, Button);

  Vue.component(Upload.name, Upload);

  Vue.component(Progress.name, Progress);

  Vue.component(Collapse.name, Collapse);

  Vue.component(CollapseItem.name, CollapseItem);

  Vue.component(Tooltip.name, Tooltip);

  Vue.component(Loading.name, Loading);

  Vue.component(Colorpicker.name, Colorpicker);

  Vue.component(Dropdown.name, Dropdown);

  Vue.component(DropdownItem.name, DropdownItem);

  Vue.component(Datepicker.name, Datepicker);

  Vue.component(Tabs.name, Tabs);

  Vue.component(TabsItem.name, TabsItem);

  Vue.component(Row.name, Row);

  Vue.component(Col.name, Col);

  Vue.component(Page.name, Page);

  Vue.component(Input.name, Input);

  Vue.component(FormItem.name, FormItem);

  // eslint-disable-next-line no-param-reassign
  Vue.prototype.$LoadingBar = LoadingBar;

  Vue.prototype.$Notice = Notification;
}
