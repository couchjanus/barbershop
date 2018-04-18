import React, { Component } from 'react';
import ServiseView from './ServiseView';

class ServiseList extends Component {

    state = {
      servises:  [
        {
          id: 1,
          servise: 'МУЖСКАЯ СТРИЖКА',
          price: 350
        },
        {
            id: 2,
            servise: 'ДЕТСКАЯ СТРИЖКА',
            price: 250
        },
        {
            id: 3,
            servise: 'СТРИЖКА МАШИНКОЙ',
            price: 150
        }
      ]
    }
  
    render() {
        const serviseViews = this.state.servises.map(
            function(servise, index) {
                return(
                    <ServiseView key={index} servise={servise} />
                )
            }
        );
      
        return(
            <div>
                <h1>List of Servises</h1>
                {serviseViews}
            </div>
        );
    }
  }
  

export default ServiseList;
