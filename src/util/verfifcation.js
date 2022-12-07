export function CkEmail(data){
    let reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/g;
    return !reg.test(data)? true : false
}
export function CkPass(data){
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,15}$/;// 验证密码 6至15位的字母+数字 
    return !reg.test(data) ? true : false
}
