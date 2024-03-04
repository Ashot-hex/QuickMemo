import { CommentedVideo } from "./CommentedVideo";

/** Commentaire d'un utilisateur */
export class Comment{
    private content: string;
    private video: CommentedVideo;

    /** Contenu du commentaire */
    public get Content(): string{ return this.content; }

    /** Lien de la vidéo commentée avec le timestamp */
    public get Link(): string{ return this.video.FullLink; }

    /**
     * Contructeur par defaut
     * @param content contenu du commentaire
     * @param video video commentée
     */
    public constructor(content: string, video: CommentedVideo) {
        this.content = content;
        this.video = video;
    }
}