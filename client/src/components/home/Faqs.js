import React from 'react';
import { Button, Collapse } from 'antd';

const {Panel} = Collapse;

function Faqs(props) {
    return (
        <div id='faqs' className='block faq-block'>
            <div className='fluid-container'>
                <div className='title-section'>
                    <h2>Frequently Asked Questions</h2>
                    <p>What are the most frequent questions regarding properties?</p>
                </div>

                <Collapse defaultActiveKey={["1"]}>
                    <Panel header="how do I find the right property?">
                        <p>
                        Yes, the "Essentials" tutorial I linked in my answer specifically goes over all of the features in Redux Toolkit, 
                        including how to handle data fetching. Also, note that in Redux, 
                        a reducer may never make async requests of any kind! That needs to be outside the reducer - usually in a "thunk" function.
                        </p>
                    </Panel>
                    <Panel header="how do I find the right agent?">
                        <p>
                        Yes, the "Essentials" tutorial I linked in my answer specifically goes over all of the features in Redux Toolkit, 
                        including how to handle data fetching. Also, note that in Redux, 
                        a reducer may never make async requests of any kind! That needs to be outside the reducer - usually in a "thunk" function.
                        </p>
                    </Panel>
                    <Panel header="who are you?">
                        <p>
                        Yes, the "Essentials" tutorial I linked in my answer specifically goes over all of the features in Redux Toolkit, 
                        including how to handle data fetching. Also, note that in Redux, 
                        a reducer may never make async requests of any kind! That needs to be outside the reducer - usually in a "thunk" function.
                        </p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
}

export default Faqs;