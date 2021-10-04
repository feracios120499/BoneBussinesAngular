export interface TextItem {
    id: number;
    title: string;
    text: string;
    type: string;
}

export interface Notification {
    messageDevices: any[];
    textItem: TextItem;
    id: number;
    userId: string;
    textItemId: number;
    sendDate: Date;
    isRead: boolean;
    redirect?: any;
    lang: string;
}
