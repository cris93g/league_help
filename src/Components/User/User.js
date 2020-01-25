import React,{Component} from "react"
import {connect} from "react-redux"
import {get_summoner}from "../../redux/ducks/leagueReducer"
import axios from "axios"
import GOLD from "../../icons/Emblem_Gold.png"
class User extends Component{
    constructor(props){
        super(props)
        this.state={
            sum:[]
        }
    }

    componentDidMount(){
        axios.post(`/api/get_summoner`,{
            name:this.props.match.params.user
        }).then(response =>{
            this.setState({sum:response.data})
        })
    }
    render(){
        console.log(this.state.sum)
        const {sum}=this.state
        return(
            <div>
                {sum ? (
                    <div>
                        <img
							className="iconpic"
							src={`http://ddragon.leagueoflegends.com/cdn/9.12.1/img/profileicon/${
							sum.profileIconId
							}.png`}
						    />
                        {sum.tier== `BRONZE` ? (
                            <img style={{width:"100px"}} src={require("../../icons/Emblem_Bronze.png")}/>
                        ): sum.tier == `SILVER` ? (
                            <img style={{width:"100px"}} src={require("../../icons/Emblem_Silver.png")}/>
                        ):sum.tier == `GOLD` ? (
                            <img style={{width:"100px"}} src={require("../../icons/Emblem_Gold.png")}/>
                        ): sum.tier == `PLATINUM`?(
                            <img  style={{width:"100px"}} src={require("../../icons/Emblem_Platinum.png")}/>
                        ): sum.tier == `DIAMOND` ?(
                            <img style={{width:"100px"}} src={require("../../icons/Emblem_Diamond.png")}/>
                        ):sum.tier == `MASTER`?(
                            <img style={{width:"100px"}} src={require("../../icons/Emblem_Master.png")}/>
                        ):sum.tier == `GRANDMASTER` ?(
                            <img style={{width:"100px"}} src={require("../../icons/Emblem_Grandmaster.png")}/>
                        ):sum.tier==`CHALLENGER` ?(
                            <img style={{width:"100px"}} src={require("../../icons/Emblem_Challenger.png")}/>
                        ):<div>sorry no rank</div>}
                        <p>{`summoner level: ${sum.summonerLevel}`}</p>
                        <p>{`summoner name: ${sum.summonerName}`}</p>
                        <p>{`wins: ${sum.wins}`}</p>
                        <p>{`looses: ${sum.losses}`}</p>
                    </div>
                ):<p>incorrect username</p>}
            </div>
        )
    }
}
export default User