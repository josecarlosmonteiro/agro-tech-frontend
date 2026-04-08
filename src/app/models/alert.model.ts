export enum AlertStatus {
  ACTIVE = 'ACTIVE',
  RESOLVED = 'RESOLVED',
}

export interface AlertModel {
  id: string;
  sensorId: string;
  ruleId: string;
  value: number;
  message: string;
  status: AlertStatus;
  triggeredAt: string;
  resolvedAt: string | null;
}
