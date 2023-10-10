export const getitem = key => {
    try {
      return JSON.parse(localStorage.getItem(key))
    }
    catch (error) {
        console.log("error", error)
        return null

    }
}
export const setitem = (key, data) => {
    try {
     return localStorage.setItem(key, JSON.stringify(data))
    }
    catch(error) {

        console.log('error setitems')
    }
}