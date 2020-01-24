import React,{Component} from "react"
import {Link} from "react-router-dom"
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            user:""
        }
        this.submitHandler=this.submitHandler.bind(this)
    }
    submitHandler(e){
        this.setState({user:e.target.value})

    }
    render(){
        const {user}=this.state
        return(
            <div>
               <form>
                   <input onChange={e=>this.submitHandler(e)}/>
                   <Link to={`/user/${user}`}><button>submit</button></Link>
               </form>
            </div>
        )
    }
}

export default Home