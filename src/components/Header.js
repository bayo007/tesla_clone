import React , { useState } from 'react'
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    
//selectcars contains teh state of the cars which is line 5 of the carSlice.js and line 15
// console.log(cars) == [ "Model S","Model 3","Model X", "Model Y" ] line 26...this is an array


return (
    <Container>
        <a href="/">
        <img src= "/images/logo.svg" alt="" />
        </a>

        <Menu>  
            {cars && cars.map((car, index)=>(
                <a key= {index} href="/">{car}</a>
            ))}
        </Menu>

        <RightMenu>
            <a href="/" key={1}>Shop </a>
            <a href="/" key={2}>Tesla Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)} /> 
        </RightMenu>


    <BurgerNav show ={burgerStatus}>   
                <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>

            {cars && cars.map((car, index)=>(
                <li key= {index}>{car}</li>   
            ))} 
        <li key={1}>Existing Inventory</li>
        <li key={2}>Used Inventory</li>
        <li key={3}>Trade-In</li>
        <li key={4}>Cyber Truck</li>
        <li key={5}>Roadaster</li>
        <li key={6}>Utilities</li>
        <li key={7}>Power</li>
        <li key={8}>Commerce</li>
        </BurgerNav>        

    </Container>
    )
}



export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed; 
display:flex;
align-items: center;
padding: 0 20px;
top:0;
left:0;  /*the left qnd right is to expand the nav to the max width*/
right:0;
justify-content: space-between;
z-index:1;
`;

const Menu = styled.div`
display:flex;
align-items:center;
flex:1;
justify-content: center;


a{
    font-weight:600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap : nowrap;

}

@media(max-width: 768px){
    display:none; /*this means that if the width is 768 and below, the cars should not show*/
}
`

const RightMenu = styled.div`
display : flex;
align-items: center;
a{ 
    font-weight:600;
    text-transform: uppercase;
    margin-right:10px;
}

`


const CustomMenu = styled(MenuIcon)`  /*this inherits the properties of th menuIcon*/
cursor : pointer;
z-index: 1
`

const BurgerNav = styled.div`
position:fixed;
top:0;
bottom: 0;
right:0;
background: white;
width:300px;
z-index:16; /*the zindex has to be more than that of container that way it will be above the contianer */
list-style: none;
padding: 20px;
display:flex;
flex-direction: column;
text-align: start;
transform : ${props => props.show ?  `translateX(0)` : `translateX(100%)`}; 
/*when the custommenu is clicked the burgerStatus becomes true and it sets the transform state of the burgernav to true,hence moves 100% into the app since it is above the container by z-index*/
/*when the customclose is pressed the burgerSatus becomes false and the translation becomes 0*/
transition : transform 0.2s ease-in; 


li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0, .2);
     font-weight: 600
}
`

const CustomClose = styled(CloseIcon)`
cursor: pointer;
`;

const CloseWrapper = styled.div`
display:flex;
justify-content: flex-end;
`






//so initially the burgerNav is always actually ontop ofthe page because of the z-index of the container relative to it
//so it now has to alwaya shift outward or inward depending on the state change
//  TRANSLATE 0 MEANS STAY ON THE SAME SPOT WHILE TRANSLATEX(100%) means move 100% to the right