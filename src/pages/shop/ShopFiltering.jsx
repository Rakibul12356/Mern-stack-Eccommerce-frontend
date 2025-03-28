import React from 'react';

const ShopFiltering = ({ filters, filtersState, setFiltersState, clearFilters }) => {
    return (
        <div className='space-y-5 flex-shrink-0'>
            <h3>Filters</h3>
            {/**category */}
            <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Category</h4>
                <hr />
                {
                    filters.categories.map((category) => (
                        <label key={category} className='capitalize cursor-pointer '>
                            <input type="radio" name="category" id="category"
                                value={category}
                                checked={filtersState.category === category}
                                onChange={(e) => setFiltersState({
                                    ...filtersState, category: e.target.value
                                }
                                )
                                }
                            />
                            <span className='ml-1'>{category}</span>
                        </label>
                    )
                    )
                }

            </div>
             {/**color*/}
             <div className='flex flex-col space-y-2'>
                <h4 className='font-medium text-lg'>Colors</h4>
                <hr />
                {
                    filters.colors.map((color) => (
                        <label key={color} className='capitalize cursor-pointer '>
                            <input type="radio" name="category" id="category"
                                value={color}
                                checked={filtersState.color === color}
                                onChange={(e) => setFiltersState({
                                    ...filtersState, color: e.target.value
                                }
                                )
                                }
                            />
                            <span className='ml-1'>{color}</span>
                        </label>
                    )
                    )
                }

            </div>
        </div>
    );
};

export default ShopFiltering;