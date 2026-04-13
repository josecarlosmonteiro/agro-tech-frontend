import { SensorType } from '../models/sensor.model';

export const metricsMap: Record<SensorType, string> = {
  Luminosidade: 'lm',
  Temperatura: 'ºC',
  'Umidade do ar': '%',
  'Umidade do solo': '%',
};
