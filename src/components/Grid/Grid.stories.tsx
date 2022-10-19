import React from 'react';
import '../../styles/main.scss';
import Grid from './Grid';
import GridColumn, { GridColumnProps } from './GridColumn';
import { ComponentStory } from '@storybook/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Grid',
    component: Grid,
    argTypes: {
        debugMode: {
            control: false,
            table: {
                disable: true,
            },
        },
    },
    subcomponents: { GridColumn },
};

/**
 * Helper function to iterate over an array of GridColumn prop objects
 * and create a GridColumn element for each object
 * @param {Array} columns - Collection of object with the shape of the GridColumn.propTypes
 * @returns An array of GridColumn components
 */
const getColumns = (columns: Array<GridColumnProps>) =>
    columns.map((item, idx) => (
        <GridColumn {...item} key={idx}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100px',
                    background: 'pink',
                }}
            >
                Col {idx + 1}
            </div>
        </GridColumn>
    ));

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => (
    <Grid {...args} debugMode={true} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: getColumns([
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
        { colSpan: { sm: 1, lg: 1 } },
    ]),
    col: {
        sm: 6,
        lg: 12,
    },
    row: {
        sm: 1,
        lg: 1,
    },
};

export const HalfColumns = Template.bind({});
HalfColumns.args = {
    children: getColumns([
        { colSpan: { sm: 3, lg: 6 } },
        { colSpan: { sm: 3, lg: 6 } },
    ]),
    col: {
        sm: 6,
        lg: 12,
    },
    row: {
        sm: 1,
        lg: 1,
    },
};

export const OneThirdColumns = Template.bind({});
OneThirdColumns.args = {
    children: getColumns([
        { colSpan: { sm: 2, lg: 4 } },
        { colSpan: { sm: 2, lg: 4 } },
        { colSpan: { sm: 2, lg: 4 } },
    ]),
    col: {
        sm: 6,
        lg: 12,
    },
    row: {
        sm: 1,
        lg: 1,
    },
};

export const MixedColumns = Template.bind({});
MixedColumns.args = {
    children: getColumns([
        { colSpan: { sm: 1, lg: 2 } },
        { colSpan: { sm: 2, lg: 4 } },
        { colSpan: { sm: 3, lg: 6 } },
    ]),
    col: {
        sm: 6,
        lg: 12,
    },
    row: {
        sm: 1,
        lg: 1,
    },
};

export const MixedRows = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MixedRows.args = {
    children: getColumns([
        {
            colSpan: { sm: 2, lg: 3 },
            rowSpan: { sm: 2, lg: 3 },
            rowStart: { sm: 1, lg: 1 },
        },
        {
            colSpan: { sm: 2, lg: 3 },
            rowSpan: { sm: 1, lg: 1 },
            rowStart: { sm: 2, lg: 2 },
        },
        {
            colSpan: { sm: 1, lg: 3 },
            colStart: { sm: 5, lg: 7 },
            rowSpan: { sm: 1, lg: 2 },
            rowStart: { sm: 1, lg: 1 },
        },
        {
            colSpan: { sm: 1, lg: 3 },
            colStart: { sm: 6, lg: 10 },
            rowSpan: { sm: 1, lg: 2 },
            rowStart: { sm: 2, lg: 2 },
        },
    ]),
    col: {
        sm: 6,
        lg: 12,
    },
    row: {
        sm: 2,
        lg: 3,
    },
};

export const ColumnPosition = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColumnPosition.args = {
    children: getColumns([
        { colSpan: { sm: 2, lg: 4 }, colStart: { sm: 2, lg: 3 } },
        { colSpan: { sm: 2, lg: 3 }, colStart: { sm: 2, lg: 9 } },
    ]),
    col: {
        sm: 6,
        lg: 12,
    },
    row: {
        sm: 1,
        lg: 1,
    },
};

export const RowPosition = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RowPosition.args = {
    children: getColumns([
        {
            colSpan: { sm: 2, lg: 4 },
            rowSpan: { sm: 1, lg: 1 },
            rowStart: { sm: 2, lg: 3 },
        },
        {
            colSpan: { sm: 2, lg: 4 },
            rowSpan: { sm: 1, lg: 2 },
            rowStart: { sm: 1, lg: 2 },
        },
        {
            colSpan: { sm: 2, lg: 4 },
            rowSpan: { sm: 2, lg: 3 },
            rowStart: { sm: 1, lg: 1 },
        },
    ]),
    col: {
        sm: 6,
        lg: 12,
    },
    row: {
        sm: 2,
        lg: 3,
    },
};

export const ComplexColumnsRows = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ComplexColumnsRows.args = {
    children: getColumns([
        {
            colSpan: { sm: 2, lg: 2 },
            colStart: { sm: 1, lg: 1 },
            rowSpan: { sm: 2, lg: 2 },
        },
        {
            colSpan: { sm: 2, lg: 3 },
            colStart: { sm: 3, lg: 4 },
            rowSpan: { sm: 1, lg: 1 },
            rowStart: { sm: 2, lg: 2 },
        },
        {
            colSpan: { sm: 2, lg: 3 },
            colStart: { sm: 5, lg: 9 },
            rowSpan: { sm: 2, lg: 3 },
        },
    ]),
    col: {
        sm: 6,
        lg: 12,
    },
    row: {
        sm: 2,
        lg: 3,
    },
};
