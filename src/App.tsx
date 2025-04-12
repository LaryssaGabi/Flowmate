import { Header, Footer, Sidebar, Dashboard } from './components'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <Dashboard />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
