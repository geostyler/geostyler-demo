import React from 'react';
import { Select } from 'antd';
import { FC } from 'react';
import type { AppLocale } from './App';
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/es';
import 'moment/locale/fr';
import 'moment/locale/zh-cn';

import {
  GeoStylerLocale,
  locale as GsLocale,
} from 'geostyler';

export interface LanguageSwitcherProps {
  onChange: (appLocale: AppLocale, locale: GeoStylerLocale) => void;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ onChange }) => {
  const onLangChange = (lang: 'en' | 'de' | 'es' | 'fr' | 'ch-zn') => {
    moment.locale(lang);
    switch (lang) {
      case 'en':
        onChange({
          codeEditor: 'Code Editor',
          cardLayout: 'CardLayout',
          examples: 'Examples',
          graphicalEditor: 'Graphical Editor',
          language: 'Language',
          legend: 'Legend',
          splitView: 'Split View',
          previewMap: 'Preview Map',
          loadedSuccess: 'Loaded successfully!',
          previewMapDataProjection: 'Projection of sample data is expected to be EPSG:4326',
          errorBoundaryDescription: 'Invalid geostyler-style. Can\'t render',
        }, GsLocale.en_US);
        break;
      case 'de':
        onChange({
          codeEditor: 'Code Editor',
          cardLayout: 'CardLayout (Beta)',
          examples: 'Beispiele',
          graphicalEditor: 'Grafischer Editor',
          language: 'Sprache',
          legend: 'Legende',
          splitView: 'Geteilte Vorschau',
          previewMap: 'Vorschau Karte',
          loadedSuccess: 'Erfolgreich geladen!',
          previewMapDataProjection: 'Die Beispieldaten werden in der Projektion EPSG:4326 erwartet.',
          errorBoundaryDescription: 'Ungültiger geostyler-style. Rendern nicht möglich.',
        }, GsLocale.de_DE);
        break;
      case 'es':
        onChange({
          codeEditor: 'Editor de código',
          cardLayout: 'CardLayout (Beta)',
          examples: 'Ejemplos',
          graphicalEditor: 'Editor gráfico',
          language: 'Idioma',
          legend: 'Leyenda',
          splitView: 'Vista partida',
          previewMap: 'Mapa de previsualización',
          loadedSuccess: 'Cargado con éxito!',
          previewMapDataProjection: 'Los datos de la muestra se esperan en la proyección EPSG:4326.',
          errorBoundaryDescription: 'geostyler-style no válido. No se puede renderizar.',
        }, GsLocale.es_ES);
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
          splitView: 'Vue partagée',
          previewMap: 'Carte de prévisualisation',
          previewMapDataProjection: 'Les données d\'exemple sont attendues dans la projection EPSG:4326.',
          errorBoundaryDescription: 'geostyler-style non valide. Impossible de rendre.',
        }, GsLocale.fr_FR);
        break;
      case 'ch-zn':
        onChange({
          codeEditor: '代码编辑器',
          cardLayout: 'CardLayout (Beta)',
          examples: '例子',
          graphicalEditor: '图形编辑器',
          language: '语言',
          legend: 'Legend',
          splitView: 'Split View',
          previewMap: '预览图',
          loadedSuccess: '成功加载',
          previewMapDataProjection: '预计样本数据将在EPSG:4326的预测中出现。',
          errorBoundaryDescription: '无效的geostyler-style。无法渲染。',
        }, GsLocale.zh_CN);
        break;
      default:
        onChange({
          codeEditor: 'Code Editor',
          cardLayout: 'CardLayout (Beta)',
          examples: 'Examples',
          graphicalEditor: 'Graphical Editor',
          language: 'Language',
          legend: 'Legend',
          splitView: 'Split View',
          previewMap: 'Preview Map',
          loadedSuccess: 'Loaded successfully!',
          previewMapDataProjection: 'string',
          errorBoundaryDescription: 'Invalid geostyler-style. Can\'t render',
        }, GsLocale.en_US);
        break;
    }
  };

  return (
    <Select
      defaultValue={'en'}
      onChange={onLangChange}
      suffixIcon={null}
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
