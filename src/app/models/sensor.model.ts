export enum SensorType {
  TEMPERATURE = 'Temperatura',
  AIR_HUMIDITY = 'Umidade do ar',
  SOIL_HUMIDITY = 'Umidade do solo',
  LIGHT = 'Luminosidade',
}

export interface SensorModel {
  id: string;
  name: string;
  type: SensorType;
  min: number;
  max: number;
  position: string;
  areaId: string;
  isActive: boolean;
  createdAt: string;
}