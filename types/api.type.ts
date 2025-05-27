export interface ApiResponse<T = any> {
  path?: string;
  timestamp?: string;
  responseTime?: string;
  statusCode?: number;
  success?: boolean;
  data?: T;
  error?: ApiErrorResponse;
}

export interface ApiErrorResponse {
  type?: string;
  message?: string;
  errors?: Record<string, any>;
}
