export enum AlertStatus {
  ACTIVE = 'ativo',
  RESOLVED = 'resolvido',
}

export interface AlertModel {
  id: string;
  sensorId: string;
  message: string;
  justification?: string;
  status: AlertStatus;
  triggeredAt: string;
  resolvedAt: string | null;
}

export interface AlertDetails {
  id: string;
  message: string;
  justification?: string;
  areaName: string;
  sensorName: string;
  status: AlertStatus;
  triggeredAt: string;
  resolvedAt: string | null;
}
