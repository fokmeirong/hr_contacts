import React from 'react';
import GoBack from '@/components/GoBackArrow';

const Header = (props) => {
    return (
        <header>
            <div className="left">
                {
                    props.left || <GoBack/>
                }
            </div>
            <div className="title">{props.children}</div>
            <div className="right">
                {props.right}
            </div>
        </header>
    );
}

export default Header;