# Nuxt

Nuxt3的好处是做了很多处理，不需要配置很多东西，不需要在main.js中反复注册东西，直接写代码的时候导入就行了;

不需要专门写跨域代理，可以直接请求数据;

还有就是一些，目录的专门符号已经配置好了：@和~都代表项目根目录， #代表src，不过src有没有都无所谓，因为Nuxt3直接是在根目录下方常用的pages、assets目录

#build、#public、#server都是指向根目录下的文件夹

很适合快速上线的项目

## Nuxt的安装和依赖问题

国内使用Nuxt新建项目的时候会有网络问题，在Windows的hosts中添加：

185.199.108.133 raw.githubusercontent.com

npm安装包中nuxt的版本不能太低，最好更新一下

Nuxt UI支持Tailwind，如果想用Element Plus又想用Tailwind的话可以把这两个UI框架都装一下;

目前VScode对Nuxt的至此还是比较好的，有官方提供的插件包;

新建好的项目除了.nuxt、node_modules，只有server和public，剩下的自己需要什么文件夹就自己新建;

## Nuxt的路由

Nuxt使用的文件地址路由，本身不用自己写路由，很方便; 尤其是写二级路由的时候很方便;

二级路由就是在pages再建文件夹，在文件夹中再建vue文件作为视图文件，和一级目录一样，index.vue也是二级目录中的默认访问的界面;

在Vue文件中使用  `<nuxt-link></nuxt-link>来进行页面内的跳转，这样不会导致刷新，如果是用<a></a>会导致整个页面刷新`

const route = useRoute()，可以获取到当前页面的地址

### 父页面和子页面

在pages中建立一个页面文件，然后再建立一同名的文件夹，文件夹内的页面是同名文件夹的字页面;

在父组件中仍然用 `<nuxt-page/>来调用子界面相当于<router-view/>`

### 布局在layouts文件夹里，default.vue是全局布局，写完布局之后在App.vue中使用，在布局文件里调用组件的话不如在app.vue中调用组件

## Nuxt数据获取

Nuxt3 的好处是不用再写跨域代理了，直接发起请求就行了，但是得考虑一下怎么整体管理接口
