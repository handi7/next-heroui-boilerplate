export interface ApiResponse<T = any, M = any> {
  path?: string;
  timestamp?: string;
  responseTime?: string;
  statusCode?: number;
  success?: boolean;
  data?: T;
  meta?: M;
  error?: ApiErrorResponse;
}

export interface ApiErrorResponse {
  type?: string;
  message?: string;
  errors?: Record<string, any>;
}
