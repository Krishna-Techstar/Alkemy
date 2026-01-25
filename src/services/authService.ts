const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export interface SignupData {
  name: string;
  collegeId: string;
  email: string;
  password: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    name: string;
  };
}

class AuthService {
  async signup(data: SignupData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Signup failed. Please try again.');
      }

      const result = await response.json();

      if (result.token) {
        localStorage.setItem('authToken', result.token);
      }

      return result;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Signup failed. Please try again.'
      );
    }
  }

  async signin(data: SigninData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Sign in failed. Please try again.');
      }

      const result = await response.json();

      if (result.token) {
        localStorage.setItem('authToken', result.token);
      }

      return result;
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Sign in failed. Please try again.'
      );
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export default new AuthService();
