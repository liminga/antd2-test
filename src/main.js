import router from './router'
import store from './store'
// 完整引入antd
import {
  createApp
} from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

const app = createApp();
app.config.productionTip = false;

app.use(Antd);

new app({
  router,
  store,
  render: h => h(App)
}).$mount('#app')