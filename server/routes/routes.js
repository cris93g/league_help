const {getChampInfo,getSummonerName}= require("../controller/automation")
module.exports=app =>{
    app.get(`/api/get_champ_json`,getChampInfo)
    app.post(`/api/get_summoner`,getSummonerName)
}