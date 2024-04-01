import { Displayable } from "./Displayable";

/**
 * Interface for all features to be accessed by the user
 */
export abstract class Feature implements Displayable {
    /** Starts up the feature */
    public abstract StartUp(): void;
    /** Feature's name */
    public abstract get Name(): string;
    public abstract get Preview(): HTMLElement;
    public abstract get Display(): HTMLElement;
}