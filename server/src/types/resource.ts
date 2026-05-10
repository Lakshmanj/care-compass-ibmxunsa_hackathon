export interface Resource {
    id?: string;
    title: string;
    url: string;
    description: string;
    type: "article" | "video" | "tool" | "exercise" | "course" | "community";
    topics: string[];
    tags: string[];
    targetStates: string[];
    timeEstimate?: number;
    accessLevel: "low" | "med" | "high";
    credibilityLevel?: "low" | "med" | "high";
    embedding: number[];
}

export interface ResourceImpression {
    userId: string;
    resourceId: string;
    shownAt: Date;
    linkClickedByUser: boolean;
    userFavourited?: boolean;
    feedback?: "helpful" | "not_helpful";
}
