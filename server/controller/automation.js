const axios = require("axios")
const {LEAGUE_API}= process.env


let getChampInfo =async (req,res)=>{
    let data=  await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.2.1/data/en_US/champion.json`)
      console.log(data)
    let results = data.data
        if(results){
            res.status(200).send(results)
        }
    }

let getSummonerName= async(req,res)=>{
    let {name}=req.body

    let data= await axios.get(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,{
        headers:{
           "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
           "X-Riot-Token":LEAGUE_API
        }
    })

    let id = data.data.id;
    let final= await axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`,{
        headers:{
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token":LEAGUE_API
         }
    })


    let results = final.data
    let check=results
    check.push(data.data.profileIconId)

    console.log(check)

    console.log(check)
    if(check){
        res.status(200).send(check)
    }
}



module.exports={
    getChampInfo,
    getSummonerName
}
