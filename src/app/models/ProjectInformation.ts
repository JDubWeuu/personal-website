export type ProjectInformationType = {
    name: string,
    content: string,
    techStack: string[],
    links?: {
        GitHub?: string,
        DevPost?: string,
        imageLink: string,
        videoLink?: string
    }
}