import * as React from 'react';

import {
  Switch,
  Button,
  Collapse,
  Form,
  notification,
  Radio
} from 'antd';
import ConfigProvider from 'antd/lib/config-provider';

import {
  Style as GsStyle,
  StyleParser as GsStyleParser
} from 'geostyler-style';

import {
  Data as GsData
} from 'geostyler-data';

import GeoJsonParser from 'geostyler-geojson-parser';
import SldStyleParser from 'geostyler-sld-parser';
import MapboxStyleParser from 'geostyler-mapbox-parser';
import ShapefileParser from 'geostyler-shapefile-parser';
import WfsParser from 'geostyler-wfs-parser';

import {
  CodeEditor,
  DataLoader,
  locale as GsLocale,
  Style,
  StyleLoader,
  PreviewMap,
  GeoStylerLocale,
  GeoStylerContext
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
import Tooltip from 'antd/es/tooltip';
import { ExclamationOutlined } from '@ant-design/icons';
import { LanguageSwitcher } from './LanguageSwitcher';
import QGISStyleParser from 'geostyler-qgis-parser';
import { GeoStylerContextInterface } from 'geostyler/dist/context/GeoStylerContext/GeoStylerContext';


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
  previewMapDataProjection: string;
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

  private _sldStyleParser = new SldStyleParser({
    builderOptions: {
      format: true
    }
  });

  private _sldStyleParserSE = new SldStyleParser({
    sldVersion: '1.1.0',
    builderOptions: {
      format: true
    }
  });

  private _mapBoxStyleParser = new MapboxStyleParser({
    pretty: true
  });

  private _qgisParser = new QGISStyleParser();

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
        previewMapDataProjection: 'The sample data is expected in the projection EPSG:4326.',
        ...GsLocale.en_US
      },
      cardLayout: false,
      ruleRendererType: 'SLD',
      examplesModalVisible: false,
      style: {
        name: 'GeoStyler Demo',
        rules: [
          {
            name: 'Rule 1',
            symbolizers: [
              {
                kind: 'Line',
                color: '#ff0000',
                width: 5
              }
            ]
          }
        ]
      }
    };
  }

  public static componentName: string = 'App';

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

    const appContext: GeoStylerContextInterface = {
      composition: {
        Renderer: {
          rendererType: ruleRendererType
        }
      }
    };

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
        zoom: 12
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
                <LanguageSwitcher onChange={(locale) => {
                  this.setState({ locale });
                }} />
              </Form.Item>
              <Form.Item label={locale.cardLayout}>
                <Switch
                  checked={cardLayout}
                  onChange={this.onCardLayoutSwitchChange}
                />
              </Form.Item>
              <Form.Item label="Symbolizer Renderer">
                <Radio.Group
                  className="renderer-select"
                  onChange={this.onRuleRendererChange}
                  value={ruleRendererType}
                >
                  <Radio.Button value="OpenLayers">OpenLayers</Radio.Button>
                  <Radio.Button value="SLD">SLD</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item>
                <StyleLoader
                  parsers={[
                    this._mapBoxStyleParser,
                    this._qgisParser,
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
                  uploadButtonProps={{
                    onRemove: () => {
                      this.setState({
                        data: undefined
                      });
                    }
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
                <GeoStylerContext.Provider value={appContext}>
                  <CardStyle
                    style={style}
                    data={data}
                    onStyleChange={(style: GsStyle) => {
                      this.setState({style});
                    }}
                    iconLibraries={iconLibraryConfig}
                  />
                </GeoStylerContext.Provider>
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
                      this._mapBoxStyleParser,
                      this._qgisParser,
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
                <Collapse.Panel
                  header={locale.previewMap} key="preview-map"
                  extra={
                    <Tooltip title={locale.previewMapDataProjection}>
                      <ExclamationOutlined />
                    </Tooltip>
                  }
                >
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
