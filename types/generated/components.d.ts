import type { Schema, Attribute } from '@strapi/strapi';

export interface AktualnosciAktualnosciKomponent extends Schema.Component {
  collectionName: 'components_aktualnosci_aktualnosci_komponents';
  info: {
    displayName: 'Aktualnosci_komponent';
  };
  attributes: {
    tytul: Attribute.Text;
    data: Attribute.Date;
    opis: Attribute.Blocks;
  };
}

export interface AktualnosciAktualnosci extends Schema.Component {
  collectionName: 'components_aktualnosci_aktualnoscis';
  info: {
    displayName: 'aktualnosci';
  };
  attributes: {
    opis: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'aktualnosci.aktualnosci-komponent': AktualnosciAktualnosciKomponent;
      'aktualnosci.aktualnosci': AktualnosciAktualnosci;
    }
  }
}
