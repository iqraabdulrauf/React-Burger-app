import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Abc from '../../hoc/Abc';
class BurgerBuilder extends Component {
    state = { 
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese :0,
            meat:0
        }
     }
    render() { 
        return (
            <Abc>
            <Burger ingredients= {this.state.ingredients}/>
           <div>Burger Controls</div>

            </Abc>

        );
    }
}
 
export default BurgerBuilder;
