// import React from "react";



// class UserClass extends React.Component {
//       constructor(props){
//         super(props);
        
//         this.state={
//             userInfo:{
//                 name: "dummy",
//                 location:"default",
//                 avatar_url:"https://avatars.githubusercontent.com/u/12824231?v=4"
//             }
//         };
//         console.log("child constructor")
//     }
  

//     async componentDidMount(){
//         console.log("child component did mount")

//         const data = await fetch("https://api.github.com/users/akshaymarch7")
//         const json = await data.json();

//         this.setState({
//             userInfo:json,
//         });
//         console.log(json)
//     }
//     render (){
//         const {name,location,avatar_url}=this.state.userInfo
//         console.log (this.props.name+"child render")

//         return(
//             <div className ="user-card">
//             <img src={avatar_url}/>
//             <h2>Name:{name}</h2>
//             <h3>Location: Pulivendula</h3>
//             <h4>Contact: @babji-aryan</h4>

//         </div>
//         )

//     }
// }

// export default UserClass;