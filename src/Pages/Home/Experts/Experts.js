import React from 'react';

import babar from '../../../images/developers/Babar.jpg';
import sabbir from '../../../images/developers/sabbir.jpg';
import shohan from '../../../images/developers/Shohan.jpg';
import bipul from '../../../images/developers/Bipul.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: babar,
        name: 'Mozaddid Babar',
        expertize: 'Front-end & Backend Developer'
    },
    {
        img: sabbir,
        name: 'Sabbir Sourav',
        expertize: 'UI Designer'
    },
    {
        img: shohan,
        name: 'Samsuddin Shohan',
        expertize: 'Front-end Developer'
    },
    {
        img: bipul,
        name: 'Bipul Roy',
        expertize: 'Fron-end Designer'
    },
]
// const experts = [
//     {
//         img: mechanic1,
//         name: 'Andrew Smith',
//         expertize: '-Engine Expert-'
//     },
//     {
//         img: mechanic2,
//         name: 'John Anderson',
//         expertize: '-Polish Expert-'
//     },
//     {
//         img: mechanic3,
//         name: 'Zakaria Smith',
//         expertize: '-Coloring Expert-'
//     },
//     {
//         img: mechanic4,
//         name: 'Sakib Anderson',
//         expertize: '-Alrounder Expert-'
//     },
// ]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h2 className="text-primary fw-bold mt-5">Our Developers</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;