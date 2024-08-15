import type { Schema, Attribute } from '@strapi/strapi';

export interface DataInfo extends Schema.Component {
  collectionName: 'components_data_infos';
  info: {
    displayName: 'info';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.info': DataInfo;
    }
  }
}
