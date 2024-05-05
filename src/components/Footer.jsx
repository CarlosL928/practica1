import { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props)
    this.props = props;
  }
  render() {
    return (
        <div>
      <div className="F1">
        <h2>{this.props.titulo}</h2>
        <h3>{this.props.subtitulo}</h3>
      </div>

      <div className="F2">
        <h2>{this.props.titulo2}</h2>
        <h3>{this.props.subtitulo2}</h3>
      </div>

      <div className="F3">
        <h2>{this.props.titulo3}</h2>
        <h3>{this.props.subtitulo3}</h3>
      </div>

      </div>
    );
  }
}

export default Footer;
