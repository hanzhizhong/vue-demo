export default{
    getSession(name){
        return JSON.parse(sessionStorage.getItem(name)) || [];
    },
    setSession(name,data){
        sessionStorage.setItem(name,JSON.stringify(data))
    },
    removeSession(name){
        sessionStorage.removeItem(name)
    }
}