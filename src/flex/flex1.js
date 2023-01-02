import React from 'react';
import '../scss/flex1.scss';

function Flex1Component() {
    return (
    <div>
        <div className="title">flex direction 주축이 X축</div>
        <div className="flex1">
            <div className="flex1--item"><button>1</button></div>
            <div className="flex1--item">2</div>
            <div className="flex1--item">3</div>
        </div>
        <div className="divider"></div>
        <div className="title">flex direction 주축이 Y축</div>
        <div className="flex2">
            <div className="flex2--item"><button>1</button></div>
            <div className="flex2--item">2</div>
            <div className="flex2--item">3</div>
        </div>
        <div className="divider"></div>
        <div className="title">flex-wrap</div>
        <div className="flex3">
            <div className="flex3--item"><button>가나다라마바사아자차카타파하</button></div>
            <div className="flex3--item">1234567890</div>
            <div className="flex3--item">abcdefghijklmnopqrstuvwxyz</div>
        </div>
        <div className="divider"></div>
        <div className="title">flex-grow(개발자모드로 영역을 찍어볼것)</div>
        <div className="flex4">
            <div className="flex4--item"><button className="flex4--item--1">가나다라마바사아자차카타파하</button></div>
            <div className="flex4--item"><div className="flex4--item--2">1234567890</div></div>
            <div className="flex4--item"><div className="flex4--item--3">abcdefghijklmnopqrstuvwxyz</div></div>
        </div>
        <div className="divider"></div>
        <div className="title">flex-shrink(개발자모드로 영역을 찍어볼것)</div>
        <div className="flex5">
            <div className="flex5--item"><button className="flex5--item--1">가나다라마바사아자차카타파하</button></div>
            <div className="flex5--item"><div className="flex5--item--2">1234567890</div></div>
            <div className="flex5--item"><div className="flex5--item--3">abcdefghijklmnopqrstuvwxyz</div></div>
        </div>
        <div className="divider"></div>
        <div className="title">flex-order</div>
        <div className="flex6">
            <div className="flex6--item"><button className="flex6--item--1">가나다라마바사아자차카타파하</button></div>
            <div className="flex6--item"><div className="flex6--item--2">1234567890</div></div>
            <div className="flex6--item"><div className="flex6--item--3">abcdefghijklmnopqrstuvwxyz</div></div>
        </div>
    </div>
    );
}

export { Flex1Component };