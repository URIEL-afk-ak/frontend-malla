import { useState } from 'react';

export function useToast() {
  const [toast, setToast] = useState(null);
  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };
  const Toast = () => toast ? (
    <div className={`fixed top-4 right-4 px-4 py-2 rounded shadow text-white z-50 ${toast.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>{toast.msg}</div>
  ) : null;
  return { showToast, Toast };
}
