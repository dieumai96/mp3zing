import jwt_decode from 'jwt-decode';
export function loadUserData() {
  try {
    const serializedUserData = localStorage.getItem('jwt_token');
    const decoded = jwt_decode(serializedUserData);
    if (!decoded) return undefined;
    return decoded;
  } catch (error) {
    return undefined;
  }
}