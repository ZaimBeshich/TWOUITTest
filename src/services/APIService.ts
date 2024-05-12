import { setCatalogLoading, setProducts } from '../store/productsSlice';
import { AppDispatch } from '../store/store';
import { History, Order, Product, Profile } from '../constants/types';
import { setCartLoading } from '../store/cartSlice';
import {
  setHistory,
  setProfile,
  setProfileLoading,
} from '../store/profileSlice';

const url = 'http://localhost:3000';

export const getProducts = async (dispatch: AppDispatch) => {
  dispatch(setCatalogLoading(true));
  try {
    const data: Product[] = await fetch(`${url}/products`).then((res) =>
      res.json()
    );
    dispatch(setProducts(data));
  } catch (error) {
    console.error('Failed to fetch products:', error);
  } finally {
    dispatch(setCatalogLoading(false));
  }
};

export const createOrder = async (order: Order, dispatch: AppDispatch) => {
  dispatch(setCartLoading(true));
  try {
    await fetch(`${url}/history`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
  } catch (error) {
    console.error('Failed to create order:', error);
    throw error;
  } finally {
    dispatch(setCartLoading(false));
  }
};

export const getProfile = async (dispatch: AppDispatch) => {
  dispatch(setProfileLoading(true));
  try {
    const profile: Profile = await fetch(`${url}/profile`).then((res) =>
      res.json()
    );
    dispatch(setProfile(profile));
  } catch (error) {
    console.error('Failed to fetch profile:', error);
  } finally {
    dispatch(setProfileLoading(false));
  }
};

export const getHistory = async (dispatch: AppDispatch) => {
  dispatch(setProfileLoading(true));
  try {
    const history: History[] = await fetch(`${url}/history`).then((res) =>
      res.json()
    );

    dispatch(setHistory(history));
  } catch (error) {
    console.error('Failed to fetch history:', error);
  } finally {
    dispatch(setProfileLoading(false));
  }
};

export const updateProfile = async (name: string, email: string) => {
  try {
    await fetch(`${url}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });
  } catch (error) {
    console.error('Failed to update profile:', error);
  }
};
