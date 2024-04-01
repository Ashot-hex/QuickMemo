/**
 * Interface for all items to be displayed to the user
 */
export interface Displayable{
    /** gets the preview of the element */
    get Preview(): HTMLElement;
    /** gets the actual display of the element */
    get Display(): HTMLElement;
}