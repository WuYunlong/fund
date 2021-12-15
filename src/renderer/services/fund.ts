const { got } = window.contextModules

const jsonpgz = (obj: { [props: string]: any }) => {
  return JSON.parse(JSON.stringify(obj))
}

export const fromEastmoney = async (code: number) => {
  try {
    const { body } = await got(`http://fundgz.1234567.com.cn/js/${code}.js`)
    if (body.startsWith('jsonpgz')) {
      const fund = eval(body)
      if (fund !== undefined) {
        return fund
      }
    }
    return null
  } catch (e) {
    console.log(e)
    return null
  }
}
