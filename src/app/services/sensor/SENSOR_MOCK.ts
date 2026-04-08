import { SensorModel, SensorType } from "../../models/sensor.model";

export const SENSOR_MOCK: SensorModel[] = [
  {
    id: '1',
    name: 'Umidade do Ar',
    type: SensorType.AIR_HUMIDITY,
    position: 'Campo A',
    areaId: 'area1',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z'
  },
]