import './App.scss';

function App() {
  return (
    <>
      <div className='container is-max-desktop'>
        <h1 className='is-size-1'>Capybara Enthusiast</h1>

        <section className='wrapper'>
          <article className='capy-facts-area'>
            The capybara or greater capybara (Hydrochoerus hydrochaeris) is a
            giant cavy rodent native to South America. It is the largest living
            rodent and a member of the genus Hydrochoerus. The only other extant
            member is the lesser capybara (Hydrochoerus isthmius). Its close
            relatives include guinea pigs and rock cavies, and it is more
            distantly related to the agouti, the chinchilla, and the nutria. The
            capybara inhabits savannas and dense forests, and lives near bodies
            of water. It is a highly social species and can be found in groups
            as large as 100 individuals, but usually live in groups of 10–20
            individuals. The capybara is hunted for its meat and hide and also
            for grease from its thick fatty skin. It is not considered a
            threatened species.
          </article>

          <figure className='capy-image'>
            <img src='/images/capybara-mexican.jpg' alt='Capybara' />
          </figure>
        </section>

        <section className='wrapper'>
          <article className='capy-facts-area'>
            <h2>Entymology</h2>
            Its common name is derived from Tupi ka'apiûara, a complex
            agglutination of kaá (leaf) + píi (slender) + ú (eat) + ara (a
            suffix for agent nouns), meaning "one who eats slender leaves", or
            "grass-eater". The scientific name, both hydrochoerus and
            hydrochaeris, comes from Greek ὕδωρ (hydor "water") and χοῖρος
            (choiros "pig, hog")
          </article>
          <figure className='capy-image'>
            <img src='/images/Yellow-headed_caracara_(Milvago_chimachima)_on_capybara_(Hydrochoeris_hydrochaeris).JPG' />
          </figure>
        </section>
      </div>
    </>
  );
}

export default App;
