import { Feature } from "../model/Feature"

/**
 * Controller for the Panel
 */
export class PanelController {
    private features: { [key: string]: Feature };

    /**
     * Default constructor
     */
    public constructor() {
        this.features = {};
    }
    /**
     * Adds a Feature to the known Features' list
     * @param f Feature to add
     * @throws Error ("Duplicate key") If there are features with the same name added 
     */
    public Add(f: Feature): void {
        if (Object.keys(this.features).includes(f.Name)) throw new Error("Duplicate key");

        this.features[f.Name] = f;
    }

    /**
     * Gets a Feature from the known Features' list
     * @param name name of the requested Feature
     * @returns Corresponding Feature
     * 
     * @throws Error ("Unknown key") If the requested feature is unknown
     */
    public Get(name: string): Feature {
        if (!Object.keys(this.features).includes(name)) throw new Error("Unknown key");

        return this.features[name];
    }

    /**
     * gets the previews of the listed Features
     */
    public get Previews(): HTMLElement[] {
        const ret: HTMLElement[] = [];

        for (const key of Object.keys(this.features)) {
            ret.push(
                this.features[key].Preview
            )
        }

        return ret;
    }
}