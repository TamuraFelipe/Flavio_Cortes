/* Layout imports */
import Header from "../../components/layout/Header";

const Home = () => {
  return (
    <div className="h-screen w-screen overflow-x-auto scroll-smooth space-y-8">
      <Header />

      <main className="space-x-8">
        <p>content</p>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Home;
