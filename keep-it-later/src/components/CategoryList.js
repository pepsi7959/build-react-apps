import React, { useContext } from 'react'
import styled from 'styled-components'
import '../category.css'

import { CategoryContext } from '../contexts'

const StyledCategoryItem = styled.li`
  display: inline-block;
  margin: 0.25em;
  padding: 0.5em 1em;
  border: 1px solid #343a40;
  border-radius: 0.25em;

  &:hover {
    color: red;
    border: 2px solid red;
    content: 'Remove';
    cursor: pointer;
    box-shadow: 2px 2px;
    &::after {
      padding-left: 0.7em;
      content: '🅧';
    }
  }
`

export const CategoryList = () => {
  const { categories } = useContext(CategoryContext)
  return (
    <div class='row' style={{ marginTop: '20px' }}>
      <div class='col'>
        <ul class=''>
          {categories.map((category) => {
            return <StyledCategoryItem key={category.id}>{category.name}</StyledCategoryItem>
          })}
        </ul>
      </div>
    </div>
  )
}
