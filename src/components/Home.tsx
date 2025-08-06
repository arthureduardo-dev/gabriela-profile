export const Home = () => {
  return (
    <section id="home" className="scroll-section">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-dark-purple to-accent-secondary p-1 shadow-2xl transition-all duration-500 hover:shadow-purple-500/50">
            <img
              src="https://pbs.twimg.com/media/Gwn1R2tXUAELGf8?format=jpg&name=large"
              alt="Foto de Gabriela Carrilho"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-2 tracking-wide">
          GABRIELA CARRILHO
        </h1>
        <p className="text-xl text-text-secondary tracking-wider uppercase">
          Criadora de Conteúdo Digital
        </p>
      </div>
    </section>
  );
};