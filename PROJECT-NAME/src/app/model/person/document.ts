export class DocumentType {
  id: string;
  description: string;
  shortDescription: string;
  type: number; // numeric or alphanumeric
  taxpayer_type: number; // only national, only internationarl or international and national
  exact_length: boolean;
  _length: number;
  pattern?: string;
}
export class Document {
  documentType: DocumentType;
  documentNumber: string;
  valid?: boolean;
}
