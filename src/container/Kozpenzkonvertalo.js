import React, { Component } from "react";
import "./Kozpenzkonvertalo.css";
import ButtonWithInfo from "../component/ButtonWithInfo";

class KozpenzKonveralo extends Component {
  state = {
    currentAmount: null
  };

  priceButtonClicked = (amount) => {
    console.log(amount);

    this.setState({
      currentAmount: amount
    })
  };
  

  render() {
    return (
      <div className="Kozpenzkonvertalo">
        <h2>Közpénz konvertáló</h2>

        <p>
          Annyit hall a birkáktól, hogy{" "}
          <i>
            "Eltűnt 1-2 (ezer) milliárd? Há' mi aaaz? A gyerek is játszik néha
            biliárdot!"
          </i>{" "}
          Na, akkor segítek megérteni, mi az, amit kedves miniszteratyáink
          elherdálnak, csak annit kell tenned, hogy beikszeled, mit szeretnél
          venni ennyi pénzből. Az "ennyi pénzből" részben is tudok segíteni.
        </p>
        <div className="Fixdiv">
          <header>Ennyi járna nekem is!</header>
          <input
            className="NumberInput"
            type="number"
            placeholder="1 000 000 000"
            value = {this.state.currentAmount}
            
          />
          <ButtonWithInfo title="Leny&uacute;lt MANYUP (3000 Mrd Ft)" clicked={()=>this.priceButtonClicked(3000000000000)} />
          <ButtonWithInfo title="Questor &uuml;gy (150 Mrd ft)" clicked={this.priceButtonClicked} clicked={()=>this.priceButtonClicked(150000000000)}/>
          <ButtonWithInfo title="H&iacute;d a munka vil&aacute;g&aacute;ba (1,6 Mrd ft)" clicked={()=>this.priceButtonClicked(1600000000)}  />
        </div>
        <div className="Fixdiv2" />
      </div>
    );
  }
}

export default KozpenzKonveralo;
