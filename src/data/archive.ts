export interface ArchiveItem {
  number: string
  title: string
  desc: string
  status: 'active' | 'pending' | 'reserved'
}

export const ARCHIVE_ITEMS: ArchiveItem[] = [
  { number: '001', title: 'THE VERTEBRA', desc: 'The first Tectonic Object.', status: 'active' },
  { number: '002', title: 'IN DEVELOPMENT', desc: 'The first Tectonic Object.', status: 'pending' },
  { number: '003', title: 'RESERVED', desc: 'The first Tectonic Object.', status: 'reserved' },
  { number: '004', title: 'MINIMAL CONTEXT', desc: 'The first Tectonic Object.', status: 'active' },
  { number: '005', title: 'IN DEVELOPMENT', desc: 'The first Tectonic Object.', status: 'pending' },
  { number: '006', title: 'RESERVED', desc: 'The first Tectonic Object.', status: 'reserved' },
]
