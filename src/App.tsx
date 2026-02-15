import { Toaster } from 'react-hot-toast'
import { AppLayout } from '@/components/layout/AppLayout'

function App() {
  return (
    <>
      <AppLayout />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#fafafa',
            border: '1px solid #27272a',
          },
        }}
      />
    </>
  )
}

export default App
