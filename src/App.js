import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Benvenuto!</h1>
        <p>Questa sarà la tua app per organizzare viaggi.</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
