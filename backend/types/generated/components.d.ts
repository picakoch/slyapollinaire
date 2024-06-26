import type { Schema, Attribute } from '@strapi/strapi';

export interface MainTile extends Schema.Component {
  collectionName: 'components_main_tiles';
  info: {
    displayName: 'tile';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'> & Attribute.Required;
    tags: Attribute.Relation<'main.tile', 'oneToMany', 'api::tag.tag'>;
    date: Attribute.Date & Attribute.Required;
    large: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main.tile': MainTile;
    }
  }
}
