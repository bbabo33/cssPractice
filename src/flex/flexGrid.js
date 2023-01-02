import React from 'react';
import '../scss/flexGrid.scss';

function FlexGridComponent() {
    return (
        /* Grid Container */
        <div className="grid-container">
            {/* Grid Item */}
            <div className="grid-container--item">A</div>
            <div className="grid-container--item">B</div>
            <div className="grid-container--item">C</div>
            <div className="grid-container--item">D</div>
            <div className="grid-container--item">E</div>
            <div className="grid-container--item">F</div>
            <div className="grid-container--item">G</div>
            <div className="grid-container--item">H</div>
            <div className="grid-container--item">I</div>
        </div>
    );
}

export { FlexGridComponent };