// process.stdin 封装
export function fnStdin(msg: string): Promise<string> {
    return new Promise((resolve) => {
        console.log(msg)
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim())
        })
    })
}
