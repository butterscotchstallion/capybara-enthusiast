import './App.scss';

function App() {
  return (
    <>
      <div className='container is-max-desktop'>
        <header className='wrapper'>
          <div className='grid-item'>
            <h1 className='is-size-1'>Capybara Enthusiast</h1>
          </div>
          <div className='header-button-area grid-item'>
            <div className='button-wrapper'>
              <button className='button is-success'>
                <i className='fas fa-lock'></i> Login
              </button>
              <button className='button is-success last'>
                <i className='fas fa-add'></i> Sign Up
              </button>
            </div>
          </div>
        </header>

        <div className='wrapper'>
          <div className='grid-item'>
            <section className='table-of-contents'>
              <div className=''>
                <h3>Table of contents</h3>
                <ol>
                  <li>
                    <a href='#basic'>About</a>
                  </li>
                  <li>
                    <a href='#ecology'>Ecology</a>
                  </li>
                  <li>
                    <a href='#facts'>Facts</a>
                  </li>
                </ol>
              </div>
            </section>
          </div>

          <div className='mailing-list-area-wrapper'>
            <section className='mailing-list-area'>
              <form>
                <label htmlFor='email-address'>Email address</label>
                <input
                  type='email'
                  className='input'
                  id='email-address'
                  placeholder='user@example.com'
                />
                <button className='button is-info'>
                  Sign Up For Capybara Facts!
                </button>
              </form>
            </section>
          </div>
        </div>

        <section className='wrapper' id='basic'>
          <article className='capy-facts-area grid-item'>
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

          <figure className='capy-figure grid-item'>
            <img src='/images/capybara-mexican.jpg' alt='Capybara español' />
            <figcaption>Capybara español</figcaption>
          </figure>
        </section>

        <section className='wrapper' id='ecology'>
          <article className='capy-facts-area grid-item'>
            <h2>Ecology</h2>
            Its common name is derived from Tupi ka'apiûara, a complex
            agglutination of kaá (leaf) + píi (slender) + ú (eat) + ara (a
            suffix for agent nouns), meaning "one who eats slender leaves", or
            "grass-eater". The scientific name, both hydrochoerus and
            hydrochaeris, comes from Greek ὕδωρ (hydor "water") and χοῖρος
            (choiros "pig, hog")
          </article>
          <figure className='capy-figure grid-item'>
            <img
              src='/images/Yellow-headed_caracara_(Milvago_chimachima)_on_capybara_(Hydrochoeris_hydrochaeris).JPG'
              alt='Yellow-headed caracara on a capybara'
            />
            <figcaption>Yellow-headed caracara on a capybara</figcaption>
          </figure>
        </section>

        <section className='wrapper' id='facts'>
          <article className='capy-facts-area grid-item'>
            <h2>Facts</h2>
            <ul>
              <li>World's biggest rodent</li>
              <li>Capybara are closely related to guinea pigs.</li>
              <li>They are semi-aquatic mammals.</li>
            </ul>
          </article>
          <figure className='capy-figure grid-item'>
            <img src='/images/capybara-3.jpg' alt='Capybara family' />
            <figcaption>Capybara family</figcaption>
          </figure>
        </section>
      </div>
    </>
  );
}

export default App;
