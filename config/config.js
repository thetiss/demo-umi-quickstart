export default {
    routes:[
        {
            path: '/',
            component: '../layouts', // 相对于pages的路径
            routes: [
                {
                    path: '/counter',
                    component: './counter'
                },
                {
                    path: '/todolistconfig',
                    component: './todolist'
                },
                {
                    path: '/basic',
                    component: './basic'
                },
            ]
        }
    ]
}