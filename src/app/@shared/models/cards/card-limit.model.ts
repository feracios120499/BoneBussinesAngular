import { LimitStatus } from "@b1-types/limit-status.type";
import { LimitType } from "@b1-types/limit-type.type";

export interface CardLimit {
    type: LimitType;
    isActive: boolean;
    status: LimitStatus;
    value: number;
}