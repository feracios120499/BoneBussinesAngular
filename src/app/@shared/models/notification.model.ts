export interface TextItem {
    Id: number;
    Title: string;
    Text: string;
    Type: string;
}

export interface Notification {
    MessageDevices: any[];
    TextItem: TextItem;
    Id: number;
    UserId: string;
    TextItemId: number;
    SendDate: Date;
    IsRead: boolean;
    Redirect?: any;
    Lang: string;
}
