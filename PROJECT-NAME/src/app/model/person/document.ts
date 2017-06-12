export class Document{
  id: string;
  description: string;
  shortDescription: string;
  type: number;//numeric or alphanumeric
  taxpayer_type: number;//only national, only internationarl or international and national
  exact_length: boolean;
}
