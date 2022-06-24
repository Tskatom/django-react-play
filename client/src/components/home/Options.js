import React from 'react';
import {Button, Card, List} from 'antd';
import { ChromeOutlined, HomeOutlined, TeamOutlined} from '@ant-design/icons';

const data = [
    {
        title: "Buy",
        content: [
            {
                icon: <HomeOutlined />,
                description: 'find you place with good one'
            }
        ]
    }, 
    {
        title: "Sell",
        content:[
            {
                icon: <ChromeOutlined />,
                description: "very exciting to sell this properity"
            }
        ]
    },
    {
        title: "Rent",
        content:[
            {
                icon: <TeamOutlined />,
                description: "the best rent apartment just for you."
            }
        ]
    }

]

function Options(props) {
    return (
        <div id="options" className='block options-block grey-bg'>
            <div className='fluid-container'>
                <div className='title-section'>
                    <h2>Choose your option</h2>
                    <p>It is a long  ........</p>
                </div>

                <List grid={{
                    gutter: 16,
                    xs:1,
                    sm:1,
                    md:3,
                    lg:3,
                    xl:3,
                    xxl:3
                }} 
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>
                            <p className='large'>{item.content[0].icon}</p>
                            <p>{item.content[0].description}</p>
                        </Card>
                    </List.Item>
                )}
                />
            </div>
        </div>
    );
}

export default Options;