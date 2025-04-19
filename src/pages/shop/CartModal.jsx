import React from 'react';

const CartModal = ({ products, isOpen, onClose }) => {
    return (
        <div className={`fixed z-[1000] inset-0 bg-black bg-opacity-80 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ transition: 'opacity 300ms' }}>
            <div className={`fixed right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{ transition: 'transform 300ms cubic-bezier(0.25,0.46,0.45,0.94' }}>
                <div className='p-4 mt-4'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-xl font-semibold'>Your Cart</h4>
                        <button
                            onClick={() => onClose()} className='text-gray-600 hover:text-gray-900'><i className="ri-xrp-line bg-black p-1 text-white"></i></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartModal;