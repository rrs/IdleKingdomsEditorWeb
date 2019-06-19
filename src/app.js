import React, { Component } from 'react';
import { render } from 'react-dom';
import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils } from 'react-hexgrid';
import './app.css';
import ElementPan from './element-pan'

const config = {
	"width": 800,
	"height": 800,
	"layout": { "width": 6, "height": 6, "flat": false, "spacing": 1.02 },
	"origin": { "x": 0, "y": 0 },
	"map": "hexagon",
	"mapProps": [ 4 ]
}


class App extends Component {
  constructor(props) {
    super(props);
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.state = { hexagons, config };
  }

  changeType(event) {
    const name = event.currentTarget.value;
    const config = configs[name];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.setState({ hexagons, config });
  }

  render() {
    const { hexagons, config } = this.state;
    const layout = config.layout;
    const size = { x: layout.width, y: layout.height };
    return (
      <div className="App">
      <ElementPan>
      	<HexGrid width={config.width} height={config.height}>
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {
              hexagons.map((hex, i) => (
                <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s}>
                  <Text>{HexUtils.getID(hex)}</Text>
                </Hexagon>
              ))
            }
          </Layout>
        </HexGrid>
      </ElementPan>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));