import React from 'react';
import { WebView } from 'react-native-webview';

const AddProduct = () => {
  const url = 'https://mymern.vercel.app/addp';

  return (
    <WebView
      source={{ uri: url }}
      style={{ flex: 1 }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
    />
  );
};

export default AddProduct;
