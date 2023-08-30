import 'bulma/css/bulma.css'; // we can import CSS files in JS files
// we don't need to assign whatever we are importing to a variable 
import ProfileCard from "./ProfileCard"; // when importing a js file, we don't need to add .js extension
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log(AlexaImage); // 4KB
console.log(CortanaImage);
// output: base 64 encoded format represents an entire image
console.log(SiriImage); //57KB, so it is treated as a separate file
// output: /static/media/siri.e6a70a555204b3a1f6f0.png
// this is only the path

// how to fetch data from an API?
// In this case we don't use import statement

function App() {

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            {/* <img src={AlexaImage} />
            <img src={SiriImage} /> */}
            {/* // <img src="https://i.wpimg.pl/720x408/i1.nocimg.pl/d14/200/30-dolina-malej-laki-rajska.jpg" /> */}

            <div className='container'>
                <section className='section'>
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard
                                image={AlexaImage}
                                title="Alexa"
                                handle="@alexa99"
                                description="Alexa is Amazon’s cloud-based voice service available on more than 100 million devices from Amazon and third-party device manufacturers. " />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                image={CortanaImage}
                                title="Cortana"
                                handle="@cortana33"
                                description="Cortana is Microsoft’s personal productivity assistant that helps you save time and focus attention on what matters most." />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                image={SiriImage}
                                title="Siri"
                                handle="@siri101"
                                description="Siri is Apple's virtual assistant for iOS, macOS and other devices that uses voice recognition and is powered by artificial intelligence." />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default App;

// Props system helps for customizing each component to render different elements

// We can use names for props whatever we want, but we should use the same name when we use the component

// To use CSS, there are two ways:
// 1. CSS library
// 2. writing custom CSS

// We can use CSS library like Bootstrap, Material UI, Semantic UI, Bulma, etc.
// Using library there are 4 ways:
// 1. Download the library and add it to the public folder and add link tag in index.html
// 2. Use CDN link to CSS hosted on CDN,
// 3. Download the CSS file, add it into src folder and import it in index.js
// 4. Use npm to install the library and import it in index.js (recommended)

// using mpn install bulma in terminal we install the library in the node_modules folder