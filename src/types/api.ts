export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  agentCount?: string;
  useCase?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}