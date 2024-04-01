import { PanelController } from "../controller/PanelController";

/**
 * Panel displaying all the features to the user
 */
export class Panel {
    private static readonly PANEL_ID = "#quick-memo-panel"
    
    private controller: PanelController;
    private parent: HTMLElement;

    /**
     * Default constructor
     * @param parent parent element for the display
     */
    public constructor(parent: HTMLElement) {
        this.controller = new PanelController();

        let p = document.createElement("div");
        p.id = Panel.PANEL_ID;
        parent.appendChild(p);

        this.parent = p
    }

    /**
     * Displays the panel as a child of the parent element
     */
    public Display(): void {
        this.controller
            .Previews
            .forEach(
                c => this.parent.appendChild(c)
            );
    }

    /**
     * Displays requested Feature in the panel
     * @param name Requested Feature's name
     */
    public DisplayFeature(name: string): void{
        const featureHTML: HTMLElement = this.controller.Get(name).Display;
        this.parent.innerHTML = featureHTML.outerHTML;
    }
}