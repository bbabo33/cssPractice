import React, { Component, Fragment } from 'react';
import './scss/prac1.scss';

export default class prac1 extends Component {

    render() {
        return (<Fragment>
                    {/* JSX에서는 javaScript이므로 class의 다른 의미가 있음. className으로 써야함 */}
                    <div className="prac1 prac1-title">this is prac1 title</div>
                    <div className="prac1-content">this is prac1 content</div>
                </Fragment>
        );
    }
}