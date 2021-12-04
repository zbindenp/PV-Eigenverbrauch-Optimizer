import { Device } from "./device";

export interface HourValue {
    hour: number;
    yield: number; 
    consumption: number;
    devices: Device[];
}