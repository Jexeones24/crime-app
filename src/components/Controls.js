import React from 'react'

export const Controls = () => (
  <div className='sidebar-left'>
    <div className='checkboxes'>
  	  <label>Filter</label>
	    <input type='checkbox' className='regular-checkbox' />
	    <input type='checkbox' className='regular-checkbox' />
    	<input type='checkbox' className='regular-checkbox' />
    	<input type='checkbox' className='regular-checkbox' />
    </div>

    <div className='button-holder'>
      <label>Radio Small</label>
      <input type='radio' name='radio-1-set' className='regular-radio' />
      <input type='radio' name='radio-1-set' className='regular-radio' />
      <input type='radio' name='radio-1-set' className='regular-radio' />
      <input type='radio' name='radio-1-set' className='regular-radio' />
    </div>
  </div>
)
