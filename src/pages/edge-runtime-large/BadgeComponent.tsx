import React from 'react'
import {  Badge, Flex} from '@radix-ui/themes'
const BadgeComponent = () => {
  return (
    <div>
        <Flex gap="2">
          <Badge color="orange">In progress</Badge>
          <Badge color="blue">In review</Badge>
          <Badge color="green">Complete</Badge>
        </Flex>
    </div>
  )
}

export default BadgeComponent