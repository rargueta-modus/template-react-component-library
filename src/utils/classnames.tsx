/**
 * Conditionally returns a list of class names based on the value's truthyness
 *
 * @param  {(boolean | undefined | ?string)[]} classes - An array of class names to be joined together
 * @returns {string} - A string of joined class names
 *
 * @example
 *     classNames(true && 'foo', false && 'bar', 'baz', undefined && '') // => 'foo baz'
 */
export default function classNames(...classes: Array<any>) {
    return classes.filter(Boolean).join('  ');
}
