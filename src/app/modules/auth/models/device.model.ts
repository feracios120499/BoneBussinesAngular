import { Browsers } from './browser.type';

export interface Device {
    applicationId: string;
    deviceModel: Browsers;
    applicationVersion: string;
    os: string;
    uuid: string;
    osVersion: string;
}
