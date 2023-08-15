import React from 'react'
import AlertComponent from './alertComponent'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import BadgeComponent from './BadgeComponent';
import CardComponent from './CardComponent';

export const runtime = 'edge'

const index = () => {
  return (
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <div className="p-5 flex flex-col space-y-5">
            <h1 className="text-3xl font-bold">Welcome to large component, tailwind & radix</h1>
            <div>
                    <p>
                        component 1
                    </p>
                    <AlertComponent></AlertComponent>
            </div>

            <div>
                <p>
                    component 2
                </p>
                <BadgeComponent></BadgeComponent>
            </div>
            <div>
                <p>
                    component 3
                </p>
                <CardComponent></CardComponent>
            </div>
        </div>
    </Theme>
  )
}

export default index