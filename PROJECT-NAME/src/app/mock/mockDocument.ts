import { DocumentType } from 'app/model/person/document';
import { DocumentConstants } from 'app/config/constants';
export const DOCUMENTS: DocumentType[] = [
  {
    id: '1',
    description: 'LIBRETA ELECTORAL O DNI',
    shortDescription: 'L.E / DNI',
    type: 5,
    taxpayer_type: 0,
    exact_length: true,
    _length: 8,
    pattern: '[0-9]{8,8}'
  },
  {
    id: '4',
    description: 'CARNET DE EXTRANGERIA',
    shortDescription: 'C.E.',
    type: 0,
    taxpayer_type: 1,
    exact_length: false,
    _length: 12,
    pattern: '[0-9a-zA-Z]{1,12}'
  },
  {
    id: '6',
    description: 'REGISTRO UNICO CONTRIBUYENTE',
    shortDescription: 'RUC',
    type: 5,
    taxpayer_type: 0,
    exact_length: false,
    _length: 11,
    pattern: '[0-9]{11,11}'
  },
  {
    id: '7',
    description: 'PASAPORTE',
    shortDescription: 'P.S.',
    type: 0,
    taxpayer_type: 1,
    exact_length: false,
    _length: 12,
    pattern: '[0-9a-zA-Z]{1,12}'
  }
]
