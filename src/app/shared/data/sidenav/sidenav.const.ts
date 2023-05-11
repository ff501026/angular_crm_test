export const sidenav = [ //sidenav內容
  {
    name: '首頁',
    path: '/',
    icon: 'home',
  },
  {
    name: '業務',
    path: '',
    icon: 'people',
    children: [
      {
        name: '治具需求單管理',
        path: 'sales',
        icon: 'people',
        children: [
          {
            name: '治具需求單作業',
            path: '/internal-contact-list',
            //icon: 'arrow_right'
          },
          {
            name: '治具需求單追蹤作業',
            path: '/internal-contact-schedule',
            //icon: 'arrow_right'
          },
          {
            name: '治具需求單事項追蹤作業',
            path: '/internal-contact-schedule-query',
            //icon: 'arrow_right'
          },
          {
            name: '治具需求單進度回報[出貨日期]',
            path: '/internal-contact-schedule-pom',
            //icon: 'arrow_right'
          },
          {
            name: '治具需求單進度回報[業務]',
            path: '/internal-contact-schedule-odm',
            //icon: 'arrow_right'
          }
        ]
      },
      {
        name: '報價申請單作業',
        path: '/quotation-apply',
        icon: 'people'
      },
      {
        name: '業務顧客拜訪紀錄',
        path: '/sales-service-work-schedule',
        icon: 'people'
      },
      {
        name: '客戶廠別管理',
        path: '/cust-service-work-place',
        icon: 'people'
      },
      {
      name: '故障申報',
      path: '/problem-handling',
       icon: 'people'
      }
    ]
  }
]
