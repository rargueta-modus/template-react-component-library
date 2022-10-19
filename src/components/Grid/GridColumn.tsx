import React from 'react';
import classNames from '../../utils/classnames';
import styles from './Grid.module.scss';

export interface GridColumnProps {
    colSpan?: {
        sm: number,
        lg: number
    },
    colStart?: {
        sm: number,
        lg: number
    },
    rowSpan?: {
        sm: number,
        lg: number
    },
    rowStart?: {
        sm: number,
        lg: number
    },
    addClassName?: string,
    children?: React.ReactNode
}

/**
 * Returns a column/row position number value based on a string integer value
 * or `auto` if a string integer isn't defined
 * @param {string} position - Value to convert to a number
 * @returns {Number|string}
 */
const getStart = (position: any | undefined) =>
    isNaN(parseInt(position, 10)) ? 'auto' : parseInt(position, 10);

/**
 * The GridColumn Component is used as an element to span
 * and position itself on  a Grid component
 */
const GridColumn = (props: GridColumnProps) => {

    const style = {
        '--colStartSm': getStart(props?.colStart?.sm),
        '--colStartLg': getStart(props?.colStart?.lg),
        '--colSpanSm': props?.colSpan?.sm,
        '--colSpanLg': props?.colSpan?.lg,
        '--rowStartSm': getStart(props?.rowStart?.sm),
        '--rowStartLg': getStart(props?.rowStart?.lg),
        '--rowSpanSm': props?.rowSpan?.sm,
        '--rowSpanLg': props?.rowSpan?.lg,
    } as React.CSSProperties

    return (
        <div
            className={classNames(styles['grid-col'], props.addClassName)}
            style={style}
        >
            {props.children}
        </div>
    );
};

export default GridColumn;
