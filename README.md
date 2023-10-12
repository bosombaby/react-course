# 一、前言
## 1.1 资源链接
[React 入门 - 学习 Web 开发 | MDN](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

[React](https://react.dev/)

[React 官方中文文档](https://zh-hans.react.dev/)

[尚硅谷React教程（2022加更，B站超火react教程）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1wy4y1D7JT/?vd_source=ef7a545e530c1855aa8642b75dc240ef)

[千锋教育前端React18系统精讲教程，基于最新版本新特性源码级剖析_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV13h4y177jW/?spm_id_from=333.337.search-card.all.click&vd_source=ef7a545e530c1855aa8642b75dc240ef)
## 1.2 介绍
![1.png](https://cdn.nlark.com/yuque/0/2023/png/27367619/1696769214521-2a1af327-c695-4cde-ba05-3290ebb0d7b1.png#averageHue=%23ebe9e5&clientId=u8596a888-cc46-4&from=ui&id=ub446a9f4&originHeight=832&originWidth=1400&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=288791&status=done&style=none&taskId=u606a32a0-9b5d-4985-83be-f56a706c737&title=)

**React是由FaceBook开发的一款非常流行的声明式组件、基于状态驱动的JavaScript库，目标是保持UI和数据同步。**

- 组件化（抽离组件复用）
- JSX 声明式语法（融合基础三件套/组件），不需要触碰DOM
- React 通过重新渲染UI对状态变化作出反应

**功能**

1. 根据当前的数据状态渲染不同的组件到页面上
2. 当数据改变时，通过再次渲染保持UI和数据状态同步
# 二、入门
## 2.1 小案例
![1.png](https://cdn.nlark.com/yuque/0/2023/png/27367619/1696757805774-4eef0f0f-5674-480d-b0f4-649c2152cb56.png#averageHue=%23d1d1d1&clientId=u8596a888-cc46-4&from=ui&id=u29b09021&originHeight=326&originWidth=616&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=14129&status=done&style=none&taskId=ua114dfca-73e4-4fcf-94b6-fdbd2131d61&title=)

- 通过一个简单的应用，大概了解了react如下语法
- JSX语法
- 变量传参、模板化、方法
- 组件分离

**代码块**：[react-demo](https://codesandbox.io/s/affectionate-almeida-42ykj3)
## 2.2 原生React
```javascript
function App() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  React.useEffect(function () {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return React.createElement("h1", null, `Hello React! It's ${time}`);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
```

- 未使用构建工具的原生React，比较麻烦
- 不能自动重新渲染，无法使用JSX语法，无法对状态改变自动渲染
## 2.3 构建工具

![1.png](https://cdn.nlark.com/yuque/0/2023/png/27367619/1696814831719-a0d67227-4f65-4787-8395-d5b3a4a9bfba.png#averageHue=%23e0dfdc&clientId=u4b3e4590-ec92-4&from=ui&id=udb86ec5b&originHeight=851&originWidth=1822&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=409926&status=done&style=none&taskId=uecf63c70-82b8-408e-a46c-7479730bcf9&title=)
### 2.3.1 create-react-app

- 内置多种工具，不需要手动配置
- 打包时间较慢，官方版本更新维护频率慢
- 不适合真实项目，可以作为学习使用
### 2.3.2 vite

- 热更新很快，适合构建真实项目
- 需要额外自己配置工具
## 2.4 创建项目
```javascript
pnpx create-react-app@5 pizza-menu
```
# 三、基础
## 3.1  组件（Components）


## 3.2 传参（Props）

## 3.3 JSX

