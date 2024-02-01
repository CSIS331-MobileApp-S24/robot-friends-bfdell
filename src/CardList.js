import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    // const cardsArray = [];
    // for(let i  =0; i < robots.length; i++) {
    //     cardsArray.push(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
    // }

    return <div className="tc">{
        robots.map((robot, index) => {
            return (
                <Card
                    key={index}
                    id={robots[index].id}
                    name={robots[index].name}
                    email={robots[index].email}
                />);
        })
    }</div>
};

export default CardList;