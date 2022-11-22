import React from "react";
import { Select } from "antd";
import { FC } from "react";
import { AppLocale } from "./App";
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/zh-cn';

import {
  locale as GsLocale,
} from 'geostyler';

export interface LanguageSwitcherProps {
  onChange: (locale: AppLocale) => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ onChange }) => {
  const onLangChange = (lang: 'en' | 'de' | 'es' | 'fr' | 'ch-zn') => {
    moment.locale(lang);
    switch (lang) {
      case 'en':
          onChange({
              codeEditor: 'Code Editor',
              cardLayout: 'CardLayout (Beta)',
              examples: 'Examples',
              graphicalEditor: 'Graphical Editor',
              language: 'Language',
              legend: 'Legend',
              previewMap: 'Preview Map',
              loadedSuccess: 'Loaded successfully!',
              previewMapDataProjection: 'Projection of sample data is expected to be EPSG:4326',
              ...GsLocale.en_US
          });
          break;
        case 'de':
          onChange({
              codeEditor: 'Code Editor',
              cardLayout: 'CardLayout (Beta)',
              examples: 'Beispiele',
              graphicalEditor: 'Grafischer Editor',
              language: 'Sprache',
              legend: 'Legende',
              previewMap: 'Vorschau Karte',
              loadedSuccess: 'Erfolgreich geladen!',
              previewMapDataProjection: 'Die Beispieldaten werden in der Projektion EPSG:4326 erwartet.',
              ...GsLocale.de_DE
          });
          break;
        case 'es':
          onChange({
              codeEditor: 'Editor de código',
              cardLayout: 'CardLayout (Beta)',
              examples: 'Ejemplos',
              graphicalEditor: 'Editor gráfico',
              language: 'Idioma',
              legend: 'Leyenda',
              previewMap: 'Mapa de previsualización',
              loadedSuccess: 'Cargado con éxito!',
              previewMapDataProjection: 'Los datos de la muestra se esperan en la proyección EPSG:4326.',
              ...GsLocale.es_ES
          });
          break;
        case 'fr':
          onChange({
              codeEditor: 'Éditeur de code',
              cardLayout: 'CardLayout (Beta)',
              examples: 'Exemples',
              graphicalEditor: 'Éditeur graphique',
              language: 'Langue',
              loadedSuccess: 'Chargement réussi!',
              legend: 'Légende',
              previewMap: 'Carte de prévisualisation',
              previewMapDataProjection: 'Les données d\'exemple sont attendues dans la projection EPSG:4326.',
              ...GsLocale.fr_FR
          });
          break;
        case 'ch-zn':
          onChange({
              codeEditor: '代码编辑器',
              cardLayout: 'CardLayout (Beta)',
              examples: '例子',
              graphicalEditor: '图形编辑器',
              language: '语言',
              legend: 'Legend',
              previewMap: '预览图',
              loadedSuccess: '成功加载',
              previewMapDataProjection: '预计样本数据将在EPSG:4326的预测中出现。',
              ...GsLocale.zh_CN
          });
          break;
        default:
          onChange({
              codeEditor: 'Code Editor',
              cardLayout: 'CardLayout (Beta)',
              examples: 'Examples',
              graphicalEditor: 'Graphical Editor',
              language: 'Language',
              legend: 'Legend',
              previewMap: 'Preview Map',
              loadedSuccess: 'Loaded successfully!',
              previewMapDataProjection: 'string',
              ...GsLocale.en_US
          });
          break;
    }
  };

  return (
    <Select
      defaultValue={'en'}
      onChange={onLangChange}
      showArrow={false}
      style={{
        width: '140px'
      }}
      options={[
        {
          label: '🇨🇳 Chinese (中文)',
          value: 'ch-zn'
        },
        {
          label: '🇺🇸 English',
          value: 'en'
        },
        {
          label: '🇩🇪 German',
          value: 'de'
        },
        {
          label: '🇪🇸 Spanish',
          value: 'es'
        },
        {
          label: '🇫🇷 French',
          value: 'fr'
        }
      ]}
    />
  );
}
