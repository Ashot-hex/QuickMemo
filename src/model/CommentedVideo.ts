
/**
 * Vidéo commentée par l'utilisateur
 */
export class CommentedVideo{
    
    private link: string;
    /**Lien de la vidéo */
    public get Link(): string { return this.link; }
    
    private timestamp: number;
    /**Moment où le commentaire a été fait sur la vidéo, en secondes depuis le début */
    public get Timestamp(): number { return this.timestamp; }

    public constructor(link: string, timestamp: number){
        this.link = link;
        this.timestamp = timestamp;
    }
}