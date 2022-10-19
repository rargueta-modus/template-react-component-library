import React, { useCallback, useEffect, useState } from 'react';
import styles from './Grid.module.scss';
import { classNames } from '../../utils';

/**
 * The Grid Component is used as a container to set the size of the grid template.
 *
 * To enable the grid debugger overlay, press `Ctrl` + `Shift` + `G`
 *
 * @example
 *  <Grid sm={6} lg={12}>
 *      <GridColumn colSpan={{ sm: 2, lg: 4 }}>Col 1</GridColumn>
 *      <GridColumn colSpan={{ sm: 2, lg: 4 }}>Col 2</GridColumn>
 *      <GridColumn colSpan={{ sm: 2, lg: 4 }}>Col 3</GridColumn>
 *  </Grid>
 */

export interface GridProps {
    col: {
        sm: number,
        lg: number,
    },
    row: {
        sm: number,
        lg: number,
    }
    debugMode?: boolean,
    addClassName: string,
    children: React.ReactNode
}

const Grid: React.FunctionComponent<GridProps> = ({ debugMode, ...props }) => {
    const [debugEnabled, setDebugEnabled] = useState(false);

    /**
     * Callback for the keypress event listener, to enable/disable the debug mode
     * when the keyboard combination `Ctrl` + `Shift` + `G` is pressed
     */
    const debugListener = useCallback(
        (event: KeyboardEvent) => {
            const { ctrlKey, shiftKey, keyCode } = event;

            if (keyCode === 71 && ctrlKey && shiftKey) {
                setDebugEnabled(!debugEnabled);
            }
        },
        [debugEnabled, setDebugEnabled],
    );

    /**
     * Hook to add an keypress event listener to dynamically set the value
     * via the keyboard press combo `Ctrl` + `Shift` + `G`
     */
    useEffect(() => {
        document.addEventListener('keydown', debugListener);

        return () => {
            document.removeEventListener('keydown', debugListener);
        };
    }, [debugListener]);


    const style = {
        '--colSm': props.col.sm,
        '--colLg': props.col.lg,
        '--rowSm': props.row.sm,
        '--rowLg': props.row.lg,
    } as React.CSSProperties;

    return (
        <div
            className={classNames(
                styles.grid,
                debugEnabled && styles['grid-debug'],
                props.addClassName,
            )}
            style={style}
        >
            {props.children}
        </div>
    );
};



export default Grid;
