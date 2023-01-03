import React from 'react';
import '../scss/scss1.scss';

function Scss1Component() {
    return (
        <div>
            <div className="actual-include">밑에는 extend-divider. 변수할당 안됨. @content 못씀</div>
            <div className="extend-divider" />
            <div className="actual-include">밑에는 mixin-divider. 변수할당 가능. @content 가능</div>
            <div className="include-divider" />
        </div>
    );
}

export { Scss1Component };