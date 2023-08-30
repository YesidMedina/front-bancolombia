export interface Amm_apm {
  id_user: number;
  id: number,
  global_collection: string;
  filial: string;
  service_manager: string;
  sub_service: string;
  gestor_broker: string;
  monitor_resource: string;
  description: string;
  environment: string;
  rol: string;
  name_device: string;
  ip_divice: string;
  type_confiduration: string;
  alert_generation: string;
  status_alert: string;
  metric_configuration: string;
  intervalo: string;
  alert_hours: string;
  major: string;
  pot_major: string;
  op_major: string;
  critical: string;
  pot_critical: string;
  op_critical: string;
  email: string;
  impact: string;
  special_rule: string;
  details: string;
  spectrum: string;
  status: boolean;
  order_number_oc: string;
}

export interface Email {
  id: number;
  group_email: string;
  name: string;
  email_notification: string;
  order_oc: string;
}
