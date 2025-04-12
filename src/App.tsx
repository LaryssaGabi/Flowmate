import { Footer, Sidebar, Dashboard } from './components'


function App() {
  return (
    <div >
      {/* <Header /> */}
      <div>
        <Sidebar />
        <main >
          <Dashboard />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
