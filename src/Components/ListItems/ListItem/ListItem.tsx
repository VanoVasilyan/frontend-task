import { memo } from 'react';
import { ListItemProps } from '../../../context/types';
import OvalImg from '../../../images/Oval.svg';

import './ListItem.css';

const ListItem = ({ type, title, name, image, created, viewed, info }: ListItemProps) => {
    return (
        <div className='itemBlock'>
            <picture>
                <source media='(max-width:1160px)' width={300} srcSet={image} />
                <source media='(max-width:980px)' width={280} srcSet={image} />
                <img src={image} alt='itemImg' />
            </picture>
            <p className='type'>{type}</p>
            <h2>{title}</h2>
            <p className='namePart'>
                <span className='name'>{name}</span>
                <img src={OvalImg} alt="OvalImg" />
                <span>{created}</span>
                <img src={OvalImg} alt="OvalImg" />
                <span>{viewed}</span>
            </p>
            <p className='info'>
                {info}
            </p>
        </div>
    )
}


export default memo(ListItem);