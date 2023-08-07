import React, { useState } from 'react';
import './styles.css';

const Buttons = () => {
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        setQuantity(quantity + 1);
    }

    const handleMinusToCart = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }
    const handleRemoveToCart = () =>{
        setQuantity(0)
    }


    return (
        <div className='btnContainer'>
            <p>Quantity: {quantity}</p>
            <div className='btnCapsule'>
            <button type='button' className='btn addBtn' onClick={handleAddToCart}>+</button>
            <button type='button' className='btn minusBtn' onClick={handleMinusToCart}>-</button>
            <button type='button' className='btn minusBtn' onClick={handleRemoveToCart}>Remove</button>
            </div>
        </div>
    );
};

export default Buttons;
