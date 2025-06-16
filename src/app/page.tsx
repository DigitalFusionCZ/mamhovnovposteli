import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden" style={{ backgroundColor: '#2e1c0e' }}>
        <Image
          src="/coffee-beans.jpg" // Assuming you have an image at public/coffee-beans.jpg
          alt="Coffee beans"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute z-0 opacity-40"
        />
        <div className="relative z-10 text-center p-8 bg-black bg-opacity-30 rounded-lg">
          <h1 className="text-6xl font-bold mb-4 font-serif">Testovací Kavárna "U Kódu"</h1>
          <p className="text-2xl font-light italic">Nejlepší káva pro vaše bugy.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-white max-w-4xl mx-auto rounded-lg shadow-lg mt-[-50px] relative z-20">
        <h2 className="text-center text-4xl font-semibold mb-10 text-amber-900 font-serif">O Nás</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Vítejte v <span className="font-bold">Testovací Kavárně "U Kódu"</span>, místě, kde se moderní technologie snoubí s tradicí přípravy té nejlepší kávy. Naše kavárna je útočištěm pro vývojáře, programátory a všechny, kdo ocení šálek kvalitní kávy v inspirativním prostředí.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Věříme, že správná káva dokáže rozproudit ty nejlepší nápady a pomoct vyřešit i ty nejzapeklitější bugy. Přijďte se přesvědčit sami a nechte se unést vůní čerstvě pražené kávy a pohodovou atmosférou.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/coffee-making.jpg" // Assuming you have an image at public/coffee-making.jpg
              alt="Coffee making"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-amber-100 mt-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-semibold mb-12 text-amber-900 font-serif">Naše Služby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Čerstvá Káva</h3>
              <p className="text-gray-700">Široký výběr prémiových káv z celého světa, připravených s láskou našimi zkušenými baristy.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Pohodové Prostředí</h3>
              <p className="text-gray-700">Klidné a inspirativní prostředí ideální pro práci, studium nebo setkání s přáteli.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Rychlé Wi-Fi</h3>
              <p className="text-gray-700">Bezplatné a velmi rychlé Wi-Fi připojení pro všechny vaše online potřeby.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Pohodlné Sezení</h3>
              <p className="text-gray-700">Ergonomické židle a útulné koutky pro maximální komfort při práci i relaxaci.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Malé Občerstvení</h3>
              <p className="text-gray-700">Sladké i slané pochoutky, které se skvěle hodí ke kávě.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Pravidelné Akce</h3>
              <p className="text-gray-700">Workshopy, přednášky a setkání pro IT komunitu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-amber-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10 text-amber-900 font-serif">Kontakt</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            Máte dotaz nebo si chcete zamluvit místo? Neváhejte nás kontaktovat!
          </p>
          <a
            href="mailto:test@kavarna.cz"
            className="inline-block bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-xl shadow-lg hover:bg-amber-800 transition-colors duration-300"
          >
            test@kavarna.cz
          </a>
          <p className="text-gray-600 mt-8 text-sm">
            Testovací Kavárna "U Kódu" © {new Date().getFullYear()} Všechna práva vyhrazena.
          </p>
        </div>
      </section>
    </div>
  );
}
