import * as React from 'react';

import {
  Radio,
  Switch,
  Button,
  Collapse,
  Form,
  notification
} from 'antd';
import ConfigProvider from 'antd/lib/config-provider';
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
import ShapefileParser from 'geostyler-shapefile-parser';
import WfsParser from 'geostyler-wfs-parser';

import {
  CodeEditor,
  DataLoader,
  locale as GsLocale,
  Style,
  StyleLoader,
  PreviewMap,
  GeoStylerLocale
} from 'geostyler';

import CardStyle from 'geostyler/dist/Component/CardStyle/CardStyle';

import logo from './assets/logo.svg';
import './App.css';
import ExamplesDialog from './ExamplesDialog';
import LegendRenderer from 'geostyler-legend/dist/LegendRenderer/LegendRenderer';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceTileWMS from 'ol/source/TileWMS';
import { fromLonLat } from 'ol/proj';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

// i18n
export interface AppLocale extends GeoStylerLocale {
  codeEditor: string;
  cardLayout: string;
  examples: string;
  graphicalEditor: string;
  language: string;
  legend: string;
  previewMap: string;
  loadedSuccess: string;
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
  locale: AppLocale & GeoStylerLocale;
  cardLayout: boolean;
  ruleRendererType?: 'SLD' | 'OpenLayers';
  examplesModalVisible: boolean;
}

class App extends React.Component<AppProps, AppState> {

  private _sldStyleParser = new SldStyleParser();

  private _sldStyleParserSE = new SldStyleParser({
    sldVersion: '1.1.0'
  });

  private _geoJsonParser = new GeoJsonParser();

  private _shapefileParser = new ShapefileParser();

  private _wfsParser = new WfsParser();

  constructor(props: AppProps) {
    super(props);
    this._sldStyleParserSE.title = 'SLD 1.1.0 - Symbology Encoding';
    this.state = {
      locale: {
        codeEditor: 'Code Editor',
        cardLayout: 'CardLayout (Beta)',
        examples: 'Examples',
        graphicalEditor: 'Graphical Editor',
        language: 'Language',
        legend: 'Legend',
        previewMap: 'Preview Map',
        loadedSuccess: 'Loaded successfully!',
        ...GsLocale.en_US
      },
      cardLayout: false,
      ruleRendererType: 'SLD',
      examplesModalVisible: false,
      style: {
        name: 'Demo Style',
        rules: [{
          name: 'Rule 1',
          symbolizers: [{
            kind: 'Mark',
            wellKnownName: 'square',
            color: '#93c0ed',
            strokeColor: '#1345c3',
            strokeWidth: 5,
            radius: 20
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
        this.setState({
          locale: {
            codeEditor: 'Code Editor',
            cardLayout: 'CardLayout (Beta)',
            examples: 'Examples',
            graphicalEditor: 'Graphical Editor',
            language: 'Language',
            legend: 'Legend',
            previewMap: 'Preview Map',
            loadedSuccess: 'Loaded successfully!',
            ...GsLocale.en_US
          }
        });
        break;
      case 'de':
        moment.locale('de');
        this.setState({
          locale: {
            codeEditor: 'Code Editor',
            cardLayout: 'CardLayout (Beta)',
            examples: 'Beispiele',
            graphicalEditor: 'Grafischer Editor',
            language: 'Sprache',
            legend: 'Legende',
            previewMap: 'Vorschau Karte',
            loadedSuccess: 'Erfolgreich geladen!',
            ...GsLocale.de_DE
          }
        });
        break;
      case 'es':
        moment.locale('es');
        this.setState({
          locale: {
            codeEditor: 'Editor de código',
            cardLayout: 'CardLayout (Beta)',
            examples: 'Ejemplos',
            graphicalEditor: 'Editor gráfico',
            language: 'Idioma',
            legend: 'Leyenda',
            previewMap: 'Mapa de previsualización',
            loadedSuccess: 'Cargado con éxito!',
            ...GsLocale.es_ES
          }
        });
        break;
      case 'fr':
        moment.locale('fr');
        this.setState({
          locale: {
            codeEditor: 'Éditeur de code',
            cardLayout: 'CardLayout (Beta)',
            examples: 'Exemples',
            graphicalEditor: 'Éditeur graphique',
            language: 'Langue',
            loadedSuccess: 'Chargement réussi!',
            legend: 'Légende',
            previewMap: 'Carte de prévisualisation',
            ...GsLocale.fr_FR
          }
        });
        break;
      case 'ch':
        moment.locale('zh-cn');
        this.setState({
          locale: {
            codeEditor: '代码编辑器',
            cardLayout: 'CardLayout (Beta)',
            examples: '例子',
            graphicalEditor: '图形编辑器',
            language: '语言',
            legend: 'Legend',
            previewMap: '预览图',
            loadedSuccess: '成功加载',
            ...GsLocale.zh_CN
          }
        });
        break;
      default:
        moment.locale('en');
          this.setState({
            locale: {
              codeEditor: 'Code Editor',
              cardLayout: 'CardLayout (Beta)',
              examples: 'Examples',
              graphicalEditor: 'Graphical Editor',
              language: 'Language',
              legend: 'Legend',
              previewMap: 'Preview Map',
              loadedSuccess: 'Loaded successfully!',
              ...GsLocale.en_US
            }
        });
        break;
    }
  }

  onRuleRendererChange = (e: any) => {
    const ruleRendererType = e.target.value;
    this.setState({ruleRendererType});
  }

  onCardLayoutSwitchChange = (cardLayout: boolean) => {
    this.setState({cardLayout});
  }

  onExamplesButtonClicked = () => {
    const {
      examplesModalVisible
    } = this.state;
    this.setState({
      examplesModalVisible: !examplesModalVisible
    });
  }

  onExampleSelected = (exampleStyle?: GsStyle) => {
    if (exampleStyle) {
      this.setState({
        examplesModalVisible: false,
        style: exampleStyle
      })
    } else {
      this.setState({
        examplesModalVisible: false
      });
    }
  }

  public render() {
    const {
      examplesModalVisible,
      locale,
      style,
      data,
      cardLayout,
      ruleRendererType
    } = this.state;

    const legendRenderer = new LegendRenderer({
      maxColumnWidth: 300,
      maxColumnHeight: 300,
      overflow: 'auto',
      styles: [style],
      size: [600, 300],
      hideRect: true
    });
    const legendEl = document.getElementById("legend");
    if (legendEl) {
      legendRenderer.render(legendEl);
    }

    const iconLibraryConfig = [{
      name: 'Traffic',
      icons: [{
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Parking_icon.svg/128px-Parking_icon.svg.png',
        caption: 'Parking'
      }, {
        src: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/RWB-RWBA_Autobahn.svg',
        caption: 'Highway'
      }]
    }, {
      name: 'GeoStyler',
      icons: [{
        src: 'https://raw.githubusercontent.com/geostyler/geostyler/master/public/logo.svg',
        caption: 'GeoStyler Logo'
      }]
    }];

    const map = new OlMap({
      layers: [
        new OlLayerTile({
          source: new OlSourceTileWMS({
            url: 'https://sgx.geodatenzentrum.de/wms_topplus_open',
            params: {
              'LAYERS': 'web'
            }
          })
        })
      ],
      target: 'map',
      view: new OlView({
        center: fromLonLat([-122.416667, 37.783333]),
        zoom: 12,
      }),
    });

    return (
      <ConfigProvider locale={locale}>
        <div className="app">
          <header className="gs-header">
            <span className="logo-title">
              <img className="logo" src={logo} alt="logo"/>
              <span className="app-title">GeoStyler</span>
            </span>
          </header>
          <div className="gs-settings">
            <Form layout="inline">
              <Form.Item label={locale.language}>
                <RadioGroup
                  className="language-select"
                  onChange={this.onLangChange}
                  defaultValue="en"
                >
                  <RadioButton value="en">EN</RadioButton>
                  <RadioButton value="de">DE</RadioButton>
                  <RadioButton value="es">ES</RadioButton>
                  <RadioButton value="fr">FR</RadioButton>
                  <RadioButton value="ch">中文</RadioButton>
                </RadioGroup>
              </Form.Item>
              <Form.Item label={locale.cardLayout}>
                <Switch
                  checked={cardLayout}
                  onChange={this.onCardLayoutSwitchChange}
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
                    this._sldStyleParser,
                    this._sldStyleParserSE
                  ]}
                  onStyleRead={(style: GsStyle) => {
                    notification.success({
                      message: locale.loadedSuccess
                    });
                    this.setState({style});
                  }}
                />
              </Form.Item>
              <Form.Item>
                <DataLoader
                  parsers={[
                    this._geoJsonParser,
                    this._wfsParser,
                    this._shapefileParser
                  ]}
                  onDataRead={(data: GsData) => {
                    notification.success({
                      message: locale.loadedSuccess
                    });
                    this.setState({data});
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={this.onExamplesButtonClicked}
                >
                  {locale.examples}
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="main-content">
            <div className="gui-wrapper">
              <h2>{locale.graphicalEditor}</h2>
              {cardLayout ? (
                <CardStyle
                  style={style}
                  data={data}
                  onStyleChange={(style: GsStyle) => {
                    this.setState({style});
                  }}
                  iconLibraries={iconLibraryConfig}
                  rendererType={ruleRendererType}
                />
              ) : (
                <Style
                  style={style}
                  data={data}
                  onStyleChange={(style: GsStyle) => {
                    this.setState({style});
                  }}
                  iconLibraries={iconLibraryConfig}
                  compact={true}
                  ruleRendererType={ruleRendererType}
                  sldRendererProps={{
                    wmsBaseUrl: 'https://ows-demo.terrestris.de/geoserver/ows?',
                    layer: 'terrestris:bundeslaender'
                  }}
                />
              )}
            </div>
            <div className="right-wrapper">
              <Collapse defaultActiveKey={['code-editor']}>
                <Collapse.Panel header={locale.codeEditor} key="code-editor">
                  <CodeEditor
                    style={style}
                    parsers={[
                      this._sldStyleParser,
                      this._sldStyleParserSE
                    ]}
                    defaultParser={this._sldStyleParser}
                    onStyleChange={(style: GsStyle) => {
                      this.setState({style});
                    }}
                    showSaveButton={true}
                    showCopyButton={true}
                  />
                </Collapse.Panel>
                <Collapse.Panel header={locale.previewMap} key="preview-map">
                  <PreviewMap
                    style={style}
                    map={map}
                    mapHeight="100%"
                    data={data}
                  />
                </Collapse.Panel>
                <Collapse.Panel header={locale.legend} key="legend">
                  <div id="legend" />
                </Collapse.Panel>
              </Collapse>
            </div>
          </div>
          <ExamplesDialog
            visible={examplesModalVisible}
            onOkClicked={this.onExampleSelected}
            width="50%"
          />
        </div>
      </ConfigProvider>
    );
  }
}

export default App;
