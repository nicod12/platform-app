export const url = "http://localhost:3001/api/users";

interface User {
  username: string;
  email: string;
  password: string;
}
export async function regUser(user: User): Promise<User> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      if (response.status === 422) {
        const errorData = await response.json();
        console.error('Validation error:', errorData);
        throw new Error(`Validation error: ${JSON.stringify(errorData)}`);
      } else {
        console.error('HTTP error! status:', response.status);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    const data = await response.json();
    console.log('User created:', data);
    return data as User;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}