import React, { memo } from 'react';
import { listItems } from '../../context/utils';

import './ListItems.css'
import ListItem from './ListItem/ListItem';

const ListItems = () => {
    return (
        <section>
            {listItems.map((item) => <ListItem key={item.id} {...item} />)}
        </section>
    )
}

export default memo(ListItems);
