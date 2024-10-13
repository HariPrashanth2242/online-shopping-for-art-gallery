import {createContext,useState,useEffect} from 'react';
import { products } from '../assets/assets';
import {useNavigate} from 'react-router-dom'
import Explore from '../pages/Explore';
export const ShopContext = createContext();

const ShopContextProvider =(props)=>{
    const currency = '₹';
    const delivery_fee=100;
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState('');
    const navigate=useNavigate();
    
    const addToCart=async(itemId)=>{
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            cartData[itemId]+=1;
        }
        else{
            cartData[itemId]={};
            cartData[itemId]=1;
        }

        setCartItems(cartData);
        
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            totalCount += cartItems[itemId]; 
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, quantity) => {
        const cartData = { ...cartItems };
    
        
        if (quantity <= 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);
    };


    const getCartAmount = () => {
        let totalAmount = 0;

        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmount;
    };

    const value={
        products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch,cartItems,addToCart,getCartCount,updateQuantity,getCartAmount,navigate,backendURL,setToken,token
        }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;