import React from 'react';

import Abc from '../../hoc/Abc';
import classes from './Layout.css';
const layout = (props) => (
    <Abc>
        <div> Toolbar ,SideDrawer,Backdrop </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Abc>
);
export default layout;
