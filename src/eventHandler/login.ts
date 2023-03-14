import { EventMap } from 'icqq'
import { fnStdin } from '../base/utils'
import { client } from '../main'

const fnSliderHandler: EventMap['system.login.slider'] = (e) => {
    client.logger.info('输入滑块地址获取的 ticket 后继续。\n滑块地址:    ' + e.url)
    fnStdin('请输入滑块 ticket:').then((ticket) => {
        client.submitSlider(ticket)
    })
}

const fnQRCodeHandler: EventMap['system.login.qrcode'] = () => {
    client.logger.info('请使用手机 QQ 扫描二维码后继续；')
    fnStdin('扫描后请按回车：').then(() => {
        client.login()
    })
}

const fnDeviceHandler: EventMap['system.login.device'] = (e) => {
    client.logger.info('请选择验证方式：\n1. 短信验证\n2. 扫码验证')
    fnStdin('请输入数字:').then((res) => {
        if (res === '1') {
            client.sendSmsCode()
            fnStdin('请输入手机收到的短信验证码:').then((res) => {
                client.submitSmsCode(res)
            })
        } else {
            client.logger.info('扫码完成后回车继续：' + e.url)
            fnStdin('扫码完成后请按回车：').then(() => {
                client.login()
            })
        }
    })
}

export { fnSliderHandler, fnQRCodeHandler, fnDeviceHandler }