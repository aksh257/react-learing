import React from "react";
import ReactDOM from "react-dom/client";
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
const RestaurantCard = (props)=>{
    const {resName,cuisine,rating,imgSource,minDeliveryTime} = props?.resData
    return (
    <div className="res-card">
        <img className="res-logo" alt="res-logo" src={props.resData.imgSource}/>
        <h3>{props.resData.resName}</h3>
        <h4>{props.resData.cuisine}</h4>
        <h4>{props.resData.rating}</h4>
        <h4>{props.resData.minDeliveryTime}</h4>
    </div>);
}
const resList = [{
    id:1,
    resName:"Meghna Foods",
    cuisine:"Briyani, North Indian",
    rating:"4.4 stars",
    minDeliveryTime:"38 minutes",
    imgSource: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/udxjmwfgpnu6foiudc6v"
},
{
    id:2,
    resName:"Pizza Hut",
    cuisine:"Pizzas",
    rating:"3.7 stars",
    minDeliveryTime:"35 minutes",
    imgSource: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
},
{
    id:3,
    resName:"Meghna Foods",
    cuisine:"Briyani, North Indian",
    rating:"4.4 stars",
    minDeliveryTime:"38 minutes",
    imgSource: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/udxjmwfgpnu6foiudc6v"
},
{
    id:4,
    resName:"Meghna Foods",
    cuisine:"Briyani, North Indian",
    rating:"4.4 stars",
    minDeliveryTime:"38 minutes",
    imgSource: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/udxjmwfgpnu6foiudc6v"
},
{
    id:5,
    resName:"Meghna Foods",
    cuisine:"Briyani, North Indian",
    rating:"4.4 stars",
    minDeliveryTime:"38 minutes",
    imgSource: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/udxjmwfgpnu6foiudc6v"
}
];
const Body = ()=>{
    return (
        <div className="body">
            <div>
                <div className="search">Search</div>
                <div className="res-container">
                    {resList.map(res=><RestaurantCard key={res.id} resData={res}/>)}
                </div>
            </div>
        </div>
    );
}
const AppLayout = ()=>{
    return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);