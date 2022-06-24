import React from "react";
import { Col, Row } from 'antd';
import useItems from "antd/lib/menu/hooks/useItems";

const items = [
    {
        key: "1",
        icon: <i className="fas fa-search-location"></i>,
        title: "a lot of fun",
        content: "How about let's go to school and have fun together."
    },
    {
        key: "2",
        icon: <i className="fas fa-search-location"></i>,
        title: "a lot of fun",
        content: "How about let's go to school and have fun together."
    },
    {
        key: "3",
        icon: <i className="fas fa-search-location"></i>,
        title: "a lot of fun",
        content: "How about let's go to school and have fun together."
    }
]

function About() {
    return (
        <div id="about" className="block about-section">
            <div className="fluid-container">
                <div className="title-section">
                    <h2>About Us</h2>
                    <p>You will find us very interesting.</p>
                </div>
                <div className="content-section">
                    <p>
                    For the record this has nothing to do with your actual application code.
                     It is specifically a message to users like you who are using "plain Redux" - it's trying to tell you that you're 
                    following patterns that are much harder to use, and we want you to use Redux Toolkit instead because it will make your life much easier :)
                    </p>
                </div>

                <Row gutter={[16,16]}>
                    {items.map((item)=>{
                        return (
                            <Col md={{span: 8}} key={item.key}>
                                <div className="content">
                                    <div className="icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default About;