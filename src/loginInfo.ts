import { loginInfoInterface } from './types'
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
    // 从 .env 中读取账号密码
    _loadEnv: async () => {
        loginInfo.account = Number(process.env.ACCOUNT)
        loginInfo.password = process.env.PASSWORD as string
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
        if (!loginInfo.account || !loginInfo.password) {
            reject({ msg: '账号或密码为空' })
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