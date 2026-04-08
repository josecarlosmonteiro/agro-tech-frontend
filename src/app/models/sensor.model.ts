export enum SensorType {
  TEMPERATURE = 'TEMPERATURE',
  AIR_HUMIDITY = 'AIR_HUMIDITY',
  SOIL_HUMIDITY = 'SOIL_HUMIDITY',
  LIGHT = 'LIGHT',
}

export interface SensorModel {
  "id": string;
  "name": string;
  "type": SensorType;
  "position": string;
  "areaId": string;
  "isActive": boolean;
  "createdAt": string;
}