import React, { useState } from 'react';

import {
  Switch,
  Button,
  Form,
  notification,
  Radio
} from 'antd';

import {
  Style as GsStyle
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
  GeoStylerContext,
  CardStyle,
  GeoStylerLocale
} from 'geostyler';

// @ts-expect-error TODO fix declare module entry
import logo from './assets/logo.svg';
import './App.less';
import { ExamplesDialog } from './ExamplesDialog';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceTileWMS from 'ol/source/TileWMS';
import { fromLonLat } from 'ol/proj';
import { LanguageSwitcher } from './LanguageSwitcher';
import QGISStyleParser from 'geostyler-qgis-parser';
import { GeoStylerContextInterface } from 'geostyler/dist/context/GeoStylerContext/GeoStylerContext';
import { LegendRenderer } from 'geostyler-legend';

const sldStyleParser = new SldStyleParser({
  builderOptions: {
    format: true
  }
});
const sldStyleParserSE = new SldStyleParser({
  sldVersion: '1.1.0',
  builderOptions: {
    format: true
  }
});
sldStyleParserSE.title = 'SLD 1.1.0 - Symbology Encoding';
const mapBoxStyleParser = new MapboxStyleParser({
  pretty: true
});
const qgisParser = new QGISStyleParser();
const geoJsonParser = new GeoJsonParser();
const shapefileParser = new ShapefileParser();
const wfsParser = new WfsParser();

export interface AppLocale {
  codeEditor: string;
  cardLayout: string;
  examples: string;
  graphicalEditor: string;
  language: string;
  legend: string;
  splitView: string;
  previewMap: string;
  loadedSuccess: string;
  previewMapDataProjection: string;
}

const iconLibraries = [{
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

export const App: React.FC = () => {

  const [locale, setLocale] = useState<GeoStylerLocale>(GsLocale.en_US);
  const [appLocale, setAppLocale] = useState<AppLocale>({
    codeEditor: 'Code Editor',
    cardLayout: 'CardLayout (Beta)',
    examples: 'Examples',
    graphicalEditor: 'Graphical Editor',
    language: 'Language',
    legend: 'Legend',
    splitView: 'Split View',
    previewMap: 'Preview Map',
    loadedSuccess: 'Loaded successfully!',
    previewMapDataProjection: 'The sample data is expected in the projection EPSG:4326.'
  });
  const [cardLayout, setCardLayout] = useState<boolean>(false);
  const [data, setData] = useState<GsData>();
  const [ruleRendererType, setRuleRendererType] = useState<'SLD' | 'OpenLayers'>('OpenLayers');
  const [styleDisplayMode, setStyleDisplayMode] = useState<'Map' | 'Code' | 'Split' | 'Legend'>('Split');
  const [style, setStyle] = useState<GsStyle>({
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
  });
  const [examplesModalVisible, setExamplesModalVisibile] = useState<boolean>(false);

  const onRuleRendererChange = (e: any) => {
    setRuleRendererType(e.target.value);
  }

  const onStyleModeChange = (e: any) => {
    setStyleDisplayMode(e.target.value);
  }

  const onCardLayoutSwitchChange = (card: boolean) => {
    setCardLayout(card);
  }

  const onExamplesButtonClicked = () => {
    setExamplesModalVisibile(!examplesModalVisible);
  }

  const onExampleSelected = (exampleStyle?: GsStyle) => {
    if (exampleStyle) {
      setStyle(exampleStyle);
    }
    setExamplesModalVisibile(false);
  }

  const legendRenderer = new LegendRenderer({
    maxColumnWidth: 300,
    maxColumnHeight: 300,
    overflow: 'auto',
    styles: [structuredClone(style)],
    size: [600, 300],
    hideRect: true
  });
  const legendEl = document.getElementById("legend");
  if (legendEl) {
    legendRenderer.render(legendEl);
  }

  const map = new OlMap({
    layers: [
      new OlLayerTile({
        source: new OlSourceTileWMS({
          url: 'https://sgx.geodatenzentrum.de/wms_topplus_open',
          params: {
            'LAYERS': 'web_light_grau'
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

  const ctx: GeoStylerContextInterface = {
    composition: {
      IconEditor: {
        iconLibraries
      },
      Renderer: {
        rendererType: ruleRendererType
      },
      SLDRenderer: {
        wmsBaseUrl: 'https://data.geostyler.org/geoserver/ows?',
        layer: 'osm:osm_roads'
      }
    },
    data,
    locale
  };

  return (
    <GeoStylerContext.Provider value={ctx}>
      <div className="app">
        <header className="gs-header">
          <span className="logo-title">
            <img className="logo" src={logo} alt="logo" />
            <span className="app-title">GeoStyler</span>
          </span>
        </header>
        <div className="gs-settings">
          <Form layout="inline">
            <Form.Item label={appLocale.language}>
              <LanguageSwitcher onChange={(newAppLocale, newLocale) => {
                setAppLocale(newAppLocale);
                setLocale(newLocale);
              }} />
            </Form.Item>
            <Form.Item label={appLocale.cardLayout}>
              <Switch
                checked={cardLayout}
                onChange={onCardLayoutSwitchChange}
              />
            </Form.Item>
            <Form.Item label="Symbolizer Renderer">
              <Radio.Group
                className="renderer-select"
                onChange={onRuleRendererChange}
                value={ruleRendererType}
              >
                <Radio.Button value="OpenLayers">OpenLayers</Radio.Button>
                <Radio.Button value="SLD">SLD</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <StyleLoader
                parsers={[
                  mapBoxStyleParser,
                  qgisParser,
                  sldStyleParser,
                  sldStyleParserSE
                ]}
                onStyleRead={(newStyle: GsStyle) => {
                  notification.success({
                    message: appLocale.loadedSuccess
                  });
                  setStyle(newStyle);
                }}
              />
            </Form.Item>
            <Form.Item>
              <DataLoader
                parsers={[
                  geoJsonParser,
                  wfsParser,
                  shapefileParser
                ]}
                onDataRead={(newData: GsData) => {
                  notification.success({
                    message: appLocale.loadedSuccess
                  });
                  setData(newData);
                }}
                uploadButtonProps={{
                  onRemove: () => {
                    setData(undefined);
                  }
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                onClick={onExamplesButtonClicked}
              >
                {appLocale.examples}
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="left-wrapper">
          <h2>{appLocale.graphicalEditor}</h2>
          {cardLayout ? (
            <CardStyle
              style={style}
              onStyleChange={setStyle}
            />
          ) : (
            <Style
              style={style}
              onStyleChange={setStyle}
            />
          )}
        </div>
        <div className="right-wrapper">
          <Form layout="inline" className='display-radio'>
            <Form.Item label="Display">
              <Radio.Group
                className="renderer-select"
                onChange={onStyleModeChange}
                value={styleDisplayMode}
              >
                <Radio.Button value="Split">{appLocale.splitView}</Radio.Button>
                <Radio.Button value="Code">{appLocale.codeEditor}</Radio.Button>
                <Radio.Button value="Map">{appLocale.previewMap}</Radio.Button>
                <Radio.Button value="Legend">{appLocale.legend}</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Form>
          <div className="code-display-container">
            <div hidden={styleDisplayMode !== 'Code' && styleDisplayMode !== 'Split'}>
              <CodeEditor
                style={style}
                parsers={[
                  mapBoxStyleParser,
                  qgisParser,
                  sldStyleParser,
                  sldStyleParserSE
                ]}
                defaultParser={sldStyleParser}
                onStyleChange={setStyle}
                showSaveButton={true}
                showCopyButton={true}
              />
            </div>
            <div hidden={styleDisplayMode !== 'Map' && styleDisplayMode !== 'Split'}>
              <p className='preview-map-info'>{appLocale.previewMapDataProjection}</p>
              <PreviewMap
                style={structuredClone(style)}
                map={map}
                mapHeight="100%"
              />
            </div>
            <div className='legend-wrapper' hidden={styleDisplayMode !== 'Legend'}>
              <h2>{appLocale.legend}</h2>
              <div id="legend"></div>
            </div>
          </div>
        </div>
        <ExamplesDialog
          open={examplesModalVisible}
          onOkClicked={onExampleSelected}
          width="50%"
        />
        <footer className="gs-footer">
          <span className="center-footer">
            <a href="https://www.terrestris.de/en/impressum/">
              Imprint
            </a>
            —
            <a href="https://www.terrestris.de/en/datenschutzerklaerung">
              Privacy Policy
            </a>
            —
            {/** @ts-expect-error */}
            <a href={`https://github.com/geostyler/geostyler/releases/tag/v${import.meta.env.GEOSTYLER_VERSION}`}>
              {/** @ts-expect-error */}
              GeoStyler v{import.meta.env.GEOSTYLER_VERSION}
            </a>
          </span>
        </footer>
      </div>
    </GeoStylerContext.Provider >
  );
}

export default App;
