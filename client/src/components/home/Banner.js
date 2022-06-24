import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';

const items = [
    {
        key: "1",
        title: "a lot of fun",
        content: "How about let's go to school and have fun together."
    },
    {
        key: "2",
        title: "a lot of fun",
        content: "How about let's go to school and have fun together."
    },
    {
        key: "3",
        title: "a lot of fun",
        content: "How about let's go to school and have fun together."
    },
]

function Banner(){
    return (
        <div id="banner" className="banner-section">
            <Carousel>
                {items.map((item) => {
                    return (
                        <div key={item.key} className="fluid-container">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btn-group">
                                    <Button type="primary" size="large">
                                        Learn More
                                    </Button>
                                    <Button icon={SearchOutlined} size="large">
                                        Search
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default Banner;