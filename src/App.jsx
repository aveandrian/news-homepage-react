import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <img src="/assets/images/logo.svg" alt="Logo" className="logo"></img>
        <section className='main-section'>
          <img src='/assets/images/image-web-3-desktop.jpg'></img>
          <div className='main-section-descr'>
            <h1 className='main-section-title'>The Bright Future of Web 3.0?</h1>
            <div className='main-section-text-container'>
              <p className='main-section-text'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
              But is it really fulfilling its promise?</p>
              <button className='main-section-btn'>Read more</button>
            </div>
          </div>
        </section>
         <section className='new-section'>
          <h1 className='new-section-title'>New</h1> 
          <div className='new-article-container'>
            <h2 className='new-article-title'>Hydrogen VS Electric Cars</h2>
            <p className='new-article-descr'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <div className='divider'></div>
          </div>

          <div className='new-article-container'>
            <h2 className='new-article-title'>The Downsides of AI Artistry</h2>
            <p className='new-article-descr'>What are the possible adverse effects of on-demand AI image generation?</p>
            <div className='divider'></div>
          </div>

          <div className='new-article-container'>
            <h2 className='new-article-title'>Is VC Funding Drying Up?</h2>
            <p className='new-article-descr'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </section>
        
        <section className='topics-section'>
          <div className='topic-container topic-1'>
            <img src='/assets/images/image-retro-pcs.jpg' className='topic-img'></img>
            <div className='topic-descr-container'>
              <h1 className='topic-number'>01</h1>
              <h2 className='topic-title'>Reviving Retro PCs</h2>
              <p className='topic-descr'>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className='topic-container topic-2'>
            <img src='/assets/images/image-top-laptops.jpg' className='topic-img'></img>
            <div className='topic-descr-container'>
              <h1 className='topic-number'>02</h1>
              <h2 className='topic-title'>Top 10 Laptops of 2022</h2>
              <p className='topic-descr'>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className='topic-container topic-3'>
            <img src='/assets/images/image-gaming-growth.jpg' className='topic-img'></img>
            <div className='topic-descr-container'>
              <h1 className='topic-number'>03</h1>
              <h2 className='topic-title'>The Growth of Gaming</h2>
              <p className='topic-descr'>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </footer>
    </>
  )
}

export default App
