export default {
    // 通用配置
    general: {
        // 基础
        platform         : 1,           // 1:安卓手机 2:aPad 3:安卓手表 4:MacOS 5:iPad
        debug            : false,       // 开启 debug
        use_cqhttp_notice: false,       // 是否使用 cqhttp 标准的notice事件格式
        // 监听服务
        host        : '0.0.0.0',        // 监听主机名
        port        : 5700,             // 端口
        use_http    : false,            // 启用 http
        use_ws      : false,            // 启用正向 ws，和 http 使用相同地址和端口
        access_token: '',               // 访问 api 的 token
        // 上报信息
        secret             : '',        // 上报数据的 sha1 签名密钥
        post_timeout       : 30,        // post 超时时间(秒)
        post_message_format: 'array',   // "string" 或 "array"
        enable_cors        : false,     // 是否允许跨域请求
        enable_heartbeat   : false,     // 是否启用 ws 心跳
        heartbeat_interval : 15000,     // ws 心跳间隔(毫秒)
        rate_limit_interval: 500,       // 使用 _rate_limited 后缀限速调用 api 的排队间隔时间(毫秒)
        event_filter       : '',        // json 格式的事件过滤器文件路径
        post_url: [                     // 上报地址，可以添加多个 url
            // 'http://your.address.com:80',
        ],
        ws_reverse_url: [                           // 反向 ws 地址，可以添加多个 url
            // 'ws://your.address.com:8080',
        ],
        ws_reverse_reconnect_interval: 3000,        // 反向 ws 断线重连间隔(毫秒)，设为负数直接不重连
        ws_reverse_reconnect_on_code_1000: false,   // 反向 ws 是否在关闭状态码为 1000 的时候重连
    },
    // 独立设置， 会覆盖上边的相同项
    123456: {
        // password
        password: '123456',
        // more settings
    }
}
