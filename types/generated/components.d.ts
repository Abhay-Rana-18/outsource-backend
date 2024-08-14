import type { Schema, Attribute } from '@strapi/strapi';

export interface DataInfo extends Schema.Component {
  collectionName: 'components_data_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    img: Attribute.Text;
    title: Attribute.String;
    desc: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.info': DataInfo;
    }
  }
}
