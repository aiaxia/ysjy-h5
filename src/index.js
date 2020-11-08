import dva from 'dva';
import './index.css';
// import {createBrowserHistory} from "history";
// import createHistory from 'history/createBrowserHistory';
import 'antd-mobile/dist/antd-mobile.css';

// 1. Initialize
const app = dva();
// const app =dva({history:createBrowserHistory()});
// const app = dva({
//     ...createLoading({
//         effects: true
//     }),
//     history: createHistory()
// });

// 4. Router
app.router(require('./router').default);
// 3. Model
app.model(require('./models/menumodal').default);

// 5. Start
app.start('#root');
