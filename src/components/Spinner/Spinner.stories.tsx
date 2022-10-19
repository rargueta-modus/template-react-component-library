import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from './Spinner';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Spinner',
    component: Spinner,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.decorators = [
    (Story) => (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <p style={{ margin: '1rem 0' }}>Small</p>
            <Story args={{ size: 'sm' }} />
            <p style={{ margin: '1rem 0' }}>Medium</p>
            <Story args={{ size: 'md' }} />
            <p style={{ margin: '1rem 0' }}>Large</p>
            <Story args={{ size: 'lg' }} />
            <p style={{ margin: '1rem 0' }}>X-Large</p>
            <Story args={{ size: 'xl' }} />
        </div>
    ),
]
Light.argTypes = {
    size: {
        control: false
    },
    delay: {
        control: false
    },
    isShowing: {
        control: false
    },
    theme: {
        control: false
    }
}

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.decorators = [
    (Story) => (
        <div style={{
            backgroundColor: '#2D3047',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <p style={{ margin: '1rem 0' }}>Small</p>
            <Story args={{ size: 'sm', theme: 'dark' }} />
            <p style={{ margin: '1rem 0' }}>Medium</p>
            <Story args={{ size: 'md', theme: 'dark' }} />
            <p style={{ margin: '1rem 0' }}>Large</p>
            <Story args={{ size: 'lg', theme: 'dark' }} />
            <p style={{ margin: '1rem 0' }}>X-Large</p>
            <Story args={{ size: 'xl', theme: 'dark' }} />
        </div>
    ),
]
Dark.argTypes = {
    size: {
        control: false
    },
    delay: {
        control: false
    },
    isShowing: {
        control: false
    },
    theme: {
        control: false
    }
}

export const Default = Template.bind({});
Default.argTypes = {
    isShowing: {
        defaultValue: true
    },
    delay: {
        options: [1000, 2000, 3000, 4000, 5000, 6000],
        control: { type: 'select' },
        defaultValue: 2000
    }
}