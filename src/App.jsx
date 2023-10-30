import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header
        title="Adopta un perrito"
      />
      <div id="cards">
        <MyCard
          image="https://images.pexels.com/photos/3726315/pexels-photo-3726315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Bartolo"
          description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          colorTags="success"
          textTags="Husky"
        />
        <MyCard
          image="https://media.istockphoto.com/id/93392743/es/foto/bobtail.jpg?s=612x612&w=0&k=20&c=3RvxzR_kp11bo5a2GTChfGnU90ybnIPjBfj46iPc8QI="
          title="Messi"
          description="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
          colorTags="primary"
          textTags="Bobtail"
        />
        <MyCard
          image="https://images.pexels.com/photos/12287391/pexels-photo-12287391.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Gohan"
          description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          colorTags="danger"
          textTags="Shar Pei"
        />
        <MyCard
          image="https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg"
          title="Princesa"
          description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          colorTags="warning"
          textTags="Beagle"
        />
      </div>
      <Footer />
    </>
  )
}

export default App
