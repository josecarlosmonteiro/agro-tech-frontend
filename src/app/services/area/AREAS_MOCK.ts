import { AreaModel } from "../../models/area.model";

export const AREAS_MOCK: AreaModel[] = [
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    name: 'Setor de Produção Norte',
    location: 'Pavilhão A - Piso 1',
    size: 150.5,
    userId: 'user-001',
    createdAt: '2024-01-15T08:30:00Z'
  },
  {
    id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
    name: 'Armazém Central',
    location: 'Zona Industrial Leste',
    size: 500.0,
    userId: 'user-001',
    createdAt: '2024-02-10T10:15:00Z'
  },
  {
    id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
    name: 'Laboratório de Qualidade',
    location: 'Bloco C - Sala 12',
    size: 45.2,
    userId: 'user-002',
    createdAt: '2024-03-05T14:20:00Z'
  },
  {
    id: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
    name: 'Área de Carga e Descarga',
    location: 'Pátio Externo 2',
    size: 275.8,
    userId: 'user-001',
    createdAt: '2024-03-20T09:00:00Z'
  },
  {
    id: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
    name: 'Escritório Administrativo',
    location: 'Edifício Central - Andar 3',
    size: 120.0,
    userId: 'user-003',
    createdAt: '2024-03-25T16:45:00Z'
  }
]