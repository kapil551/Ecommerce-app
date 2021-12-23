import { useDispatch } from "react-redux";
import { addItemToBakset, removeItemFromBakset } from "../features/basketSlice";

function Product( { title, id } ) {

    // useDispatch() hook:
    const dispatch = useDispatch();

    // add Item to Basket
    const addItem = () => {

        const productToAdd = {
            id, title
        };

        // addItemToBasket is an "action" defined in basketSlice.js
        dispatch(addItemToBakset(productToAdd))

    }

    // remove Item to Basket
    const removeItem = () => {

        // remove the Item with the given id from basket
        dispatch(removeItemFromBakset( { id } ));
    }

    return (
        <div className="p-10 border-blue-700 border m-5 flex justify-between">
            
            <p> { title } </p>

            <div className="flex flex-col">
                
                <button onClick={addItem} className="p-4 bg-red-500 rounded-2xl focus:outline-none focus:ring-2 ring-red-800 hover:bg-red-300"> Add to basket </button>

                <button onClick={removeItem}> Remove Item from Basket </button>

            </div>

        </div>
    )
}

export default Product;
