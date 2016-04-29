export class MenuItem {
    id: number;
    title: string;
    href: string;

    constructor(id: number, title: string, href: string) {
        this.id = id;
        this.title = title;
        this.href = href;
    }
}