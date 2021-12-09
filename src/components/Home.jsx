import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Generator from './Generator';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import CharityImg from '../images/charity.jpeg'
import PancakeImg from '../images/pancakeswap.png'
import RewardsImg from '../images/rewards.jpeg'
import BscEth from '../images/4.jpg'
function Home(){
    return(
        <div>
            <p className="display-3">Crypto Generator <b style={{color: "green"}}>(live)</b></p>
            <p className="display-6">easily create and manage your own crypto currency</p>
            <p>
            Crypto generator allows you to create both etherium erc20's as well as binance smart chain BEP20 coins. 
            And allows for the creation of charity tokens and safemoon clones. You will have 100% ownership of your token contract and all inital supply.
            </p>
            <Router>
                <Switch>
                    <Route path="/generator"><Generator screen="minter"/></Route>
                </Switch>
            </Router>
            <Link style={{color:"white", textDecoration:"none"}} to="/generator"><a className="btn btn-outline-primary btn-lg">Start Building</a></Link>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <p className="display-6">Features</p>
            <br/>
            <br/>
            <CardGroup>
                <Card style={{padding: '10px'}}>
                    <Card.Img style={{objectFit: 'cover', width: '100%', height: '15vw'}} variant="top" src={CharityImg}/>
                    <Card.Title style={{fontSize: "1.6em"}} className="lead text-center">Charity functionality</Card.Title>
                    
                    <p className="text-center">Token generator allows any created token to add charity functionality on the fly</p>
                </Card>
                <Card style={{padding: '10px'}}>
                    <Card.Img style={{objectFit: 'cover', width: '100%', height: '15vw'}} variant="top" src={RewardsImg}/>
                    <Card.Title style={{fontSize: "1.6em"}} className="lead text-center">Advanced Tokenomics</Card.Title>
                    
                    <p className="text-center">Token generator allows out uses add burning or redistribution tokenomics to any created coin similar to safemoon</p>
                </Card>
                <Card style={{padding: '10px'}}>
                    <Card.Img style={{objectFit: 'cover', width: '100%', height: '15vw'}} variant="top" src={PancakeImg}/>
                    <Card.Title style={{fontSize: "1.6em"}} className="lead text-center">Direct Launch to pancakeswap</Card.Title>
                    
                    <p className="text-center">BSC tokens can instantly be launched to pancakeswap with no hassel</p>
                </Card>
                <Card style={{padding: '10px'}}>
                    <Card.Img style={{objectFit: 'cover', width: '100%', height: '15vw'}} variant="top" src={BscEth}/>
                    <Card.Title style={{fontSize: "1.6em"}} className="lead text-center">Etherium or Binance</Card.Title>
                    
                    <p className="text-center">Both Binance Smart Chain tokens and Etherium tokens can be created instantly</p>
                </Card>
            </CardGroup>
            <div style={{height:"100px"}}></div>
            <p className="display-6">Use Cases</p>
            <br/>
            <br/>
            <CardGroup>
                <Card>
                    <Card.Header style={{fontSize: "1.6em"}}  className=" text-center">Safemoon Clones</Card.Header>
                    <Card.Body>All tokens created can instantly be converted with the manager use burning to liquidity and the redistribution popularized by safemoon</Card.Body>
                </Card>
                <Card>
                    <Card.Header style={{fontSize: "1.6em"}}  className=" text-center">Meme Tokens</Card.Header>
                    <Card.Body>Own you're very own meme token (elone-doge-moon) (poopbazooka) ($elongrugpull) and any other shitcoin you can come up with</Card.Body>
                </Card>
                <Card>
                    <Card.Header style={{fontSize: "1.6em"}}  className=" text-center">Charity Tokens</Card.Header>
                    <Card.Body>With optional but built in charity functionality crypto generator will allow you create a force for positive change</Card.Body>
                </Card>
                <Card>
                    <Card.Header style={{fontSize: "1.6em"}}  className=" text-center">Smart Tokens</Card.Header>
                    <Card.Body>Combine these features in anyway you see fit to create the next huge crypto currency</Card.Body>
                </Card>
            </CardGroup>
            <div style={{height:"100px"}}></div>
        </div>
    )

}

export default Home;