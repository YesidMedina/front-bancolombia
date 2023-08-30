export interface Amm_cloud {
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
  order_number_oc: string;
  state_newrelic: string;
}

export interface Email {
  id: number;
  group_email: string;
  name: string;
  email_notification: string;
  order_oc: string;
}
