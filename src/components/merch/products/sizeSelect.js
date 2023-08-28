import React from 'react'

export const SizeSelect = (props) => {
  return (
    <div>
      <label>Size: </label>
      <select onChange={props.onSizeChange} defaultValue={props.size}>
        {props.inventory.small > 0 &&
          <option onChange={props.onSizeChange} value="small">Small</option>
        }
        {props.inventory.medium > 0 &&
          <option onChange={props.onSizeChange} value="medium">Medium</option>
        }
        {props.inventory.large > 0 &&
          <option onChange={props.onSizeChange} value="large">Large</option>
        }
        {props.inventory.xl > 0 &&
          <option onChange={props.onSizeChange} value="xl">XL</option>
        }
        {props.inventory.xxl > 0 &&
          <option onChange={props.onSizeChange} value="xxl">XXL</option>
        }
      </select>
      <br />
    </div>
  )
}
