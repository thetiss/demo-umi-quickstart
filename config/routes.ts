export default [
    {
        path: '/',
        component: '../layouts', // 相对于pages的路径
        routes: [
            {
                path: '/counter',
                component: './counter'
            },
            {
                path: '/todolist',
                component: './todolist'
            },
            {
                path: '/basic',
                component: './basic'
            },
            {
                path: '/card',
                component: './card'
            },
            {
                path: '/employee',
                component: './users'
            },
            {
                path: '/datav',
                component: './dataV',
            },
            {
              path: '/bizcharts',
              component: './BizCharts',
              routes: [
                {
                  path: '/bizcharts/overall',
                  component: './BizCharts/overall'
                },                
                {
                  path: '/bizcharts/lineAdvance',
                  component: './BizCharts/LineAdvance'
                },
                {
                  path: '/bizcharts/bar',
                  component: './BizCharts/Interval'
                },
              ]
          }
        ]
    }
];