import React from 'react'

import { AspectRatio, Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';

export const runtime = 'experimental-edge'

const index = () => {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <div className="p-5 flex flex-col space-y-5">
            <h1 className="text-3xl font-bold">Welcome to too large to deploy component, tailwind & radix</h1>
            <div>
                <AspectRatio ratio={16 / 8}>
                    <img
                        src="/images/1.jpg"
                        alt="A house in a forest"
                        style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'var(--radius-2)',
                        }}
                    />
                    </AspectRatio>
            </div>
            <div>
                <AspectRatio ratio={16 / 8}>
                    <img
                        src="/images/2.jpg"
                        alt="A house in a forest"
                        style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        borderRadius: 'var(--radius-2)',
                        }}
                    />
                    </AspectRatio>
            </div>
        </div>
    </Theme>
  )
}

export default index