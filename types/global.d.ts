export {};

declare global {
    interface IPage {
        name: string;
        icon: React.ReactNode;
        path: string;
    }
}
