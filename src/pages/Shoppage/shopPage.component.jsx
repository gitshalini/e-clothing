import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/Collection-preview.component';
import { useState } from 'react';

export default function ShopPage() {
    const [collection, SetCollection ]=useState(SHOP_DATA)
    return (
        <div className="shop-page">
            {collection.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    );
}
