```bash
npx create-next-app@latest my-nextjs --typescript
cd my-nextjs
```

### Install Dependencies
If you need to install any additional dependencies, you can do so with:

```bash
npm install
```

### Create Simple API Route
Create a file named `hello.ts` in the `pages/api` directory.

```typescript
// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hello World!' });
}
```

### Create a Simple Home Page
Modify the `index.tsx` file in the `pages` directory.

```typescript
// pages/index.tsx
import React from 'react';

const Home: React.FC = () => {
  const [message, setMessage] = React.useState('');

  const fetchMessage = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    setMessage(data.message);
  };

  React.useEffect(() => {
    fetchMessage();
  }, []);

  return (
    <div>
      <h1>Welcome to My Next.js Application</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
```

### Start the Development Server
Run your application using:

```bash
npm run dev
```

### Accessing the Application
Visit `http://localhost:3000` in your browser to see your "Hello World!" message. The API route can be accessed at `http://localhost:3000/api/hello`.