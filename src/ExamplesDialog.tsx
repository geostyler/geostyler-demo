import * as React from 'react';
import { useState } from 'react';

import {
  Modal, ModalProps
} from 'antd';

import './ExamplesDialog.less';

import circle from './assets/sample-styles/circle.json';
import nestedFilter from './assets/sample-styles/nested-filter.json';
import populationQuantiles from './assets/sample-styles/population-quantiles.json';
import zoomBasedPoint from './assets/sample-styles/zoom-based-point.json';
import alternatingLine from './assets/sample-styles/alternating-line.json';
import raster from './assets/sample-styles/raster.json';

import { Style } from 'geostyler-style';

type ExampleStyle = {
  id: number,
  name: string,
  description?: string,
  style: Style
};

const exampleStyles: ExampleStyle[] = [{
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
}];

interface ExamplesDialogProps extends ModalProps {
  open?: boolean;
  onOkClicked: (style?: Style) => void;
}

export const ExamplesDialog: React.FC<ExamplesDialogProps> = ({
  open = false,
  onOkClicked,
  ...passThroughProps
}) => {

  const [selectedStyleId, setSelectedStyleId] = useState<number>();

  const onExampleClicked = (evt: React.MouseEvent<HTMLElement>) => {
    const element: HTMLElement = evt.target as HTMLElement;
    setSelectedStyleId(Number(element.dataset.id));
  }

  const onOk = () => {
    const selectedExampleStyle = exampleStyles.find(exampleStyle => exampleStyle.id === selectedStyleId);
    if (selectedExampleStyle && onOkClicked) {
      onOkClicked(selectedExampleStyle.style);
    }
  }

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
        onClick={onExampleClicked}
        title={exampleStyle.description}
      >
        <span className="title">{exampleStyle.name}</span>
        <div className="description">{exampleStyle.description}</div>
      </div>
    );
  });

  return (
    <Modal
      className="examples-dialog"
      {...passThroughProps}
      title={"Examples"}
      open={open}
      onOk={onOk}
      onCancel={() => onOkClicked()}
    >
      {cards}
    </Modal>
  );
}
