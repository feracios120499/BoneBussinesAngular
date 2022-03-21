import { CardStatus } from "@b1-types/card-status.type";
import { CardType } from "@b1-types/card-type.type";
import { PlasticStatus } from "@b1-types/plastic-status.type";

export interface AccountCard {
    accountNumber: string;
    expired: string;
    fullNameEng: string;
    id: string;
    isAbleToReissue: boolean;
    name: string;
    number: string;
    plasticStatus: PlasticStatus;
    status: CardStatus;
    type: CardType;
}