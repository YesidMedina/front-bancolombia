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
  type_configuration: string;
  item_configuration: string;
  alert_generation: string;
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
  details: string;
  spectrum: string;
  maintenance: boolean;
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
export interface Job {
  id:number;
  isiries:string;
  job:string;
  subsistem:string;
  instances:string;
  instances_affectation:string;
  name_menu:string;
  group_rise:string;
  id_divice:string;
  menu_chksys:string;
  maintenance:boolean;
  status:boolean;
  order_oc:string;
  updated_at:string
}