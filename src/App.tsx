import * as React from 'react';

import 'antd/dist/antd.css';

import {
  LocaleProvider,
  Radio
} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import { Locale } from 'antd/lib/locale-provider/index';
import * as moment from 'moment';
import 'moment/locale/de';

import {
  Style as GsStyle,
  StyleParser as GsStyleParser
} from 'geostyler-style';

import {
  Data as GsData
} from 'geostyler-data';

import GeoJsonParser from 'geostyler-geojson-parser';
import SldStyleParser from 'geostyler-sld-parser';
import GeoWfsParser from 'geostyler-wfs-parser';

import './App.css';

import {
  CodeEditor,
  DataLoader,
  locale as GsLocale,
  Style,
  StyleLoader
} from 'geostyler';

// i18n
export interface AppLocale extends Locale {
  graphicalEditor: string;
  codeEditor: string;
}

// default props
interface DefaultAppProps {
  styleParsers: GsStyleParser[];
}

// non default props
interface AppProps extends Partial<DefaultAppProps> {
}

// state
interface AppState {
  style?: GsStyle;
  data?: GsData;
  locale?: AppLocale;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      locale: GsLocale.en_US,
      style: {
        name: 'Demo Style',
        rules: [{
          name: 'Rule 1',
          symbolizers: [{
            kind: 'Mark',
            wellKnownName: 'Circle'
          }]
        }]
      }
    };
  }

  public static componentName: string = 'App';

  private onLangChange = (e: any) => {
    switch (e.target.value) {
      case 'en':
        moment.locale('en');
        this.setState({locale: GsLocale.en_US});
        break;
      case 'de':
        moment.locale('de');
        this.setState({locale: GsLocale.de_DE});
        break;
      default:
        moment.locale('en');
        this.setState({locale: GsLocale.en_US});
        break;
    }
  }

  public render() {
    const { locale } = this.state;
    return (
      <div className="App">
        <LocaleProvider locale={locale}>
          <div>
            <header className="gs-header">
              <RadioGroup
                className="language-select"
                onChange={this.onLangChange}
                defaultValue="en"
              >
                <RadioButton value="en">EN</RadioButton>
                <RadioButton value="de">DE</RadioButton>
              </RadioGroup>
              <h1 className="App-title">GeoStyler</h1>
            </header>
            <div className="settings">
              <StyleLoader
                parsers={[
                  SldStyleParser
                ]}
                onStyleRead={(style: GsStyle) => {
                  this.setState({style});
                }}
              />
              <DataLoader
                parsers={[
                  GeoJsonParser,
                  GeoWfsParser
                ]}
                onDataRead={(data: GsData) => {
                  this.setState({data});
                }}
              />
            </div>
            <div className="main-content">
              <div className="gui-wrapper">
                <h2>Graphical Editor</h2>
                <Style
                  style={this.state.style}
                  data={this.state.data}
                  onStyleChange={(style: GsStyle) => {
                    this.setState({style});
                  }}
                />
              </div>
              <div className="editor-wrapper">
                <h2>Code Editor</h2>
                <CodeEditor
                  style={this.state.style}
                  parsers={[
                    SldStyleParser
                  ]}
                  onStyleChange={(style: GsStyle) => {
                    this.setState({style});
                  }}
                />
              </div>
            </div>
          </div>
        </LocaleProvider>
      </div>
    );
  }
}

export default App;
