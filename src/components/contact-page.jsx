// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'reactstrap';


// The contact page will hold a contact form, a maps plugin, biz info, etc.  
// I am just setting a page nav bar, page banner, placeholder text and a 
// footer.  Hopefully more content will be in soon.


class ContactPage extends Component {
  render() {
    return (
      <div>
       <Row>
          <Col className="image-col-banner">
            <img className="banner-image" src="./images/banners/banner-img.png" alt="contact page banner" />
            <h1 className="banner-text">Contact</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="coming-soon-heading">Page content coming soon</p>
            <br />
            <p className="coming-soon-text">Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tuakana ki te hii ika. I te hokinga mai o ona tuakana ki tatahi, ka kii atu a Maui, “ka taea e au te haramai i to koutou na taha ki te hii ika?” Engari, ko te whakautu o ona tuakana ki a ia ano, “Kao, he rangatahi noa iho koe. Kaore he wahi mau kei te waka nei, na reira me noho tau ki tatahi ke”.
               Ki ta Maui e kii ai, “Kaore au e whakahoha i a koutou, ka noho hei karetao noa iho, koinei taku whakapono ki a koutou.” Ko te whakautu o te tuakana, “Na to hiroki ka pohehe matou he kai noa iho ma nga ika”. Ka riri haere a Maui. “Maku e whai kaha, whai mana hei whakamana i ahau ano”, noku te mana hei whakaarahi i oku tuakana. Ka whakaritea e Maui he tatai hei whakamanahia i ona ake pukenga mo tenei mea te hii-ika. I tetahi po i a Maui e noho tau ana, ka timatahia e Maui ki te rarangahia he rakau hii-ika. I a ia e rarangahia e waiatatia e Maui tetahi karakia tawhito hei whakakaha i te rakau hii-ika. I te mutunga o tona mahi, i tangohia he kauae raro na tona tupuna i a Murirangawhenua i hoatu ki a ia. I te atatu o te ata, i kawea e Maui tona rakau hii-ika, a, ka huna a Maui ki te kei o te waka o tona tuakana.
             Ka tohea ki uta te waka e nga tuakana, engari ahua rereke te ahua o te waka. Ka kii mai, “Kei te ahua taumaha te waka nei, kei te hoe tahi tatou, kao ranei?” Ka kii atu tetahi, “na to kaha kai i nga kumara te take” Ka kii atu tetahi ano, “Katia to korua mahi whakatoi”. I to ratou taenga atu ki te wahi taunga ika, ka puta mai a Maui, aue ko te ohorere o ona tuakana! “He aha.” “He aha tau?” “To mahi hianga e Maui.” “Ko koe te take e kore ai matou e whiwhi ika ana, ko koe ke”</p>
          </Col>
        </Row>
      </div>
    )
  };
};

ReactDOM.render(<ContactPage />, document.querySelector('#root'));

export default ContactPage;