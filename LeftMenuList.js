import React from 'react';
import { IoAlbums, IoRadio } from "react-icons/io5";
import { BiPulse } from "react-icons/bi";
import { FaPodcast, FaMicrophone } from "react-icons/fa";

function LeftMenuList() {
    const MenuList = [
        {
            id: 1,
            icon: <BiPulse />,
            name: "Discover",
        },
        {
            id: 2,
            icon: <IoRadio />,
            name: "Radio",
        },
        {
            id: 3,
            icon: <FaMicrophone />,
            name: "Artists",
        },
        {
            id: 4,
            icon: <IoAlbums />,
            name: "Albums",
        },
        {
            id: 5,  // Fixed duplicate id
            icon: <FaPodcast />,
            name: "Podcasts",
        },
    ];

    return (
        <div>
            {MenuList.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ marginRight: '10px' }}>{item.icon}</div>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default LeftMenuList;
