export interface OrderSizes {
  length: string
  width: string
  height: string
  weight: string
  quantity: number
}

export interface SelectedCargo {
  id: number
  name: string
}

export interface OrderDate {
  type: "urgent" | "nonUrgent"
  urgentDate: string
  nonUrgentStartDate: string
  nonUrgentEndDate: string
}

export interface SelectedTransport {
  type: string
}

export interface OrderJson {
  fromAddress: string
  toAddress: string
  intermediatePoints: string[]
  sizes: OrderSizes
  selectedCargo: SelectedCargo[]
  selectedRate: string
  orderDate: OrderDate
  selectedTransport: SelectedTransport
  clientType: "natural" | "legal"
  inn: string
  name: string
  phoneNumber: string
  email: string
  showAdditionalFields: boolean
  showThirdStage: boolean
  isDoorModalOpen: boolean
  isKeyModalOpen: boolean
  sizesConfirmed: boolean
  transportConfirmed: boolean
}

export interface Order {
  id: number
  json: OrderJson
  status: string
  createdat: string
  isdeleted: boolean
}

export interface Pagination {
  totalpages: number
  currentpage: number
  itemsperpage: number
  totalitems: number
  offset: number
}

export interface OrdersResponse {
  status: string
  method: string
  data: Order[]
  pagination: Pagination
}

export interface OrdersErrorResponse {
  message: string
  error?: string
}
