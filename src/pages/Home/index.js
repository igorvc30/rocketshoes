import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://utennis.com.br/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/b/7/b700n-7743-tenis-asics-gel-volley-elite-ff-mt-verde-e-azul.jpg"
          alt="Melhor tenis de volei"
        />
        <strong>Tênis Asics Gel-Volley Elite FF mt</strong>
        <span>R$350,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://utennis.com.br/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/b/7/b700n-7743-tenis-asics-gel-volley-elite-ff-mt-verde-e-azul.jpg"
          alt="Melhor tenis de volei"
        />
        <strong>Tênis Asics Gel-Volley Elite FF mt</strong>
        <span>R$350,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://utennis.com.br/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/b/7/b700n-7743-tenis-asics-gel-volley-elite-ff-mt-verde-e-azul.jpg"
          alt="Melhor tenis de volei"
        />
        <strong>Tênis Asics Gel-Volley Elite FF mt</strong>
        <span>R$350,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://utennis.com.br/media/catalog/product/cache/1/image/512x512/9df78eab33525d08d6e5fb8d27136e95/b/7/b700n-7743-tenis-asics-gel-volley-elite-ff-mt-verde-e-azul.jpg"
          alt="Melhor tenis de volei"
        />
        <strong>Tênis Asics Gel-Volley Elite FF mt</strong>
        <span>R$350,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
