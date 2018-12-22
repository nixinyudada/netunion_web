This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





## 如何部署React项目到 GitPage 

1. 将需要部署的项目文件打包成build文件

2. 安装 gh-pages

`npm install gh-pages --save-dev`

3. 配置package.json文件

!()[https://img-blog.csdn.net/20180601163847227?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1F1ZV9MaQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70]

> "homepage": "https://queli1990.github.io/test"

> "predeploy": "npm run build",
> "deploy": "gh-pages -d build"

4. 执行部署命令

`npm run deploy`

5. 访问 

git io 后面加上项目名

> https://nixinyudada.github.io/netunion_web/



#### 将项目部署到 vagrant virtualBox centos7

###### 安装Node.js

1. wget [ node版本下载地址 ]

2. 解压

3. 配置环境变量
    `sudo vi /etc/profile`

    ```linux
        export LC_ALL=C # 语言环境

        export NODE_HOME=/home/vagrant/nodejs-linux-x86_64-3.2.12
        export PATH=$PATH:$NODE_HOME/bin
    ```

/* "homepage": "https://nixinyudada.github.io/netunion_web", */

####### 安装 MongoDB


1. 下载并解压到指定目录 （注意权限，是否能够访问读写等）

2. 配置到环境变量

    `sudo vi /etc/profile`
    ```linux
        export LC_ALL=C # 语言环境

        export MONGODB_HOME=/home/vagrant/mongodb-linux-x86_64-3.2.12
        export PATH=$PATH:$MONGODB_HOME/bin
    ```

3. 使配置文件生效

`source /etc/profile`


4. 启动MongoDB

`
>> mongod -dbpath=/home/vagrant/data -logpath=/home/vagrant/mong odb.log -logappend -port=27017 -fork
`













