import { CardStatus } from "@b1-types/card-status.type";
import { CardType } from "@b1-types/card-type.type";
import { PlasticStatus } from "@b1-types/plastic-status.type";

export interface CardDetails {
    id: string;
    accountId: number;
    accountNumber: string;
    availableAmount: number;
    bankId: string;
    currency: string;
    depositAmount: string;
    expired: string;
    fullNameEng: string;
    holdAmount: number;
    isAbleToReissue: boolean;
    isStatementFree: boolean;
    name: string;
    number: string;
    plasticStatus: PlasticStatus;
    statementTypeList: string[];
    status: CardStatus;
    type: CardType;
}