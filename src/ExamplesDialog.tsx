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
  id: number,
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
  selectedStyleId?: number;
  exampleStyles: ExampleStyle[];
}

class ExamplesDialog extends React.Component<ExamplesDialogProps, ExampleDialogState> {

  constructor(props: ExamplesDialogProps) {
    super(props);
    this.state = {
      exampleStyles: [{
        name: 'Basic Point',
        id: 1,
        description: '… the most simple example.',
        style: circle as Style
      }, {
        name: 'Basic Point',
        id: 2,
        description: '… with a nested Filter',
        style: nestedFilter as Style
      }, {
        name: 'Zoom based Point',
        id: 3,
        description: '… from GeoServer SLD Cookbook',
        style: zoomBasedPoint as Style
      },{
        name: 'Alternating Line',
        id: 4,
        description: '… from GeoServer SLD Cookbook',
        style: alternatingLine as Style
      }, {
        name: 'Classified Polygons',
        id: 5,
        description: '… for population. Created via classification tool.',
        style: populationQuantiles as Style
      }, {
        name: 'Raster ColorMap',
        id: 6,
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
    const selectedStyleId = parseInt(element.dataset.id as string, 10);
    this.setState({selectedStyleId});
  }

  onOk = () => {
    const {
      onOkClicked
    } = this.props;
    const {
      exampleStyles,
      selectedStyleId
    } = this.state;
    const selectedExampleStyle = exampleStyles.find(exampleStyle => exampleStyle.id === selectedStyleId);
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
      selectedStyleId,
      exampleStyles,
      locale
    } = this.state;

    const cards = exampleStyles!.map(exampleStyle => {
      let className = 'example-card';
      if (exampleStyle.id === selectedStyleId) {
        className += ' selected';
      }
      return (
        <div
          data-id={exampleStyle.id}
          className={className}
          key={exampleStyle.name + exampleStyle.description}
          onClick={this.onExampleClicked}
          title={exampleStyle.description}
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
