import React from 'react'
import { Input } from 'semantic-ui-react'

const dataList = () => (
  <div>
    <Input list='languages' placeholder='Choose language...' />
    <datalist id='languages'>
      <option value='English'>English</option>
      <option value='Spanish'>Spanish</option>
      <option value='German'>German</option>
    </datalist>
  </div>
)

export default dataList