export type TNotificationDialog = {
  title: string;
  description?: string;
}

export type TConfirmationDialog = TNotificationDialog & {
  isDanger?: boolean;
}