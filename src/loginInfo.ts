import { loginInfoInterface, configInterface } from './types'
import { fnStdin } from './base/utils'
import { client } from './main'

const loginInfo: loginInfoInterface = {
    account: 123456,
    password: 'abcdefgh',
    hasLogin: false,
    // 提示输入账号密码
    _askLogin: async () => {
        loginInfo.account = Number(await fnStdin('请输入账号:'))
        loginInfo.password = await fnStdin('请输入密码:')
    },
    // 从 config 中读取账号密码
    _loadCnf: async (config: configInterface) => {
        // console.log(config)
        for (const key in config) {
            if (Object.prototype.hasOwnProperty.call(config, key)) {
                const item = config[key]
                // 判断 item 是否有 password 属性
                if (item.password) {
                    loginInfo.account = Number(key)
                    loginInfo.password = item.password as string
                    return
                }
            }
        }
    },
    // 登录
    // _login: async () => {
    //     if (!loginInfo.hasLogin) {
    //         client.login(loginInfo.account, loginInfo.password)
    //         loginInfo.hasLogin = true
    //     }
    // }
    // 改写为 Promise
    _login: () => new Promise((resolve, reject) => {
        const flag = loginInfo.account && loginInfo.password
        if (!flag) {
            reject({ msg: '账号或密码为空' })
            return
        }
        if (!loginInfo.hasLogin) {
            client.login(loginInfo.account, loginInfo.password)
            loginInfo.hasLogin = true
            resolve({ msg: '登录成功' })
        } else {
            reject({ msg: '已登录' })
        }
    }),
}

export { loginInfo }
