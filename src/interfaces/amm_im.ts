export interface Amm_im {
  alert_generation: string;
  alert_hours: string;
  baseline: string;
  critical: string;
  description: string;
  details: string;
  email: string;
  environment: string;
  filial: string;
  global_collection: string;
  ic_configuration: string;
  id: number;
  id_user: number | string;
  impact: string;
  intervalo: string;
  ip_divice: string;
  item_configuration: string;
  major: string;
  monitor_resource: string;
  name_device: string;
  order_number_oc: string;
  platform: string;
  rol: string;
  service_manager: string;
  service_optional: string;
  special_rule: string;
  spectrum_soi: string;
  status: boolean;
  maintenance: boolean;
  sub_service: string;
  tool: string;
  action: string,
  updated_at: string
}

export interface Email {
  id: number,
  group_email: string,
  name: string,
  email_notification: string,
  order_oc: string,
}
