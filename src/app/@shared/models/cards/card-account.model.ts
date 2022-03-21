import { AccountCard } from "./account-card.model";

export interface CardAccount {
    number: string;
    id: number;
    currency: string;
    cards: AccountCard[];
}

export interface UiCardAccount extends CardAccount {
    isOpen: boolean;
}