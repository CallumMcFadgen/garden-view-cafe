//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
      <div>

        <Row>
          <Col className="image-col-banner">
            <img className="banner-image" src="./images/banners/banner-img.png" alt="homepage banner" />
            <h1 className="banner-text">Welcome</h1>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="image-col-portrait">
            <img className="image-medium-portrait" src="./images/medium-portrait/medium-wineglasses-image.png" alt="wineglass" />
          </Col>
          <Col xs="12" sm="12" md="12" lg="8" xl="8" className="text-col">
            <p className="regular-text"> 
              Ki ta Maui e kii ai, “Kaore au e whakahoha i a koutou, ka noho hei karetao noa iho, koinei taku whakapono ki a koutou.” Ko te whakautu o te tuakana, “Na to hiroki ka pohehe matou he kai noa iho ma nga ika”.
              Ka riri haere a Maui. “Maku e whai kaha, whai mana hei whakamana i ahau ano”, noku te mana hei whakaarahi i oku tuakana. Ka whakaritea e Maui he tatai hei whakamanahia i ona ake pukenga mo tenei mea te hii-ika. <br/><br/>
              I tetahi po i a Maui e noho tau ana, ka timatahia e Maui ki te rarangahia he rakau hii-ika. I a ia e rarangahia e waiatatia e Maui tetahi karakia tawhito hei whakakaha i te rakau hii-ika.I te mutunga o tona mahi, i tangohia he kauae raro na tona tupuna i a Murirangawhenua i hoatu ki a ia. I te atatu o te ata, i kawea e Maui tona rakau hii-ika, a, ka huna a Maui ki te kei o te waka o tona tuakana.<br/><br/>
              I nga tau maha kua pahure ake nei, ka taea tonu te kite i nga mahi kikino o nga tuakana penei i nga maunga, nga awa, koinei nga ahuatanga o Aotearoa whanaui. A, ka nohoia ki konei ko nga manu, nga hunga tangata me era mea katoa, ko te ingoa o tenei e kiia ai, ara ko Te Ika a Maui.
            </p>
          </Col>
        </Row>

        <Row>
        <Col xs="12" sm="12" md="12" lg="4" xl="4" className="quote-col">
            <p className="quote-text"> 
              I te hokinga mai a Maui me tona iwi, ka noho ohorere ratou, ka kii ratou, “Ko Maui te Rangatira mo nga mahi hii-ika.”<br/><br/>A ka kitekite ratou i nga mahi kikino o nga tuakana, ka noho riri etahi hunga, ka noho pouri etahi hunga i nga mahi whakakohuru a nga tuakana.
            </p>
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="text-col">
            <p className="regular-text">
              Ka kata nga tuakana! Engari kaore a Maui i whakarata i a ratou mahi whakatoi ki a ia, a, ka karakia a Maui. <br/><br/>
              Ka tohea ki uta te waka e nga tuakana, engari ahua rereke te ahua o te waka. Ka kii mai, “Kei te ahua taumaha te waka nei, kei te hoe tahi tatou, kao ranei?” Ka kii atu tetahi, “na to kaha kai i nga kumara te take” Ka kii atu tetahi ano, “Katia to korua mahi whakatoi”. <br/><br/>
              I to ratou taenga atu ki te wahi taunga ika, ka puta mai a Maui, aue ko te ohorere o ona tuakana! “He aha.” “He aha tau?” “To mahi hianga e Maui.” “Ko koe te take e kore ai matou e whiwhi ika ana, ko koe ke” <br/><br/>
              Ka kii atu ia ki ona tuakana, “purua a koutou toto koa ki taku rakau hii-ika?” Ka kata haere nga tuakana i te tono nei i a Maui, a, ka riri haere a Maui, ka patua ia ki tona ihu, ka rere iho ai te toto, ka taupokihia ki te kauae raro. Ka a Maui ki te kei o te waka, purua te rakau hii-ika ki a Tangaroa, ka tau te raro, a ka tangohia te rakau hii-ika e tetahi mea!
            </p>
          </Col>
          <Col xs="12" sm="12" md="12" lg="4" xl="4" className="image-col-portrait">
            <img className="image-medium-portrait" src="./images/medium-portrait/medium-frenchtoast-image.png" alt="frenchtoast" />
          </Col>
        </Row>
        
      </div>
    )
  }
}

ReactDOM.render(<HomePage />, document.querySelector('#root'));

export default HomePage;