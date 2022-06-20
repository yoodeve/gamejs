import React, { useEffect, useState } from 'react';
import '../css/toggle.css'

const Dropdown = (props) => {
    const [dropAnimation, setDropAnimation] = useState(false);
    const [repeat, setRepeat] = React.useState();

    useEffect (() => {
        if (props.drop) {
            clearTimeout(repeat);
            setRepeat(null)
            setDropAnimation(true);
        } else {
            setRepeat(setTimeout(() => {
                setDropAnimation(false);
            }, 400));
        }
    },[props.drop]);
    return (
        <article className={`components-dropdown ${props.drop?'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
            { dropAnimation && props.children}
        </article>
    );
};

export default Dropdown;