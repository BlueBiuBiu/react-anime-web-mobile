const DEV_BASEURL = "http://localhost:8181"
const PRO_BASEURL = "http://xxxxxx"

export const BASEURL = process.env.NODE_ENV === 'development'? DEV_BASEURL: PRO_BASEURL
export const TIMEOUT = 5000