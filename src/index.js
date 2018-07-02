import '@styles/index.scss';

// import Affix from './components/affix';
// import Badge from './components/badge';
import Button from './components/button';
// import Card from './components/card';
// import Carousel from './components/carousel';
// import Cell from './components/cell';
// import Container from './components/container';
// import Dialog from './components/dialog';
// import Grid from './components/grid';
// import Icon from './components/icon';
// import Imageviewer from './components/imageviewer';
// import Lazyload from './components/lazyload';
// import List from './components/list';
// import Loading from './components/loading';
// import PullRefresh from './components/pull-refresh';
// import Rate from './components/rate';
// import Tabs from './components/tabs';
// import Tabbar from './components/tabbar';
// import Tag from './components/tag';
// import Toast from './components/toast';
const Components = {
  // Affix,
  // Badge,
  Button,
  // ButtonGroup: Button.Group,
  // Card,
  // Carousel,
  // CarouselItem: Carousel.Item,
  // Cascader,
  // Cell,
  // CellGroup: Cell.Group,
  // Dialog,
  // Icon,
  // Imageviewer,
  // InputNumber,
  // Lazyload,
  // List,
  // Loading,
  // PullRefresh,
  // Rate,
  // Tabs: Tabs,
  // TabPanel: Tabs.Panel,
  // Tabbar,
  // Tag,
  // Toast
};

const install = function(Vue, opts = {}) {
  for(const key in Components){
    Vue.component(Components[key].name, Components[key]);
  }
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: VERSION, 
  install,
  ...Components
};