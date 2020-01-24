import React,{Component} from "react"
import {connect} from "react-redux"
import {get_summoner}from "../../redux/ducks/leagueReducer"
import axios from "axios"
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
        const {sum}=this.state
        console.log(sum)
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