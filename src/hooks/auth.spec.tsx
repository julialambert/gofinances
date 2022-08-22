import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import fetchMock from 'jest-fetch-mock';
import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './auth';

// Ativa o uso do fetch mock
fetchMock.enableMocks();

// Define uma resposta padrão para o response do fetch
fetchMock.mockResponse(
  JSON.stringify({
    id: 'test-id',
    given_name: 'John Doe',
    email: 'any@email.com',
    picture: 'any.png',
  }),
);

// Mock do Async Storage presente na documentação da @react-native-async-storage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock Auth Session do expo-auth-session
jest.mock('expo-auth-session', () => ({
  startAsync: () => ({
    type: 'success',
    params: { access_token: 'test-token' },
  }),
}));

describe('Auth Hook', () => {
  it('should be able to sign in with existing Google account', async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(async () => {
      await result.current.signInWithGoogle();
    });
    expect(result.current.user.email).toBe('any@email.com');
  });
});