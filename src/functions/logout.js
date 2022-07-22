/**
 * @file: logout.js
 * @author: wenxin
 * 
 * This is to reset several react states when logout. 
 * 
 * @param {in} setID 
 * @param {in} setUsername 
 * @param {in} setPassword 
 * @param {in} setLoginStatus 
 * @param {in} setDisplayStatus 
 */
export function Logout(setID, setUsername, setPassword, setLoginStatus, setDisplayStatus){
    sessionStorage.clear();
    setID("");
    setUsername("");
    setPassword("");
    setLoginStatus("");
    setDisplayStatus("none");
}