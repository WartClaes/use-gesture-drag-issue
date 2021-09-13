import React from 'react';

import { useDrag } from 'react-use-gesture';
import { useSpring, animated } from '@react-spring/web';

import './App.css';

function App() {
    const bodyWidth = document.body.clientWidth;
    const BLOCK_SIZE = 150;

    const START_X = bodyWidth - BLOCK_SIZE;
    const [{ x, y }, api] = useSpring(() => ({ x: START_X, y: 0 }));

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ down, movement: [mx, my] }) => {
        api.start({ x: down ? mx : START_X, y: down ? my : 0 });
    });

    // Bind it to a component
    return <animated.div 
        className="block"
        style={{ 
            x,
            y,
            '--size': `${BLOCK_SIZE}px`,
        }}
        {...bind()} 
    />;
}

export default App;
