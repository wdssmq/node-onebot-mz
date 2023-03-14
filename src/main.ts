import { createClient } from 'icqq'
import { fnStdin } from './base/utils'
import { fnSliderHandler, fnQRCodeHandler, fnDeviceHandler } from './eventHandler/login'
import { loginInfo } from './loginInfo'

const client = createClient({ platform: 3 })

client.on('system.online', () => client.logger.info('Logged in!'))
client.on('system.login.slider', fnSliderHandler)
client.on('system.login.qrcode', fnQRCodeHandler)
client.on('system.login.device', fnDeviceHandler)

export { client }

// 根据用户选项，选择登录方式
// 1. 扫码登录
// 2. 账号密码登录
// 3. 从 .env 中读取账号密码登录

const fnAskLoginType = async () => {
    console.log('请选择登录方式：')
    console.log('1. 扫码登录')
    console.log('2. 账号密码登录')
    console.log('3. 从 .env 中读取账号密码登录')
    const loginType = await fnStdin('请输入数字:')
    switch (loginType) {
        case '1':
            client.login()
            break
        case '2':
            loginInfo._askLogin().then(loginInfo._login).catch(() => {
                client.logger.warn('账号或密码为空，请重试；')
                fnAskLoginType()
            })
            break
        case '3':
            loginInfo._loadEnv().then(loginInfo._login).catch(() => {
                client.logger.warn('读取 .env 失败，请尝试其他登录方式；')
                fnAskLoginType()
            })
            break
        default:
            client.logger.warn('输入错误，请重新输入：')
            fnAskLoginType()
            break
    }
}

// console.log(process.env);


fnAskLoginType()
