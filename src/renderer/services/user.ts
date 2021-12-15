const { got } = window.contextModules
export const login = async (): Promise<number> => {
  const {
    body: { code }
  } = await got('https://api.mtliss.com/v4/user/login', {
    responseType: 'json'
  })
  return code
}
