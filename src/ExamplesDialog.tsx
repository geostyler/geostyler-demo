import * as React from 'react';

import {
  LocaleProvider,
  Modal
} from 'antd';
import { Locale } from 'antd/lib/locale-provider/index';

import './ExamplesDialog.css';

import circle from './assets/sample-styles/circle.json';
import nestedFilter from './assets/sample-styles/nested-filter.json';
import populationQuantiles from './assets/sample-styles/population-quantiles.json';
import zoomBasedPoint from './assets/sample-styles/zoom-based-point.json';
import alternatingLine from './assets/sample-styles/alternating-line.json';
import raster from './assets/sample-styles/raster.json';

import {
  locale as GsLocale
} from 'geostyler';
import { Style } from 'geostyler-style';
import { ModalProps } from 'antd/lib/modal';

type ExampleStyle = {
  name: string,
  description?: string,
  style: Style
};

// i18n
export interface ExamplesDialogLocale extends Locale {
  examples: string;
}

// default props
interface ExamplesDialogDefaultProps extends Partial<ModalProps> {
  visible: boolean;
}

// non default props
interface ExamplesDialogProps extends Partial<ExamplesDialogDefaultProps> {
  onOkClicked: (style?: Style) => void;
}

// state
interface ExampleDialogState {
  locale: ExamplesDialogLocale;
  selectedStyleName?: string;
  exampleStyles: ExampleStyle[];
}

class ExamplesDialog extends React.Component<ExamplesDialogProps, ExampleDialogState> {

  constructor(props: ExamplesDialogProps) {
    super(props);
    this.state = {
      exampleStyles: [{
        name: 'Basic Point',
        description: 'The most simple example.',
        style: circle as Style
      }, {
        name: 'Basic Point',
        description: '… with a nested Filter',
        style: nestedFilter as Style
      }, {
        name: 'Zoom based Point',
        description: '… from GeoServer SLD Cookbook',
        style: zoomBasedPoint as Style
      },{
        name: 'Alternating Line',
        description: '… from GeoServer SLD Cookbook',
        style: alternatingLine as Style
      }, {
        name: 'Classified Polygons',
        description: '… for population. Created via Classification tool.',
        style: populationQuantiles as Style
      }, {
        name: 'Raster ColorMap',
        description: '… with a multi-color gradient from GeoServer SLD Cookbook',
        style: raster as Style
      }],
      locale: {
        examples: 'Examples',
        ...GsLocale.en_US
      }
    };
  }

  public static defaultProps: ExamplesDialogDefaultProps = {
    visible: false,
  };

  public static componentName: string = 'ExamplesDialog';

  onExampleClicked = (evt: React.MouseEvent<HTMLElement>) => {
    const element: HTMLElement = evt.target as HTMLElement;
    const selectedStyleName = element.dataset.name;
    this.setState({selectedStyleName});
  }

  onOk = () => {
    const {
      onOkClicked
    } = this.props;
    const {
      exampleStyles,
      selectedStyleName
    } = this.state;
    const selectedExampleStyle = exampleStyles.find(exampleStyle => exampleStyle.name === selectedStyleName);
    if (selectedExampleStyle && onOkClicked) {
      onOkClicked(selectedExampleStyle.style);
    }
  }

  public render() {
    const {
      visible,
      onOkClicked,
      ...passThroughProps
    } = this.props;
    const {
      selectedStyleName,
      exampleStyles,
      locale
    } = this.state;

    const cards = exampleStyles!.map(exampleStyle => {
      let className = 'example-card';
      if (exampleStyle.name === selectedStyleName) {
        className += ' selected';
      }
      return (
        <div
          data-name={exampleStyle.name}
          className={className}
          key={exampleStyle.name + exampleStyle.description}
          onClick={this.onExampleClicked}
        >
          <span className="title">{exampleStyle.name}</span>
          <div className="description">{exampleStyle.description}</div>
        </div>
      );
    });

    return (
      <LocaleProvider locale={locale}>
          <Modal
            className="examples-dialog"
            {...passThroughProps}
            title={locale.examples}
            visible={visible}
            onOk={this.onOk}
            onCancel={() => onOkClicked()}
          >
            {cards}
          </Modal>
      </LocaleProvider>
    );
  }
}

export default ExamplesDialog;
