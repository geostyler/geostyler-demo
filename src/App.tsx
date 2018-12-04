import * as React from 'react';

import 'antd/dist/antd.css';

import {
  Form,
  LocaleProvider,
  Radio,
  Switch
} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

import { Locale } from 'antd/lib/locale-provider/index';
import * as moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/es';

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
import FormItem from 'antd/lib/form/FormItem';

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
  style: GsStyle;
  data?: GsData;
  locale: AppLocale;
  compact: boolean;
  ruleRendererType?: 'SLD' | 'OpenLayers',
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      locale: GsLocale.en_US,
      compact: true,
      ruleRendererType: 'SLD',
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

  onLangChange = (e: any) => {
    switch (e.target.value) {
      case 'en':
        moment.locale('en');
        this.setState({locale: GsLocale.en_US});
        break;
      case 'de':
        moment.locale('de');
        this.setState({locale: GsLocale.de_DE});
        break;
      case 'es':
        moment.locale('es');
        this.setState({locale: GsLocale.es_ES});
        break;
      default:
        moment.locale('en');
        this.setState({locale: GsLocale.en_US});
        break;
    }
  }

  onRuleRendererChange = (e: any) => {
    const ruleRendererType = e.target.value;
    this.setState({ruleRendererType});
  }

  onCompactSwitchChange = (compact: boolean) => {
    this.setState({compact});
  }

  public render() {
    const {
      locale,
      style,
      data,
      compact,
      ruleRendererType
    } = this.state;
    return (
      <div className="App">
        <LocaleProvider locale={locale}>
          <div>
            <header className="gs-header">
              <h1 className="App-title">GeoStyler</h1>
            </header>
            <Form layout="inline" className="gs-settings">
              <Form.Item label="Language">
                <RadioGroup
                  className="language-select"
                  onChange={this.onLangChange}
                  defaultValue="en"
                >
                  <RadioButton value="en">EN</RadioButton>
                  <RadioButton value="de">DE</RadioButton>
                  <RadioButton value="es">ES</RadioButton>
                </RadioGroup>
              </Form.Item>
              <Form.Item label="Compact">
                <Switch
                  checked={compact}
                  onChange={this.onCompactSwitchChange}
                />
              </Form.Item>
              <Form.Item label="Symbolizer Renderer">
                <RadioGroup
                  className="language-select"
                  onChange={this.onRuleRendererChange}
                  value={ruleRendererType}
                >
                  <RadioButton value="OpenLayers">OpenLayers</RadioButton>
                  <RadioButton value="SLD">SLD</RadioButton>
                </RadioGroup>
              </Form.Item>
              <Form.Item>
                <StyleLoader
                  parsers={[
                    SldStyleParser
                  ]}
                  onStyleRead={(style: GsStyle) => {
                    this.setState({style});
                  }}
                />
              </Form.Item>
              <Form.Item>
                <DataLoader
                  parsers={[
                    GeoJsonParser,
                    GeoWfsParser
                  ]}
                  onDataRead={(data: GsData) => {
                    this.setState({data});
                  }}
                />
              </Form.Item>
            </Form>
            <div className="main-content">
              <div className="gui-wrapper">
                <h2>Graphical Editor</h2>
                <Style
                  style={style}
                  data={data}
                  onStyleChange={(style: GsStyle) => {
                    this.setState({style});
                  }}
                  compact={compact}
                  ruleRendererType={ruleRendererType}
                  sldRendererProps={{
                    wmsBaseUrl: 'https://ows.terrestris.de/geoserver/wms',
                    layer: 'terrestris:bundeslaender'
                  }}
                />
              </div>
              <div className="editor-wrapper">
                <h2>Code Editor</h2>
                <CodeEditor
                  style={style}
                  parsers={[
                    SldStyleParser
                  ]}
                  defaultParser={SldStyleParser}
                  onStyleChange={(style: GsStyle) => {
                    this.setState({style});
                  }}
                  showSaveButton={true}
                  showCopyButton={true}
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
