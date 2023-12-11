export interface Amm_cloud {
  id: number;
  id_user: number;
  tool: string;
  global_collection: string;
  filial: string;
  modulo: string;
  service_manager: string;
  sub_service: string;
  name_alert_back: string;
  name_alert: string;
  type_configuration: string;
  item_configuration: string;
  value_configuration: string;
  condition_alert: string;
  frequencie: string;
  alert_hours: string;
  major: string;
  critical: string;
  email: string;
  impact: string;
  details_query: string;
  reference_document: string;
  type_location: string;
  test_location: string;
  spectrum: string;
  status: boolean;
  maintenance: boolean;
  order_number_oc: string;
  state_newrelic: string;
  created_at: string
}

export interface Email {
  id: number;
  group_email: string;
  name: string;
  email_notification: string;
  order_oc: string;
}

export interface Synthetic {
  id: number;
  name_alert: string;
  item_configuration: string;
  passed: string;
  item_configuration_nqrl: string;
  value_item: string;
  major: string;
  critical: string;
  token: string;
  parameter_token: string;
  detail: string;
  status: boolean;
  order_oc: string;
  created_at: string
}
