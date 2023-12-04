import { useSearchParams } from "react-router-dom";
import './Home.css'
import Lamp from './lantern.png';
import Diwalilamp from './diwali-lamp.webp';
import { useState } from "react";

const GREETING = [

  "पहीला दिवा 🪔आज लागला दारी सुखाची किरणे ✨ येई घरी पूर्ण होवो तुमच्या सर्व इच्छ दिपावलीच्या हार्दिक शुभेच्छा💐.",
  "दारी दिव्यांची आरास 🪔 अंगणी फुललेला सडा रांगोळीचा  खास ✨✨ आनंद बहरलेला सर्वत्र आणि हर्षलेले मन 🎆🎇आला आला दिवाळी सण 🪔 करा प्रेमाची उधळण…💐",
  "उत्कर्षाची वाट उमटली विरला गर्द कालचा काळोख…✨ क्षितिजावर पहाट🌄 उगवली घेऊनिया नवा उत्साह सोबत…🎆🎇 दीपावलीच्या हार्दिक शुभेच्छा…💐",
  "आनंदाचे गाणे गात दिवाळी येते अंगणात ✨✨  सुखाची मग होते बरसात ⛈🌧 तेजाची मिळते साथ 🤝🏼हि दिवाळी आनंदाची, सुखसमृध्दीची जावो 💐"

]


function Home() {

  const [SearchParams] = useSearchParams();

  const [to, setTo] = useState(SearchParams.get("to"));
  const [from, setFrom] = useState(SearchParams.get("from"));
  const [greetingnumber, setGreetingnumber] = useState(SearchParams.get("g") > GREETING.length ? 0 : SearchParams.get("g") || 0);
  const [themenumber, setThemenumber] = useState(SearchParams.get("t"));

  return (
    <div>
      <div className={`greetings-container ${`theme-${themenumber}`}`}>

        <img src={Lamp} className="diwali-lamp right-lamp" />
        <img src={Lamp} className="diwali-lamp left-lamp" />
        <br /><br /><br /><br />
        <h1> Dear {to}</h1>
        <p>
          {GREETING[greetingnumber]}
        </p>
        <br />
        <img src={Diwalilamp} className="lamp" />

        <h2><span className="from-text">From ~ {from}</span></h2>
        <br />
      </div>

      <input type='text'
        placeholder="To"
        className="input"
        value={to}
        onChange={(e) => {
          setTo(e.target.value)
        }} />


      <input type='text'
        placeholder="From"
        className="input"
        value={from}
        onChange={(e) => {
          setFrom(e.target.value)

        }} />

      <select
        className="input"
        value={greetingnumber}
        onChange={(e) => {
          setGreetingnumber(e.target.value)

        }}>
        <option value="0">Greeting 1</option>
        <option value="1">Greeting 2</option>
        <option value="2">Greeting 3</option>
        <option value="3">Greeting 4</option>
      </ select>

      <select
        className="input"
        value={themenumber}
        onChange={(e) => {
          setThemenumber(e.target.value)

        }}>
        <option value="0">none</option>
        <option value="1">Theme 1</option>
        <option value="2">Theme 2</option>
        <option value="3">Theme 3</option>
        <option value="4">Theme 4</option>
        <option value="5">Theme 5</option>
        <option value="6">Theme 6</option>
        <option value="7">Theme 7</option>
      </select>

      <p className="url">{import.meta.env.VITE_BASE_URL}http://localhost:5173/?to{to}&from={from}&g={greetingnumber}&t={themenumber}</p>

    </div>
  )
}

export default Home